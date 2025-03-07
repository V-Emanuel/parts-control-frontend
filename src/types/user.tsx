export interface UserContextType {
  token: string | null;
  setTokenLS: (t: string) => void;
  name: string | null;
  setNameLS: (n: string) => void;
}
