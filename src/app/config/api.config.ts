import { environment } from 'src/environments/environments';

const accountingEndPoints = [
  {
    name: 'USER_LOGIN',
    method: 'POST',
    url: environment.baseUrl + 'api/login-user',
  },
];

export const ApiConfig = {
  endpoints: [...accountingEndPoints],
};
