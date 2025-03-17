export default defineEventHandler(async () => {
  return await getItems();
});

async function getItems() {
  return Promise.resolve({
    items: [
      {
        itemId: 1,
        itemName: "Apple iPhone 16e 128Gb White",
        itemPrice: 24900,
        isSumTax: true,
        discount: 2000,
        discountType: "bath",
      },
      {
        itemId: 2,
        itemName: "Apple iPhone 16e 256Gb Black",
        itemPrice: 24900,
        isSumTax: false,
        discount: 0,
        discountType: "",
      },
    ],
  });
}
