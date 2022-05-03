"use strict";

const koaStatic = require("koa-static");
const path = require("path");

module.exports = async ({ strapi }) => {
  strapi.server.routes([
    {
      method: "GET",
      path: "/plugins/myplugin/static/(.*)",
      async handler(ctx, next) {
        ctx.url = path.basename(`${ctx.url}/stripe.js`);
        const staticFolder = path.resolve(
          strapi.dirs.extensions,
          "myplugin",
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
