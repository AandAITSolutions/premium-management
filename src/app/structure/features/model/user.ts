export interface User {
  id:string;
  avatar: string;
  firstName: string;
  lastName: string;
  position: string;
  email: string;
  number: string;
  role: { administrator: boolean, edit: boolean}
}


