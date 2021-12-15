# Acquire tiptap extensions through dynamic imports (using vite)

To reproduce do the following.

1. clone the repo
2. in root: pnpm run clean
3. in packages/extension-introduction: pnpm run clean
4. in packages/extension-introduction: pnpm run build
5. in packages/extension-introduction: pnpm run copy
6. in root: pnpm run build
7. in root: pnpm run copy
8. in remote-extensions navigate to `index.html` and 'Open with Live Server'
9. in root: pnpm run preview
10. in browser go to: http://localhost:5000
   
   - FireFox console shows:
     `Uncaught (in promise) TypeError: Error resolving module specifier “@tiptap/core”.   
      Relative module specifiers must start with “./”, “../” or “/”.` 
      (_The page does not load_)

   - Google Chrome console shows:
     `Some (harmless) warnings about source maps`
     (_The page loads_)

11. in root: pnpm run dev

   - Firefox reports:
     `Uncaught (in promise) TypeError: Error resolving module specifier “@tiptap/core”.   
      Relative module specifiers must start with “./”, “../” or “/”.` 
      (_The page does not load_)

   - Google Chrome reports:
     `An import map is added after module script load was triggered.` and
     `Uncaught (in promise) TypeError: Failed to resolve module specifier "@tiptap/core". 
      Relative references must start with either "/", "./", or "../".`
      (_The page does not load_)