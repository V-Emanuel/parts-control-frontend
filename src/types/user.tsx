import { OrderControl, StockControl, ClientRelationship } from './order';
import { OrderData } from './order';

export interface Company {
  id: number;
  name: string;
  code: number;
}

export interface UserContextType {
  token: string | null;
  setTokenLS: (t: string) => void;
  name: string | null;
  setNameLS: (n: string) => void;
  companySelect: Company | null;
  setCompanySelectLS: (company: Company) => void;
  userId: string | null;
  userAdmin: boolean;
  setUserAdmin: (b: boolean) => void;
  setUserIdLS: (id: string) => void;
  categories: [] | any;
}

export interface MergedData extends OrderData {
  orderData: Partial<OrderData>;
  orderControl: Partial<OrderControl>;
  stockControl: Partial<StockControl>;
  clientRelationship: Partial<ClientRelationship>;
}

export interface DashboardProps {
  filterData: MergedData | any;
  users: any[];
  statuses: any[];
  types: any[];
  companies: any[];
}
