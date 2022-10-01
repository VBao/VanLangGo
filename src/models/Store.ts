export interface Store {
  name: string;
  phone: string;
  description: string;
  status: string;
  category: string;

  [key: string]: any;
}
