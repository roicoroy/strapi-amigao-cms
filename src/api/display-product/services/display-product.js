'use strict';

/**
 * display-product service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::display-product.display-product');
