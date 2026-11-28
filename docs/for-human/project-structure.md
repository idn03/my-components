# Project Structure

This project uses Expo Router for navigation and keeps each screen implementation in its own folder under `src/screens/`. Router files in `app/` are thin entry points that import the corresponding screen.

```text
my-components/
├── app/
│   ├── _layout.tsx
│   ├── index.tsx                        # Route entry for HomeScreen
│   └── components/
│       ├── _layout.tsx                  # Optional nested stack layout
│       ├── index.tsx                    # Route entry for ComponentListScreen
│       └── button.tsx                   # Route entry for ButtonScreen
├── src/
│   ├── screens/
│   │   ├── home/
│   │   │   └── HomeScreen.tsx
│   │   ├── component-list/
│   │   │   └── ComponentListScreen.tsx
│   │   └── button/
│   │       └── ButtonScreen.tsx
│   └── components/
│       └── button/
│           └── Button.tsx               # Reusable component implementation
├── assets/
└── docs/
    └── for-human/
        └── project-structure.md
```

## Navigation Flow

1. `app/index.tsx` imports `HomeScreen` from `src/screens/home/HomeScreen.tsx`.
2. The Home screen's **Get Started** button navigates to `/components`.
3. `app/components/index.tsx` imports `ComponentListScreen` from `src/screens/component-list/ComponentListScreen.tsx`.
4. Selecting a component opens its route, such as `/components/button`.
5. `app/components/button.tsx` imports `ButtonScreen` from `src/screens/button/ButtonScreen.tsx`.

The filenames under `app/` define the routes. The files under `src/screens/` implement the screens. Each component guide screen can document usage, props, source location, and show a live example. The reusable component itself stays in `src/components/`, separate from its guide screen.

The nested `app/components/_layout.tsx` is optional and can define shared navigation settings for component list and guide routes.
