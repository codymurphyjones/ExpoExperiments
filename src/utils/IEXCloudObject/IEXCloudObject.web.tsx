import { IEXCloudClient } from "node-iex-cloud";
import config from '../../config'
import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';


const iex = new IEXCloudClient(axios.get, {
  sandbox: true,
  publishable: config.API_KEY,
  version: "stable",
  test: ""
});


 export default iex;