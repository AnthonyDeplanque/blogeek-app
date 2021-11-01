export interface DrawerRouteConfig {
  id: string;
  title?: string;
  messageId?: string;
  type: 'collapse' | 'group' | 'item';
  icon?: JSX.Element;
  children?: DrawerRouteConfig[];
  url?: string;
  getUrl?: () => string;
}