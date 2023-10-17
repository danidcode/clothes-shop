import Product from 'interfaces/Product';
import { SortOrder } from 'types/sort-order';

export const sortingProductsByPrice = (products: Product[], sortOrder: SortOrder) => {
  return products.slice().sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.totalPrice - b.totalPrice;
    } else {
      return b.totalPrice - a.totalPrice;
    }
  });
};
