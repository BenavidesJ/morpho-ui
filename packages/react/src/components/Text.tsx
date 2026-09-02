import { createElement, type ReactNode } from 'react';

type TextElement = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface TextProps {
  as?: TextElement;
  children?: ReactNode;
  className?: string;
};

export const Text = ({ as = 'p', children, className }: TextProps) =>
  createElement(as, { className }, children);