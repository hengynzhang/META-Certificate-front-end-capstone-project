import React from 'react';
import {render, screen, fireEvent, waitFor} from '@testing-library/react';
import ContactDetails from './components/ContactDetails';
import '@testing-library/jest-dom';
import {ThemeProvider} from 'styled-components';

const theme = {
    colors: {
        primaryGreen: '#00FF00',
        primaryBlack: '#000000',
        bodyColor: '#FFFFFF'
    },
    fonts: {
        text: 'Arial',
        heading: 'Arial'
    }
};

describe('ContactDetails component', () => {
    test('renders ContactDetails component', () => {
        render(
            <ThemeProvider theme={theme}>
                <ContactDetails />
            </ThemeProvider>);
        expect (screen.getByText(/Personal Information/i)).toBeInTheDocument();
    })
    test('updates name input value', () => {
        render(
            <ThemeProvider theme={theme}>
                <ContactDetails />
            </ThemeProvider>);
        const nameInput = screen.getByPlaceholderText(/Name/i);
        fireEvent.change(nameInput, {target: {value: 'John'}});
        expect(nameInput.value).toBe('John');
    });
    test('shows validation errors for invalid inputs', async () => {
        render(
            <ThemeProvider theme={theme}>
                <ContactDetails />
            </ThemeProvider>);
        fireEvent.change(screen.getByPlaceholderText(/Name/i), {target: {value: 'Ok'}});
        fireEvent.change(screen.getByPlaceholderText(/Email/i), {target: {value: 'john'}});
        fireEvent.change(screen.getByPlaceholderText(/Phone/i), {target: {value: '123'}});
        expect (await screen.findByText(/Name must be longer than 3 characters./i)).toBeInTheDocument();
        expect (await screen.findByText(/Invalid email address./i)).toBeInTheDocument();
        expect (await screen.findByText(/Phone number must be 10 digits./i)).toBeInTheDocument();
    });
    test('opens modal with success message upon successful form submission', async () => {
        render(
            <ThemeProvider theme={theme}>
                <ContactDetails />
            </ThemeProvider>);
        fireEvent.change(screen.getByPlaceholderText(/Name/i), {target: {value: 'John'}});
        fireEvent.change(screen.getByPlaceholderText(/Email/i), {target: {value: 'johndoe@example.com'}});
        fireEvent.change(screen.getByPlaceholderText(/Phone/i), {target: {value: '1234567890'}});
        fireEvent.click(screen.getByText(/Reserve/i));
        expect(await screen.findByText(/Reserve successful. Thank you for your reservation./i)).toBeInTheDocument();
    });
    test('closes the modal when clicking the close button', async () => {
        render(
            <ThemeProvider theme={theme}>
                <ContactDetails />
            </ThemeProvider>);
        fireEvent.change(screen.getByPlaceholderText(/Name/i), {target: {value: 'John'}});
        fireEvent.change(screen.getByPlaceholderText(/Email/i), {target: {value: 'johndoe@example.com'}});
        fireEvent.change(screen.getByPlaceholderText(/Phone/i), {target: {value: '1234567890'}});
        fireEvent.click(screen.getByText(/Reserve/i));
        expect(await screen.findByText(/Reserve successful. Thank you for your reservation./i)).toBeInTheDocument();
        fireEvent.click(screen.getByText(/×/i));
        await waitFor(() => {
            expect(screen.queryByText(/Reserve successful. Thank you for your reservation./i)).not.toBeInTheDocument();
        });
    });
})
