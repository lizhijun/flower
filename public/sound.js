// Slow, original ambient harmonies with occasional soft, filtered wind.
(() => {
  const button = document.getElementById('sound-toggle');
  if (!button) return;
  const garden = document.body.dataset.soundscape === 'garden', ethereal = document.body.dataset.soundscape === 'ethereal';
  let enabled = true, audio, master, timer, phrase = 0, lastTone = -1, lastAdd = -Infinity;
  let activated = false;
  const voices = new Set();
  try { enabled = localStorage.getItem('fori-studio-sound') !== 'off'; } catch {}
  function update() {
    const playing = enabled && audio?.state === 'running' && !document.hidden;
    button.textContent = playing ? '聲音 開 · Sound on' : enabled ? '開啟聲音 · Play sound' : '聲音 關 · Sound off';
    button.setAttribute('aria-pressed', String(playing));
    button.setAttribute('aria-label', playing ? '關閉背景音樂與音效 · Mute sound' : '開啟背景音樂與音效 · Play sound');
  }
  function note(frequency, at, duration, volume, attack, overtone = 1) {
    const oscillator = audio.createOscillator(), envelope = audio.createGain();
    oscillator.type = 'sine'; oscillator.frequency.value = frequency * overtone;
    envelope.gain.setValueAtTime(0, at);
    envelope.gain.linearRampToValueAtTime(volume, at + attack);
    envelope.gain.exponentialRampToValueAtTime(.0001, at + duration);
    oscillator.connect(envelope); envelope.connect(master);
    voices.add(oscillator);
    oscillator.onended = () => { voices.delete(oscillator); oscillator.disconnect(); envelope.disconnect(); };
    oscillator.start(at); oscillator.stop(at + duration + .05);
  }
  function wind(at) {
    const duration = 9 + Math.random() * 4;
    const source = audio.createBufferSource(), low = audio.createBiquadFilter(), high = audio.createBiquadFilter(), gain = audio.createGain();
    const buffer = audio.createBuffer(1, Math.ceil(audio.sampleRate * duration), audio.sampleRate), data = buffer.getChannelData(0);
    let brown = 0;
    for (let i = 0; i < data.length; i++) { brown = (brown + .02 * (Math.random() * 2 - 1)) / 1.02; data[i] = brown * 3.5; }
    source.buffer = buffer; high.type = 'highpass'; high.frequency.value = 110;
    low.type = 'lowpass'; low.Q.value = .3; low.frequency.setValueAtTime(420, at); low.frequency.linearRampToValueAtTime(850, at + duration * .45); low.frequency.linearRampToValueAtTime(420, at + duration);
    gain.gain.setValueAtTime(0, at); gain.gain.linearRampToValueAtTime(.075, at + duration * .4); gain.gain.linearRampToValueAtTime(.045, at + duration * .65); gain.gain.linearRampToValueAtTime(0, at + duration);
    source.connect(high); high.connect(low); low.connect(gain); gain.connect(master);
    voices.add(source); source.onended = () => { voices.delete(source); source.disconnect(); high.disconnect(); low.disconnect(); gain.disconnect(); };
    source.start(at); source.stop(at + duration);
  }
  function birds(at) {
    for(let i=0;i<3;i++){
      const start=at+i*.23+Math.random()*.04,osc=audio.createOscillator(),gain=audio.createGain();
      const pitch=2100+Math.random()*600;osc.type='sine';osc.frequency.setValueAtTime(pitch,start);osc.frequency.exponentialRampToValueAtTime(pitch*1.45,start+.065);osc.frequency.exponentialRampToValueAtTime(pitch*.92,start+.15);
      gain.gain.setValueAtTime(0,start);gain.gain.linearRampToValueAtTime(.012,start+.025);gain.gain.exponentialRampToValueAtTime(.0001,start+.16);osc.connect(gain);gain.connect(master);voices.add(osc);osc.onended=()=>{voices.delete(osc);osc.disconnect();gain.disconnect();};osc.start(start);osc.stop(start+.18);
    }
  }
  function gardenMusic(){
    const chords=[[261.63,329.63,392,493.88],[220,261.63,329.63,440],[174.61,261.63,349.23,440],[196,293.66,392,493.88]],chord=chords[phrase%4],now=audio.currentTime+.08;
    note(chord[0]/2,now,5,.022,.25);
    [0,2,1,3,2,1,3,2].forEach((n,i)=>{note(chord[n]*(i%3===0?2:1),now+i*.62,1.8,.036,.018);});
    if(phrase%3===0)birds(now+1.8+Math.random()*2);
    phrase++;timer=setTimeout(music,5000);
  }
  function etherealMusic(){
    const chords=[[73.42,110,146.83],[65.41,98,130.81],[87.31,130.81,174.61],[65.41,98,146.83]],now=audio.currentTime+.08,chord=chords[phrase%4];
    chord.forEach((pitch,i)=>note(pitch,now+i*.7,22,.032,4.5));
    const melody=[[440,523.25,659.25],[392,587.33,523.25],[523.25,659.25,440],[392,440,587.33]][phrase%4];
    melody.forEach((pitch,i)=>{const at=now+2+i*4;note(pitch,at,7,.021,1.1);note(pitch,at+1.25,7,.009,1.8);note(pitch*2,at+.1,5,.003,1.7);});
    phrase++;timer=setTimeout(music,18000);
  }
  function music() {
    timer = undefined;
    if (!enabled || document.hidden || audio?.state !== 'running') return;
    if(garden){gardenMusic();return;}
    if(ethereal){etherealMusic();return;}
    const chords = [[130.81,196,293.66],[110,164.81,261.63],[130.81,196,329.63],[98,146.83,220]];
    const chord = chords[phrase % chords.length], now = audio.currentTime + .08;
    chord.forEach((pitch, index) => note(pitch, now + index * 1.4, 21, .032, 5));
    // Quiet gusts, separated by long stretches of stillness.
    if (phrase % 2 === 0) wind(now + 5 + Math.random() * 5);
    phrase++;
    timer = setTimeout(music, 18000);
  }
  function stop() {
    clearTimeout(timer); timer = undefined;
    if (!audio) return;
    // Fade before suspending; discard scheduled notes so returning never catches up.
    master.gain.cancelScheduledValues(audio.currentTime);
    master.gain.setTargetAtTime(0, audio.currentTime, .025);
    for (const voice of voices) { try { voice.stop(audio.currentTime + .15); } catch {} }
    setTimeout(() => {
      if ((!enabled || document.hidden) && audio.state === 'running') audio.suspend().catch(() => {});
    }, 180);
  }
  function wake() {
    if (!enabled || document.hidden || !activated) return Promise.resolve();
    try {
      const Audio = window.AudioContext || window.webkitAudioContext;
      if (!Audio) { button.textContent = '此瀏覽器無法播放 · Audio unavailable'; return Promise.resolve(); }
      if (!audio || audio.state === 'closed') {
        audio = new Audio(); master = audio.createGain(); master.gain.value = 0; master.connect(audio.destination);
        audio.onstatechange = update;
      }
      const ready = () => {
        if (!enabled || document.hidden || audio.state !== 'running') { update(); return; }
        master.gain.cancelScheduledValues(audio.currentTime);
        master.gain.setTargetAtTime(.85, audio.currentTime, .12);
        if (!timer) music();
        update();
      };
      // Retry resume inside every gesture: an earlier blocked promise may never settle.
      if (audio.state !== 'running') return audio.resume().then(ready).catch(() => update());
      ready(); return Promise.resolve();
    } catch { update(); return Promise.resolve(); }
  }
  async function added() {
    await wake();
    if (!enabled || document.hidden || audio?.state !== 'running') return;
    const now = audio.currentTime;
    if (now - lastAdd < .09) return;
    lastAdd = now;
    const choice = (lastTone + 1 + Math.floor(Math.random() * 3)) % 4;
    lastTone = choice;
    const frequency = [587.33,659.25,739.99,880][choice];
    note(frequency, now, .72, .13, .009);
    note(frequency, now, .23, .019, .006, 2.01);
    note(frequency, now, .12, .006, .004, 3.98);
  }
  function interact(event) {
    if (!event.isTrusted || event.target?.closest?.('#sound-toggle')) return;
    activated = true; void wake();
  }
  document.addEventListener('pointerdown', interact, { passive: true });
  document.addEventListener('keydown', interact);
  document.addEventListener('touchend', interact, { passive: true });
  document.addEventListener('click', interact);
  button.addEventListener('click', () => {
    const playing = enabled && audio?.state === 'running';
    enabled = !playing; activated = true;
    try { localStorage.setItem('fori-studio-sound', enabled ? 'on' : 'off'); } catch {}
    if (enabled) { void wake().then(() => added()); } else stop();
    update();
    document.dispatchEvent(new Event('fori-soundchange'));
  });
  document.addEventListener('visibilitychange', () => { if (document.hidden) stop(); else void wake(); });
  window.addEventListener('pagehide', stop);
  window.addEventListener('pageshow', () => { if (activated) void wake(); });
  globalThis.ForiSound = { added, muted: () => !enabled };
  update();
})();
