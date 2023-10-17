import { DiscountType } from 'types/discount-type';
import { formatPrice } from './format-price';

export const calculateDiscountedPrice = (
  price: number,
  discount: number,
  discountType: DiscountType,
) => {
  switch (discountType) {
    case 'percentage':
      return formatPrice(price - price * (discount / 100));

    case 'fixed amount':
      return formatPrice(price - discount);
      break;
  }
};

export const getDiscountSuffix = (discountType: DiscountType) => {
  switch (discountType) {
    case 'percentage':
      return '%';

    case 'fixed amount':
      return '€';
  }
};
