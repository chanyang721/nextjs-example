import { api } from "./index";

const path = "/auth";

export const signIn = async (data: any): Promise<any> => {
  const response = await api<any>({
    method: "post",
    url: `${path}/signup`,
    // data: data,
    // withCredentials: true,
  });

  return response;
};