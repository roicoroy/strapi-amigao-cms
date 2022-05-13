"use strict";

const koaStatic = require("koa-static");
const path = require("path");

module.exports = async ({ strapi }) => {
  strapi.server.routes([
    {
      method: "GET",
      path: "/plugins/mercado-plugin/static/(.*)",
      async handler(ctx, next) {
        ctx.url = path.basename(`${ctx.url}/hello.js`);
        const staticFolder = path.resolve(
          strapi.dirs.extensions,
          "mercado-plugin",
          "public"
        );
        return koaStatic(staticFolder)(ctx, next);
      },
      config: {
        auth: false,
      },
    },
  ]);
};
