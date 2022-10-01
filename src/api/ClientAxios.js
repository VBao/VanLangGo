/* eslint-disable no-console */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import Cookie from 'js-cookie';
import queryString from 'query-string';

const ClientAxios = axios.create({
  baseURL: '',
  timeout: 50000,
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

// ClientAxios.interceptors.request.use(function( config: AxiosRequestConfig) {
//   return config
// }, function (error) {
//   return Promise.reject(error)
// }
// );

ClientAxios.interceptors.response.use(
  function (response: AxiosResponse) {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default ClientAxios;
