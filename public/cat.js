// A quiet visitor after sustained, visible play; never part of the exported artwork.
(() => {
  const main = document.querySelector('main');
  const visitor = document.getElementById('cat-visitor');
  const mute = document.getElementById('cat-mute');
  let audio, played = 0, lastInteraction = 0, nextVisit = 120, hiding, voicing, rising;
  let sound = true, interactions = 0;
  visitor.hidden = true;
  try { sound = localStorage.getItem('fori-cat-sound') !== 'off'; } catch {}
  function updateSound() {
    mute.textContent = sound ? '音效' : '靜音';
    mute.setAttribute('aria-label', sound ? '關閉貓咪音效' : '開啟貓咪音效');
    mute.setAttribute('aria-pressed', String(sound));
  }
  function wakeAudio() {
    if (!sound || globalThis.ForiSound?.muted()) return;
    try {
      const Audio = window.AudioContext || window.webkitAudioContext;
      if (!Audio) return;
      audio ||= new Audio();
      if (audio.state === 'suspended') audio.resume().catch(() => {});
    } catch {}
  }
  function meow() {
    if (!sound || globalThis.ForiSound?.muted() || audio?.state !== 'running') return;
    try {
      const now = audio.currentTime;
      const voice = audio.createOscillator(), envelope = audio.createGain();
      const vowel = audio.createBiquadFilter();
      voice.type = 'sawtooth';
      voice.frequency.setValueAtTime(620, now);
      voice.frequency.exponentialRampToValueAtTime(880, now + .12);
      voice.frequency.exponentialRampToValueAtTime(440, now + .62);
      vowel.type = 'bandpass'; vowel.Q.value = 1.6;
      vowel.frequency.setValueAtTime(1500, now);
      vowel.frequency.exponentialRampToValueAtTime(750, now + .65);
      envelope.gain.setValueAtTime(0, now);
      envelope.gain.linearRampToValueAtTime(.045, now + .07);
      envelope.gain.linearRampToValueAtTime(.03, now + .3);
      envelope.gain.exponentialRampToValueAtTime(.001, now + .7);
      voice.connect(vowel); vowel.connect(envelope); envelope.connect(audio.destination);
      voice.onended = () => { voice.disconnect(); vowel.disconnect(); envelope.disconnect(); };
      voice.start(now); voice.stop(now + .72);
    } catch {}
  }
  function hide() {
    clearTimeout(hiding);
    clearTimeout(voicing);
    clearTimeout(rising);
    visitor.hidden = true;
    visitor.classList.remove('is-peeking');
    visitor.classList.remove('is-rising');
    visitor.classList.remove('is-greeting');
    visitor.setAttribute('aria-hidden', 'true');
    mute.tabIndex = -1;
  }
  function interact(event) {
    if (!event.isTrusted || !event.target.closest('#catalog, #scene, #controls, #vase-panel')) return;
    interactions++;
    lastInteraction = Date.now();
    wakeAudio();
  }
  main.addEventListener('pointerdown', interact, { passive: true });
  main.addEventListener('keydown', interact);
  mute.addEventListener('click', () => {
    sound = !sound; updateSound();
    try { localStorage.setItem('fori-cat-sound', sound ? 'on' : 'off'); } catch {}
    if (sound) wakeAudio();
  });
  document.addEventListener('visibilitychange', () => { if (document.hidden) hide(); });
  document.addEventListener('fori-soundchange', () => {
    if (globalThis.ForiSound?.muted()) { if (audio) audio.suspend().catch(() => {}); }
    else wakeAudio();
  });
  document.getElementById('finish').addEventListener('click', hide);
  setInterval(() => {
    if (document.hidden || !items.length || Date.now() - lastInteraction > 30000 || document.getElementById('card-dialog').open) return;
    played++;
    if (played < nextVisit || interactions < 3 || drag) return;
    nextVisit = played + 180;
    visitor.hidden = false;
    visitor.classList.add('is-peeking');
    visitor.setAttribute('aria-hidden', 'false');
    // 1.5s to eye level, a full 2s pause, then a 2s rise.
    mute.tabIndex = -1;
    rising = setTimeout(() => visitor.classList.add('is-rising'), 3500);
    voicing = setTimeout(() => {
      visitor.classList.add('is-greeting');
      mute.tabIndex = 0;
      announce('有隻小貓探出頭：喵～');
      meow();
    }, 5500);
    hiding = setTimeout(hide, 8500);
  }, 1000);
  window.addEventListener('pageshow', () => {hide();played=0;nextVisit=120;interactions=0;lastInteraction=0;});
  updateSound();
})();
