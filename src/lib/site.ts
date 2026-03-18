export const siteConfig = {
  name: 'Your Name',
  title: 'Your Name · Frontend Engineer',
  description: '一个简洁、专业、适合长期维护的个人品牌博客网站。',
  siteUrl: import.meta.env.SITE_URL || 'https://example.com',
  locale: 'zh-CN',
  email: 'hello@example.com',
  nav: [
    { label: '首页', href: '/' },
    { label: '博客', href: '/blog' },
    { label: '关于我', href: '/about' },
    { label: '联系方式', href: '/contact' }
  ],
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/' },
    { label: 'X', href: 'https://x.com/' },
    { label: 'Email', href: 'mailto:hello@example.com' }
  ]
};

export type SiteConfig = typeof siteConfig;
