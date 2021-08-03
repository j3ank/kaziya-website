export interface ToDo {
  id: number;
  description: string;
  expirationDate: Date;
  state: number;
  isDeleted: boolean;
}
