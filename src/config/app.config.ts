interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Inventory Manager'],
  tenantName: 'Vendor',
  applicationName: 'B2C Packaged Food selling',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Manage cart', 'Read product', 'Create rating', 'Create order'],
  ownerAbilities: ['Manage users', 'Manage products', 'Manage orders', 'Manage reviews'],
  getQuoteUrl: 'https://app.roq.ai/proposal/e230c7b6-7a15-46c0-a430-90eb621ce453',
};
