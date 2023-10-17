import { DiscountType } from 'types/discount-type';

export const getDiscountSuffix = (discountType: DiscountType) => {
  switch (discountType) {
    case 'percentage':
      return '%';

    case 'fixed amount':
      return '€';
  }
};
