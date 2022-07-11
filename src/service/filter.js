import products from "../data/product";

// ====TRENDING=====
export const allproducts = products.filter((e) => {
  return e.category.includes("all");
});

// ====HOTTEST/LATEST=====
export const sportcar = products.filter((e) => {
  return e.category.includes("Sport Car");
});
