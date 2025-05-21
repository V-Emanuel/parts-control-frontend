import { createContext } from 'react';
import { UserContextType } from '../types/user';

const defaultUserContext: UserContextType = {
  token: null,
  setTokenLS: () => {},
  name: null,
  setNameLS: () => {},
  companySelect: null,
  setCompanySelectLS: () => {},
  userId: null,
  userAdmin: false,
  setUserAdminLS: () => {},
  setUserIdLS: () => {},
  categories: [],
};

const UserContext = createContext<UserContextType>(defaultUserContext);
export default UserContext;
