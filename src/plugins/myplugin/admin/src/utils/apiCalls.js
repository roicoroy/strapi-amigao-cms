import instance from "./axiosInstance";
const axios = instance;

export async function saveStripeConfiguration(data) {
  console.log("stripe Configuration", data);
  const response = await axios.put("/myplugin/updateSettings", {
    data,
  });
  return response;
}

export async function getStripeConfiguration() {
  const response = await axios.get("/myplugin/getSettings");
  return response;
}

export async function createStripeProduct(title, price, url, description) {
  const response = await axios.post("/myplugin/createProduct", {
    title,
    price,
    url,
    description,
  });
  return response;
}

export async function getStripeProduct(offset, limit, sort, order) {
  const response = await axios.get(
    `/myplugin/getProduct/${offset}/${limit}/${sort}/${order}`
  );

  return response;
}

export async function getStripeProductProductById(id) {
  const response = await axios.get(`/myplugin/getProduct/${id}`);
  return response;
}

export async function updateStripeProduct(
  id,
  title,
  url,
  description,
  stripeProductId
) {
  const response = await axios.put(`/myplugin/updateProduct/${id}`, {
    title,
    url,
    description,
    stripeProductId,
  });
  return response;
}

export async function getProductPayments(
  productId,
  sort,
  order,
  offset,
  limit
) {
  const response = await axios.get(
    `/myplugin/getPayments/${productId}/${sort}/${order}/${offset}/${limit}`
  );
  return response;
}
