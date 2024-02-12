const app = require("express")();
const basicAuth = require("express-basic-auth");

const users = {
  admin: process_env.PASSWORD,
};

const auth = basicAuth({
  users,
  challenge: true,
  unauthorizedResponse: { message: "Unauthorized" },
});
