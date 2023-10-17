import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import IconButton from './IconButton';


test('IconButton renders correctly and triggers onClick', () => {
    // Mock the onClick function
    const onClickMock = jest.fn();

    // Render the IconButton component with a sample icon and the onClick function
    const { getByText } = render(
        <IconButton icon="Sample Icon" onClick={onClickMock} />
    );

    // Get the button element
    const button = getByText('Sample Icon');

    // Check if the button exists
    expect(button).toBeInTheDocument();

    // Simulate a click on the button
    fireEvent.click(button);

    // Check if the onClick function was called
    expect(onClickMock).toHaveBeenCalledTimes(1);
});
