'use strict';
const path = require("path");
const fs = require("fs-extra");
const _ = require("lodash");
const staticFileMiddleware = require("./middlewares/staticFiles"); 
module.exports = async ({ strapi }) => {
  if (strapi.plugin('graphql')) {
    require('./graphql')({ strapi });
  }
  await staticFileMiddleware({ strapi });
  await generateJs();
};


async function generateJs() {
  const jsData = fs.readFileSync(
    path.resolve(__dirname, "public", "hello.js"),
    "utf8"
  );
  const filledJsData = _.template(jsData)({
    backendUrl: strapi.config.server.url,
  });

  const bbbJsPath = path.resolve(
    strapi.dirs.extensions,
    "mercado-plugin",
    "public",
    "hello.js"
  );
  await fs.ensureFile(bbbJsPath);
  await fs.writeFile(bbbJsPath, filledJsData);
}