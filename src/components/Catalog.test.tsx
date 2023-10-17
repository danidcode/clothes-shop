import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import Catalog from './Catalog';

// Mock the required data and dependencies
jest.mock('../../public/products.json', () => ({
    products: [
        {
            "id": 1,
            "name": "Polo rayas Better Cotton bebé",
            "price": 19.99,
            "image": "https://assets.mayoral.com/images/t_auto_img,f_auto,c_limit,w_750/v1675851247/13-02171-037-XL-4/polo-rayas-better-cotton-bebe-yema-cielo-XL-4.jpg",
            "reverseImage": "https://assets.mayoral.com/images/t_auto_img,f_auto,c_limit,w_750/v1675851249/13-02171-037-XL-5/polo-rayas-better-cotton-bebe-yema-cielo-XL-5.jpg",
            "hasMoreColors": false
        }
    ],
}));


test('Catalog renders correctly and handles filtering', () => {
    // Render the Catalog component
    const { getByText, getByPlaceholderText } = render(<Catalog />);

    // Get the input element for searching
    const searchInput = getByPlaceholderText('Buscar');
    expect(searchInput).toBeInTheDocument();

    // Simulate a change event to filter products
    fireEvent.change(searchInput, { target: { value: 'Polo rayas Better Cotton bebé' } });
    expect(getByText('Polo rayas Better Cotton bebé')).toBeInTheDocument();


});