# Component Factory

This is a Turborepo built to create the components and preview them.

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `generator`: a [Next.js](https://nextjs.org/) app used to build the components with [Tailwind CSS](https://tailwindcss.com/)
- `viewer`: another [Next.js](https://nextjs.org/) app which is used as the previewer of the components build with the generator with [Tailwind CSS](https://tailwindcss.com/)
- `ui`: a stub React component library with [Tailwind CSS](https://tailwindcss.com/) shared by both `generator` and `viewer` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

You can run `turbo run dev` command to start the development for all the applications or you can individually build the applications, the instructions are given below:

### Building apps/generator

You can run the development server for the **generator** app in the following ways.

- #### Using turbo cli

```
turbo run dev --filter generator
```

- #### Using yarn

In your terminal, navigate to `app/generator` and run the following command

```
yarn dev
```

### Building apps/viewer

You can run the development server for the **viewer** app in the following ways.

- #### Using turbo cli

```
turbo run dev --filter viewer
```

- #### Using yarn

In your terminal, navigate to `app/viewer` and run the following command

```
yarn dev
```

### Building packages/ui

This example is set up to produce compiled styles for `ui` components into the `dist` directory. The component `.tsx` files are consumed by the Next.js apps directly using `transpilePackages` in `next.config.js`. This was chosen for several reasons:

- Make sharing one `tailwind.config.js` to apps and packages as easy as possible.
- Make package compilation simple by only depending on the Next.js Compiler and `tailwindcss`.
- Ensure Tailwind classes do not overwrite each other. The `ui` package uses a `ui-` prefix for it's classes.
- Maintain clear package export boundaries.

Another option is to consume `packages/ui` directly from source without building. If using this option, you will need to update the `tailwind.config.js` in your apps to be aware of your package locations, so it can find all usages of the `tailwindcss` class names for CSS compilation.

For example, in [tailwind.config.js](packages/tailwind-config/tailwind.config.js):

```js
  content: [
    // app content
    `src/**/*.{js,ts,jsx,tsx}`,
    // include packages if not transpiling
    "../../packages/ui/*.{js,ts,jsx,tsx}",
  ],
```

If you choose this strategy, you can remove the `tailwindcss` and `autoprefixer` dependencies from the `ui` package.

### Utilities

This Turborepo has some additional tools already setup for you:

- [Tailwind CSS](https://tailwindcss.com/) for styles
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
