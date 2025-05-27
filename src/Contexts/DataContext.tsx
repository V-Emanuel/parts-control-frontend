import { createContext } from 'react';

export type DataContextType = {
  mergedData: any[];
  users: any[];
  statuses: any[];
  types: any[];
  companies: any[];
  usersNames: any[];
};

const DataContext = createContext<DataContextType>({
  mergedData: [],
  users: [],
  statuses: [],
  types: [],
  companies: [],
  usersNames: [],
});

export default DataContext;
