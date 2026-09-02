# @morpho-ui/react

Accessible React UI component library.

## Install

```bash
npm i @morpho-ui/react
```

## Usage

```tsx
import { Text } from '@morpho-ui/react'

const App = () => (
  <Text as="h1">Hello, Morpho UI</Text>
)
```

## Components

| Component | Description |
|-----------|-------------|
| `Text`    | Polymorphic text element. `as` defaults to `p`; accepts `children` and `className`. |

## Quality gates

Each component is verified by:

- **Unit + interaction tests** — Vitest + Testing Library.
- **Accessibility audits** — axe-core running the WCAG 2.x A/AA tag set (color-contrast excluded
  by design, validated visually).
- **Lint + typecheck** — ESLint (jsx-a11y, react-hooks) and strict TypeScript.

## Development

```bash
pnpm install
pnpm --filter @morpho-ui/react test       # unit + a11y tests
pnpm --filter @morpho-ui/react lint       # eslint
pnpm --filter @morpho-ui/react typecheck  # tsc --noEmit
pnpm --filter @morpho-ui/react build      # tsup -> dist (ESM + d.ts)
```

## License

ISC