export class User {
  id: number;
  login: string;
  password: string;
  active?: boolean;
  token?: string;
  refreshToken?: string;
}
