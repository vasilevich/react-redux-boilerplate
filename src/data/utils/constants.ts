export const config = {
  siteKey: '',
  urlPrefix: '',
  baseURL: 'https://dataset.baibys.xyz',
  ...((window as any).config || {}),

};

export const versionStamp = new Date(2021, 7, 8).getTime();

export enum ApiKeys {
  /**
   * Need to import api keys from external configs
   */
}


// remember to modify css to reflect the new urls
export const linksMap = {
  root: '/',
  home: '/',
  logout: '/logout',
  login: '/login',
  forgotPassword: '/forgotpassword',
  verifyToken: '/verifytoken',
  control: '/control',
  dashboard: '/control/dashboard',
  profile: '/control/profile',
  admin: '/admin',
  adminUsers: '/admin/users',
  adminSettings: '/admin/settings',
  adminSupport: '/admin/support',
};
