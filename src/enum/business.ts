/** 用户角色 */
export enum EnumUserRole {
  super = '超级管理员',
  admin = '云工厂管理员',
  dealer = '经销商'
}

/** 登录模块 */
export enum EnumLoginModule {
  'pwd-login' = '账密登录',
  'code-login' = '手机验证码登录',
  'register' = '注册',
  'reset-pwd' = '重置密码',
  'bind-wechat' = '微信绑定'
}
