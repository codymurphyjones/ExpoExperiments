import { IEXCloudClient } from "node-iex-cloud";
const fetch = window.fetch.bind(window);
import config from '../../config'

 
const iex = new IEXCloudClient(fetch, {
  sandbox: true,
  publishable: config.API_KEY,
  version: "stable",
  test: ""
});

export default iex;