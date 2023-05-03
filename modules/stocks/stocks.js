const SERVER_HOST = process.env.API_URL

const getStockImage = (id) => {
  return `${SERVER_HOST}images/stocks/stock${id}.jpg`
}

const stocks = [
  {
    title: "Полет на воздушном шаре с трансфером из Москвы на высоте 1500 метров",
    image: getStockImage(1),
    price: 13980,
    discountPercent: 50,
    likes: 15,
  },
  {
    title: "Полет на воздушном шаре с трансфером из Москвы на высоте 1500 метров",
    image: getStockImage(2),
    price: 13980,
    discountPercent: 50,
    likes: 15,
  },
  {
    title: "Комплексная гигиена полости рта, лечение кариеса с установкой пломбы, удаление или эстетическая реставрация",
    image: getStockImage(3),
    price: 1500,
    discountPercent: 50,
    likes: 15,
  },
  {
    title: "Шиномонтаж и балансировка четырех колес радиусом до R20 в сети «Автостол»",
    image: getStockImage(4),
    price: 1200,
    discountPercent: 50,
    likes: 15,
  },
  {
    title: "Скидка до 72%. Осетинские пироги от пекарни «ИрПирог»",
    image: getStockImage(5),
    price: 3300,
    discountPercent: 50,
    likes: 15,
  },
  {
    title: "Блюда меню и напитки в ирландском пабе Law & Son",
    image: getStockImage(6),
    price: 220,
    discountPercent: 50,
    likes: 15,
  },
]

stocks.forEach((e, i) => e['id'] = i + 1)

module.exports = stocks