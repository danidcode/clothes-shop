import React from 'react';
import Product from 'interfaces/Product';
import { render } from '@testing-library/react';
import ProductCard from './ProductCard';
import '@testing-library/jest-dom'

test('renders content', () => {
  const product: Product = {
    id: 1,
    name: 'shirt',
    price: 2,
    hasMoreColors: false,
    image: '/webp.png',
    reverseImage: '/webp.png',
  };

  const { getByText } = render(<ProductCard product={product} imageHeight='h-72' />);

  expect(getByText('shirt')).toBeInTheDocument();

});
