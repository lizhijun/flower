# Design QA

日期：2026-09-30。参考站：https://fori-flower-studio.com/ 。实现：运行中的本地 Vite 前端，Chrome 云浏览器。

## 视觉依据

- Source visual truth：`verification/source-desktop.jpg`。
- Implementation screenshot：`verification/replica-desktop.jpg`。
- Full-view comparison：`verification/desktop-comparison.jpg`、`verification/mobile-comparison.jpg`。
- Focused region comparison：`verification/desktop-details.jpg`，对照侧栏文字、花材缩略图、分类按钮与间距。
- Desktop CSS viewport：1363 × 936，devicePixelRatio 1；内容宽度 1348。源站和实现截图均为 1348 × 926 像素，使用相同捕获方式与相同尺寸并排比较；比较图仅统一缩放展示。
- Mobile CSS viewport：两个同屏 iframe 各 390 × 844；同一浏览器、密度 1，截图保留相同显示尺度。源站与实现均无水平溢出。
- 对比状态：工作室初始空花瓶、浅灰背景、繁中/EN，以及英文模式。源站和实现的随机花材变化不作为视觉漂移。

## 五项还原检查

| 项目 | 结果 |
| --- | --- |
| 字体与文字 | 采用源站字体栈、字号、字重、行高；中文、英文标题与辅助文字的层级和折行对照通过。 |
| 布局与间距 | 桌面侧栏和画布比例、顶部工具、底栏，以及手机画布在上/工具在下的布局对照通过。 |
| 色彩 | 保留源站 CSS 色值、浅灰画布、按钮和边框。背景切换可用。 |
| 图像和素材 | 实际源站花材、标志、照片和渲染脚本本地化；没有新绘的近似替代图。作品快照的图片路径完整性检查无缺失。 |
| 内容 | 工作室、房间与说明页保留原站文案；画廊保存说明有意改为浏览器本地保存，以准确描述本版本。 |

## 修复与复验记录

- [P1，已修复] 语言初始化：动态加载脚本时 `DOMContentLoaded` 已触发，英文选项没有生效。`public/locale.js` 现在根据文档就绪状态立即初始化或等待事件。前后证据：`verification/mobile-english-before-fix.jpg`、`verification/mobile-english-fixed.jpg`。复验中两个 390 × 844 视图的英文文案、按钮和布局一致。
- [P0，已修复] HTTP 预览中的 `crypto.randomUUID` 不可用，中断画廊初始化和投稿。`src/local-data.js` 加入基于 `crypto.getRandomValues` 的 UUID v4 兼容实现，画廊调用统一方法。复验上传生成的贺卡，显示“作品已保存”；点击完成后重新加载画廊，作者 `Preview QA` 和 2160 × 3200 图片均恢复。
- [P1，已修复] 本地作品图片与新增作品展示：画廊所有图片入口使用本地 Blob URL 解析；完成后重新加载作品集，实际图片可见且可打开详情。
- 当前无未解决的 P0/P1/P2 问题。

## 功能与检查

- 已实际操作：添加主花和叶材、拖拽、高度、角度、颜色、撤销、花束包装/造型花器、贺卡输入与预览。
- 实际生成并检查：2160 × 3200 PNG，3240 × 4860 JPG，1080 × 1920 H.264 MP4（7.99 秒）。
- 画廊：本地投稿保存和重载、Hana 翻至 2 / 4、碗型花器筛选（19 件）、作品详情弹窗。
- 小房间：三个入口已加载，切换到 Quiet Afternoon，实际打开 Hana 作品弹窗。
- 关于及明信片页面：路由、文案、照片和内部返回链接已检查。
- Console：最终页面无应用错误；浏览器扩展的 metadata 日志排除在应用错误之外。
- `npm run build`：passed。
- `npm run test:sites`：passed（1 / 1）。

## 适用范围及后续

画廊是公开作品快照，本地投稿使用 IndexedDB；不包含参考站的公共投稿服务、审核或跨设备同步。浏览器原生分享受系统及安全上下文支持限制。实体手机、系统分享面板及实际门店打印未验证；这些不影响已验证的前端流程和文件导出。

Implementation checklist：视觉对照完成；阻断问题修复并复验；主流程与文件导出验证完成；构建和 Worker 适配检查通过。

final result: passed
