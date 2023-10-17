import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Sorter from './Sorter';
import '@testing-library/jest-dom';

test('Sorter component renders and handles sorting order change', () => {
    // Mock the onChange function
    const onChangeMock = jest.fn();

    // Render the Sorter component
    render(<Sorter onChange={onChangeMock} />);

    // Get the sort buttons
    const ascButton = screen.getAllByRole('button')[0];
    const descButton = screen.getAllByRole('button')[1];

    // Click the "asc" button
    fireEvent.click(ascButton);

    // Check that onChangeMock was called with 'asc'
    expect(onChangeMock).toHaveBeenCalledWith('asc');

    // Click the "desc" button
    fireEvent.click(descButton);

    // Check that onChangeMock was called with 'desc'
    expect(onChangeMock).toHaveBeenCalledWith('desc');
});