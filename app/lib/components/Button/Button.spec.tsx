import { render, screen } from '@testing-library/react';
import { Button } from '~/lib/components/Button';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

describe('Button component', () => {
  test('should render button properly', () => {
    render(<Button>Click me</Button>);

    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  test('should render button in default size and theme', () => {
    render(<Button>Click me</Button>);

    expect(screen.getByRole('button')).toHaveClass('from-emerald-400', 'text-base');
  });

  test('should render button with defined size and theme', () => {
    render(
      <Button size="large" color="secondary">
        Click me
      </Button>,
    );

    expect(screen.getByRole('button')).toHaveClass('from-rose-400', 'text-2xl');
  });

  test('should pass all remaining props into button element', () => {
    const mockedOnClickHandler = vi.fn();

    render(
      <Button onClick={mockedOnClickHandler} type="reset">
        Click me
      </Button>,
    );

    userEvent.click(screen.getByRole('button', { name: 'Click me' }));

    expect(mockedOnClickHandler).toHaveBeenCalled();
    expect(screen.getByRole('button', { name: 'Click me' })).toHaveAttribute('type', 'reset');
  });
});
