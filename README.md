# flower

FORi Flower 花艺工作室的可运行前端复刻，参考站：https://fori-flower-studio.com/ 。

## 已实现

- 插花工作室：主花、配花、叶材，拖动、高度、角度、颜色、前后层级、撤销、移除和重置。
- 花器与花束包装、造型容器、背景、画布放大和 10 种界面语言。
- 贺卡文字与预览、2160 × 3200 PNG、3240 × 4860 印刷 JPG，以及约 8 秒竖屏创作视频导出。
- 作品画廊、花器筛选、Hana 笔记本翻页、作品详情、三个小房间、明信片说明和关于页面。
- 作品上传保存在当前浏览器的 IndexedDB；重新加载后可以继续查看。

## 运行

需要 Node.js 22 或更新版本。

```bash
npm ci
npm run dev -- --host 0.0.0.0
```

构建及部署适配检查：

```bash
npm run build
npm run test:sites
```

构建会生成 `dist/client`、`dist/server/index.js` 与 `dist/.openai/hosting.json`。保留了 Sites Worker 适配，也可使用支持 SPA 路由回退的静态托管服务托管 `dist/client`。生产环境建议 HTTPS，以使用浏览器原生分享等能力。

## 路由

| 地址 | 页面 |
| --- | --- |
| `/` | 花艺工作室 |
| `/gallery` | 作品画廊 |
| `/exhibitions` | 小房间 |
| `/postcards` | 明信片打印说明 |
| `/about` | 关于 |

同时兼容相应 `.html` 地址。

## 数据和素材

画廊和小房间使用 2026-09-30 采集的公开作品快照；图库包含 196 件社区作品和 7 件 Hana 作品。图片、花材、样式和页面脚本均随项目提供，本地运行无需向参考站请求素材。

此版本没有公共投稿、服务端审核、账号或跨设备同步。投稿及姓名只保存在当前浏览器，清除网站数据会移除这些记录。页面中的官方品牌、课程和 Instagram 链接保留原站目标。

视觉及功能验收记录见 [design-qa.md](design-qa.md)，对照截图位于 `verification/`。原站素材的署名及权利范围见 [ATTRIBUTION.md](ATTRIBUTION.md)。
