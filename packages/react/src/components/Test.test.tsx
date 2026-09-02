import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Text } from './Text';
import { checkA11y } from '../test/a11y';

describe('Text', () => {
  it('renders a p tag by default', () => {
    render(<Text>Sample</Text>);
    expect(screen.getByText('Sample').tagName).toBe('P');
  });

  it('switches the element when as prop is passed', () => {
    render(<Text as="h1">Heading Sample</Text>);
    expect(screen.getByRole('heading', { level: 1, name: 'Heading Sample' })).toBeInTheDocument();
  });

  it('aplies className', () => {
    render(<Text className="hero">x</Text>);
    expect(screen.getByText('x')).toHaveClass('hero');
  });

  it('WCAG A/AA accesibility rules', async () => {
    const { container } = render(<Text as="h2">Accesible</Text>)
    const results = await checkA11y(container);
    expect(results.violations).toEqual([]);
  });
});