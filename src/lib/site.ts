export const siteConfig = {
  name: 'jacke',
  title: 'jacke · 安全运营与 AI 人工智能',
  description: '一个聚焦安全运营与 AI 人工智能主题的简洁个人博客。',
  siteUrl: import.meta.env.SITE_URL || 'https://example.com',
  locale: 'zh-CN',
  email: '',
  topics: ['安全运营', 'AI人工智能'],
  nav: [
    { label: '首页', href: '/' },
    { label: '博客', href: '/blog' },
    { label: '关于我', href: '/about' },
    { label: '联系方式', href: '/contact' }
  ],
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/' }
  ]
};

export type SiteConfig = typeof siteConfig;
