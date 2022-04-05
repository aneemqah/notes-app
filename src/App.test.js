import { render, screen, getByRole } from '@testing-library/react';
import Header from './components/Header';
import Search from './components/Search';
import Note from './components/Note';

test('renders search input field', () => {
  render(<Search />);
  const searchInput = screen.getByTestId('search-note');
  expect(searchInput).toBeInTheDocument();
  expect(searchInput).toHaveAttribute('type', 'text');
});

test('renders delete icon', () => {
  const { getByTestId } = render(<Note />);
  expect(getByTestId('note-id')).toBeDefined();
});

test('renders header toggle', () => {
  render(<Header />);
  const toogleButton = screen.getByText('Toggle Mode');
  expect(toogleButton).toBeInTheDocument();
});
