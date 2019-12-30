import { IEXCloudClient } from "node-iex-cloud";

import config from '../../config'

const fetch = require("node-fetch");

 
const iex = new IEXCloudClient(fetch, {
  sandbox: true,
  publishable: config.API_KEY,
  version: "stable",
  test: ""
});

export default iex;

