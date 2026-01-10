# My Dev Portfolio :p

My dev portfolio with React and JavaScript.

## Technologies used

* **React**/**React Router**
* **JavaScript**
* **TailwindCSS**
* **pnpm** (Package manager)
* **GitHub** (Deploy platform)

## Dependencies

Add **React** and **React Router**:

```bash
pnpm add react react-dom react-router-dom -E
```

Add Vite plugin for React (Development):

```bash
pnpm add -D @vitejs/plugin-react -E
```

Add **TailwindCSS**:

```bash
pnpm add tailwindcss @tailwindcss/vite -E
```

Other tools:

```bash
pnpm add lucide-react tailwind-merge clsx class-variance-authority -E
```

* `lucide-react`: Icons of **Lucide**.
* `tailwind-merge`: Utility to merge Tailwind CSS classes without style conflicts (e.g., overriding `p-4` with `p-2`).
* `clsx`: Tiny utility for constructing `className` strings conditionally.
* `class-variance-authority`: Library for creating and managing component variants (like buttons with multiple sizes or colors) in a type-safe way.

Vite plugin for **svg**s:

```bash
pnpm add -D vite-plugin-svgr -E
```

Dependency to deploy in **GitHub Pages**:

```bash
pnpm add -D gh-pages -E --force
```

## Run application (Development)

```bash
pnpm dev
```

## Deploy application (Production)

```bash
pnpm run deploy
```