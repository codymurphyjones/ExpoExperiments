import { IEXCloudClient } from "node-iex-cloud";
import axios from 'axios'
import config from '../../config'



const iex = new IEXCloudClient(axios, {
  sandbox: true,
  publishable: config.API_KEY,
  version: "stable",
  test: ""
});


 export default iex;