export interface Product {
    id: number
    name: string
    price: number
    image: string
}

export const products = [
    {
      id: 1,
      name: "BMW M1000RR",
      price: 1600000000,
      image: "https://bmw-motorcycles.vn/wp-content/uploads/2022/11/BMW-M-1000-RR_hd.jpg",
    },
    {
      id: 2,
      name: "BMW S1000RR",
      price: 1000000000,
      image: "https://bmw-motorcycles.vn/wp-content/uploads/2018/01/BMW-S-1000-RR.jpg",
    },
    {
      id: 3,
      name: "Ninja H2",
      price: 800000000,
      image: "https://content2.kawasaki.com/ContentStorage/KMV/Products/4878/1b6b439e-ed64-4226-9248-aa557de00692.png?w=675",
    },
  ]