import { createSlice } from '@reduxjs/toolkit';

export interface Product {
  id: number;
  categoryId: number;
  name: string;
  price: number;
  cal: number;
  image: string;
}

export interface Category {
  id: number;
  name: string;
  image: string;
}

export interface CartItem {
  id: number;
  productId: number;
  amount: number;
}

export interface ShopState {
  products: Product[];
  categories: Category[];
  cartItems: CartItem[];
}

const initialState: ShopState = {
  products: [
    {
      id: 1,
      categoryId: 1,
      name: 'Мясная бомба',
      price: 689,
      cal: 520,
      image: '/src/assets/MeatBoom.png',
    },
    {
      id: 2,
      categoryId: 1,
      name: 'Супер сырный',
      price: 520,
      cal: 512,
      image: '/src/assets/SuperCheese.png',
    },
    {
      id: 3,
      categoryId: 1,
      name: 'Сытный',
      price: 639,
      cal: 580,
      image: '/src/assets/Satisfying.png',
    },
    {
      id: 4,
      categoryId: 1,
      name: 'Тяжелый удар',
      price: 480,
      cal: 470,
      image: '/src/assets/HardBlow.png',
    },
    {
      id: 5,
      categoryId: 2,
      name: 'Домашний хот-дог',
      price: 290,
      cal: 250,
      image: '/src/assets/Homemeda.png',
    },
    {
      id: 6,
      categoryId: 2,
      name: 'Жгучий хот-дог',
      price: 239,
      cal: 245,
      image: '/src/assets/hotGog.png',
    },
    {
      id: 7,
      categoryId: 2,
      name: 'Классический хот-дог',
      price: 220,
      cal: 215,
      image: '/src/assets/ClassicHotDog.png',
    },
    {
      id: 8,
      categoryId: 3,
      name: 'Начос',
      price: 250,
      cal: 220,
      image: '/src/assets/Hachos.png',
    },
    {
      id: 9,
      categoryId: 3,
      name: 'Картошка фри',
      price: 245,
      cal: 180,
      image: '/src/assets/Free.png',
    },
    {
      id: 10,
      categoryId: 3,
      name: 'Луковые кольца',
      price: 230,
      cal: 160,
      image: '/src/assets/Rings.png',
    },
  ],
  categories: [
    {
      id: 0,
      name: 'Все продукты',
      image: '/src/icons/combo',
    },
    {
      id: 1,
      name: 'Бургеры',
      image: '/src/icons/burgerCategory',
    },
    {
      id: 2,
      name: 'Хот-доги',
      image: '/src/icons/hotdogCategory',
    },
    {
      id: 3,
      name: 'Закуски',
      image: '/src/icons/onionCategory',
    },
  ],
  cartItems: [
    {
      id: 1,
      productId: 3,
      amount: 1,
    },
    {
      id: 2,
      productId: 5,
      amount: 1,
    },
    {
      id: 2,
      productId: 8,
      amount: 1,
    },
  ],
};

export const shopSlice = createSlice({
  name: 'youMeal',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    increment: (state, action) => {
      state.cartItems.map((c) => {
        return c.productId === action.payload ? c.amount++ : c;
      });
    },
    decrement: (state, action) => {
      state.cartItems.map((c) => {
        return c.productId === action.payload ? c.amount-- : c;
      });
      state.cartItems = state.cartItems.filter((c) => {
        return c.amount < 1 ? c.productId !== action.payload : c;
      });
    },
    cleanCart: (state) => {
      state.cartItems.length = 0;
    },
  },
});

export const { addToCart, increment, decrement, cleanCart } = shopSlice.actions;
export const ShopSlice = shopSlice.reducer;
