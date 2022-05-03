module.exports = {
  info: {
    tableName: "StrapiStripeProduct",
    singularName: "myplugin-product", // kebab-case mandatory
    pluralName: "myplugin-products", // kebab-case mandatory
    displayName: "StrapiStripeProduct",
    description: "Stripe Products",
    kind: "collectionType",
  },
  options: {
    draftAndPublish: "false",
  },
  pluginOptions: {
    "content-manager": {
      visible: true,
    },
    "content-type-builder": {
      visible: true,
    },
  },
  attributes: {
    title: {
      type: "string",
      min: 1,
      required: true,
      configurable: false,
    },
    slug: {
      type: "uid",
      targetField: "title",
      unique: true,
      required: true,
      configurable: false,
    },
    description: {
      type: "string",
      min: 1,
      required: true,
      configurable: false,
    },
    price: {
      type: "decimal",
      required: true,
      configurable: false,
    },
    currency: {
      type: "string",
      min: 1,
      required: true,
      configurable: false,
    },
    productImage: {
      type: "string",
      min: 3,
      required: true,
      configurable: true,
    },
    stripeProductId: {
      type: "string",
      min: 3,
      required: true,
      configurable: false,
    },
    stripePriceId: {
      type: "string",
      min: 3,
      required: true,
      configurable: false,
    },
    stripePayment: {
      type: "relation",
      relation: "oneToMany",
      target: "plugin::myplugin.myplugin-payment",
      mappedBy: "stripeProduct",
      configurable: true,
    },
  },
};
