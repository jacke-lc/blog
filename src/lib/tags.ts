export const coreCategories = ['网络安全', '人工智能'] as const;

export const allowedTags = ['网络安全', '数据安全', '安全运营', '人工智能'] as const;

export const tagDescriptions: Record<(typeof allowedTags)[number], string> = {
  网络安全: '关注攻防思路、威胁面与安全建设方法。',
  数据安全: '聚焦数据治理、风险识别、合规与保护实践。',
  安全运营: '围绕监控、响应、流程与体系化运营展开。',
  人工智能: '记录 AI 工具、模型应用与自动化工作流。'
};

export type CoreCategory = (typeof coreCategories)[number];
export type AllowedTag = (typeof allowedTags)[number];
