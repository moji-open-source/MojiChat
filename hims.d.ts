type Linter = import('eslint').Linter

declare module 'eslint-plugin-react' {
  const configs: {
    readonly flat: {
      readonly recommended: { readonly rules: Readonly<Linter.RulesRecord> };
    }
  }
}
