// data/products.ts
type Product = {
  slug: string;
  name: string;
  price: string;
  image: string;
  desc: string;
}

export const PRODUCT_DATA: Product[] = [
  {
    slug: "nike-air-max",
    name: "Nike Air Max Red",
    price: "Rp 1.499.000",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
    desc: "Sepatu lari ikonik dengan bantalan udara maksimal untuk kenyamanan sepanjang hari."
  },
  {
    slug: "sony-headset",
    name: "Sony WH-1000XM4",
    price: "Rp 3.200.000",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
    desc: "Headset wireless dengan teknologi noise cancelling terbaik di kelasnya."
  }
];