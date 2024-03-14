import { Product } from "../store/productSlice";
import { v4 as uuidv4 } from 'uuid';

export const generateRandomItemList = () => {
  const randomItemList: Product[] = [];
  for (let i = 0; i < Math.floor(Math.random() * 15); i++) {
    randomItemList.push({
      id: uuidv4(),
      name: `Item ${i + 1}`,
      amount: (Math.random() * 100).toFixed(0).toString()
    });
  }
  return randomItemList;
}