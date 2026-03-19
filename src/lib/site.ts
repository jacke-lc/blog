import { allowedTags, coreCategories } from '@/lib/tags';

export const siteConfig = {
  name: 'jacke',
  title: 'jacke · 网络安全与人工智能笔记',
  description: '聚焦网络安全、数据安全、安全运营与人工智能的个人博客与研究笔记。',
  siteUrl: import.meta.env.SITE_URL || 'https://example.com',
  locale: 'zh-CN',
  email: '',
  role: '网络安全 / 人工智能 / 技术写作',
  intro: '持续分享网络安全与人工智能相关的实战观察、方法总结与工具实践。',
  coreCategories,
  tags: allowedTags,
  profileLabels: ['网络安全', '数据安全', '安全运营', '人工智能', '自动化', '技术写作'],
  nav: [
    { label: '首页', href: '/' },
    { label: '博客', href: '/blog' },
    { label: '关于我', href: '/about' },
    { label: '联系方式', href: '/contact' }
  ],
  counter: {
    namespace: import.meta.env.PUBLIC_COUNT_NAMESPACE || 'jacke-security-ai',
    key: import.meta.env.PUBLIC_COUNT_KEY || 'site-visits'
  },
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/' }
  ]
};

export type SiteConfig = typeof siteConfig;
