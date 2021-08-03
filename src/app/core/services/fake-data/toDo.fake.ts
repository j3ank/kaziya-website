import { ToDo } from "../../index"

export function fakeToDos(): ToDo[] {
  return [
    {
      id: 1,
      description: 'Work',
      expirationDate: new Date(),
      state: 0,
      isDeleted: false,
    },
    {
      id: 2,
      description: 'Work more',
      expirationDate: new Date(),
      state: 1,
      isDeleted: false,
    },
    {
      id: 3,
      description: 'Work till it works',
      expirationDate: new Date(),
      state: 0,
      isDeleted: false,
    }
  ];
}
