import { login } from './login';

export interface RootModel {
  login: typeof login;
}

export const models: RootModel = {
  login,
};
