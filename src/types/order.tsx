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

export type OrderControl = {
  id: number | null;
  shippingData: string | null;
  num: number;
  typeId: number;
  branchOrder: number;
  guarantee: string;
  statusId: number;
  orderDataId: number;
};

export type StockControl = {
  id: number | null;
  nf: number;
  nfData: string;
  accuracyDate: string;
  entryData: string | null;
  orderDataId: number;
};

export type ClientRelationship = {
  firstContact: string | null;
  secondContact: string | null;
  thirdContact: string | null;
  agedaDate: string | null;
  applicationDate: string | null;
  observations: string | null;
  orderDataId: number;
};
