import React from 'react';
import { render, screen } from '@testing-library/react';
import CourseList from './CourseList'; // Adjust the import path if needed

describe('CourseList', () => {
    test('renders CourseList component without crashing', () => {
        render(<CourseList />);
        // Assert that the component renders successfully
        expect(screen.getByText(/Available courses/i)).toBeInTheDocument();
    });

    test('renders the correct number of rows', () => {
        render(<CourseList />);
        // Assuming the component has 5 rows, you can check for their presence
        const rows = screen.getAllByRole('row'); // This will get all rows in the table
        expect(rows.length).toBe(5); // Adjust this number based on your actual rows
    });
});
