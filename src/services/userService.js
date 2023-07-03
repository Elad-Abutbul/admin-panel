import { Api } from "./apiService";

export const UsersService = {
  getUsers: (resNum) => Api.get(`https://randomuser.me/api/?results=${resNum}`),
};
