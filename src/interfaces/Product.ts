import { DiscountType } from 'types/discount-type';

export default interface Product {
  id: number;
  name: string;
  price: number;
  totalPrice: number;
  image: string;
  reverseImage: string;
  discount?: number;
  discountType?: DiscountType;
  hasMoreColors: boolean;
}
