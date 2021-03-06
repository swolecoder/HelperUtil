const axios = require("axios");
const Querystring = require("query-string");
const qs = require("qs");

const url = "";//URL

const data = {
  grant_type: "client_credentials",
};

const auth = {
  username: "",//client ID
  password: "", // client secret
};

const options = {
  method: "post",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  data: qs.stringify(data),
  auth: auth,
  url,
};

export const getAccessToken = async (url) => {
  try {
    let authToken = await axios(options);
    if (authToken.status === 200) {
      console.log(authToken.status);
      console.log(authToken.data.access_token);
    }
  } catch (e) {
    console.log("Error", e);
  }
};
