import { OrderControl, StockControl, ClientRelationship } from './order';
import { OrderData } from './order';

export interface UserContextType {
  token: string | null;
  setTokenLS: (t: string) => void;
  name: string | null;
  setNameLS: (n: string) => void;
}

export interface MergedData extends OrderData {
  orderData: Partial<OrderData>;
  orderControl: Partial<OrderControl>;
  stockControl: Partial<StockControl>;
  clientRelationship: Partial<ClientRelationship>;
}
