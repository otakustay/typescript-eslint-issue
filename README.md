# typescript-eslint issues

This demostrates some issues with `@typescript-eslint/*` and `typescript@4.x`.

## Use

```shell
npm i
$(npm bin)/eslint *.ts *.tsx
```

## Issues

### generic-jsx-no-undef.tsx

Using generic in JSX fires `no-undef` rule.

### type-assertion-no-undef.ts

Value used in type assertion function triggers `no-undef` rule.

### type-var-redef.tsx

A type and a variable with the same name triggers `@typescript-eslint/no-redeclare` rule.

### as-const-undef.ts

`as const` triggers `no-undef` rule.
