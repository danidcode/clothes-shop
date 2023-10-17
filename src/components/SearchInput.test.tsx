import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import SearchInput from './SearchInput';

test('SearchInput renders correctly and handles onChange', () => {
    // Define a mock function for the onChange event
    const onChangeMock = jest.fn();

    // Render the SearchInput component with a mock value and onChange function
    const { getByPlaceholderText } = render(
        <SearchInput value="Sample Value" onChange={onChangeMock} />
    );

    // Get the input element by its placeholder text
    const inputElement: HTMLInputElement = getByPlaceholderText('Buscar') as HTMLInputElement;

    // Check if the input element exists and has the correct value
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.value).toBe('Sample Value');

    // Simulate a change event on the input
    fireEvent.change(inputElement, { target: { value: 'Polo estampado' } });

    // Check if the onChangeMock function was called with the new value
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith('Polo estampado');
});
