import axios from "axios";

export default class HTTPService {
  constructor(baseURL) {
    this.instance = axios.create({ baseURL });

    // Response Interceptor
    this.instance.interceptors.response.use(
      (response) => {
        if (!response.data.success) {
          return Promise.reject(response.data);
        }
        return response.data.responseData;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  get = async (endpoint, params = {}) => {
    try {
      const response = await this.instance.get(endpoint, { params });
      return response;
    } catch (error) {
      console.error("Error making GET request:", error);
      throw error;
    }
  };

  post = async (endpoint, data = {}) => {
    try {
      const response = await this.instance.post(endpoint, data);
      return response;
    } catch (error) {
      console.error("Error making POST request:", error);
      throw error;
    }
  };

  put = async (endpoint, data = {}) => {
    try {
      const response = await this.instance.put(endpoint, data);
      return response;
    } catch (error) {
      console.error("Error making PUT request:", error);
      throw error;
    }
  };

  delete = async (endpoint, data = {}) => {
    try {
      const response = await this.instance.delete(endpoint, data);
      return response;
    } catch (error) {
      console.error("Error making DELETE request:", error);
      throw error;
    }
  };
}
