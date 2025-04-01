export type OrderData = {
  id: number | null;
  companyId: number;
  osOrc: number;
  orderDate: string;
  userId: number;
  client: string;
  model: string;
  description: string;
  quantity: number;
  created_at: string | null;
  updated_at: string | null;
};
