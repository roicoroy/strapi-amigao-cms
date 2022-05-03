module.exports = {
  info: {
    tableName: "StrapiStripePayment",
    singularName: "myplugin-payment", // kebab-case mandatory
    pluralName: "myplugin-payments", // kebab-case mandatory
    displayName: "StrapiStripePayment",
    description: "Stripe Payment",
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
    txnDate: {
      type: "datetime",
      required: true,
      configurable: false,
    },
    transactionId: {
      type: "string",
      maxLength: 250,
      required: true,
      configurable: false,
    },
    isTxnSuccessful: {
      type: "boolean",
      default: false,
      configurable: false,
    },
    txnMessage: {
      type: "string",
      maxLength: 5000,
      configurable: false,
    },
    txnErrorMessage: {
      type: "string",
      maxLength: 250,
      configurable: false,
    },
    txnAmount: {
      type: "decimal",
      required: true,
      configurable: false,
    },
    customerName: {
      type: "string",
      required: true,
      configurable: false,
    },
    customerEmail: {
      type: "string",
      required: true,
      configurable: false,
    },
    stripeProduct: {
      type: "relation",
      relation: "manyToOne",
      target: "plugin::myplugin.myplugin-product",
      inversedBy: "stripePayment",
      configurable: false,
    },
  },
};
