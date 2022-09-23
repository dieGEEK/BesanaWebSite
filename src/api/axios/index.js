import axios from "axios";

const instance = axios.create({
  baseURL: "https://backofficeapi.besanaglobal.com/",
  timeout: 15000,
});

export const AxiosGet = async (url, params = {}) => {
  try {
    let result = await instance.get(url, {
      params: params,
    });
    return result.data.entity;
  } catch (e) {
    alert("Error: " + e.response.data.message);
  }
};

export const getCurrencyApi = async (url, currency) => {
  try {
    let result = await instance.get(url + currency);
    return result.data.rates[currency];
  } catch (e) {
    alert("Error: " + e.response.data.message);
  }
};

export const AxiosPost = async (url, params = {}) => {
  try {
    let result = await instance.post(url, params);
    return result.data.entity;
  } catch (e) {
    alert("Error: " + e.response.data.message);
    return null;
  }
};
