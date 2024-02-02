import { getAccessToken } from '@/utils/accessToken'
import axios, { AxiosRequestConfig } from "axios";

interface ApiConfig {
  method: string;
  url: string;
  data?: any;
  withCredentials?: boolean;
}

export async function api<T>(config: ApiConfig): Promise<T> {
  const apiAxios = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || '/'
  });

  console.log(`NEXT_PUBLIC_API_URL: ${process.env.NEXT_PUBLIC_API_URL}`);

  const url = `${config.url}`;

  const headers: AxiosRequestConfig["headers"] = {
    // Authorization: `Bearer ${getAccessToken()}`,
  };

  try {
    const res = await apiAxios({
      headers,
      ...config,
      url,
    });

    return res.data;
  } catch (error: any) {
    throw error;
  }
}
