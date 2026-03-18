# Personal Brand Blog

一个基于 Astro + Tailwind CSS 的个人品牌博客项目，适合静态部署到腾讯云轻量服务器。

## 技术栈

- Astro
- Tailwind CSS
- Markdown Content Collections
- 静态部署

## 本地开发

```bash
npm install
npm run dev
```

## 构建产物

```bash
npm run build
```

构建完成后，静态文件会输出到 `dist/`。

## 腾讯云轻量服务器部署建议

1. 在服务器安装 Nginx
2. 上传 `dist/` 目录内容到站点根目录
3. 将 Nginx `root` 指向静态目录
4. 配置 HTTPS 与域名解析

## 目录说明

后续将按模块拆分：首页、博客列表、博客详情、关于我、联系方式。
