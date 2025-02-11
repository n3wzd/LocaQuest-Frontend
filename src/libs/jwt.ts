import { jwtDecode } from 'jwt-decode';

const decodeToken = async (token: string) => jwtDecode(token);

export default {
  decodeToken: decodeToken,
};
