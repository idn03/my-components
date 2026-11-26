# My Components

A personal collection of custom React Native components for reuse across projects. This Expo app gives each component a place to develop and preview on iOS and Android before bringing it into another app. It uses TypeScript, NativeWind for styling, and Expo Router for preview screens.

## Run locally

```sh
pnpm install --frozen-lockfile
pnpm start
```

Press `i` to open the iOS simulator or `a` to open the Android emulator. Run `pnpm typecheck` to check the TypeScript code.

## Add a component

Create a root-level `components/` directory for your first component. For example, save a reusable button in `components/Button.tsx` and render it in the [home screen](app/index.tsx) to preview it. The [Tailwind configuration](tailwind.config.js) already scans both directories for NativeWind classes.

## Reuse a component

Copy the component and any local files it imports into the destination project. Install the packages it uses. For components styled with NativeWind, make sure the destination app has NativeWind configured and scans the component’s new location. Then import the component into the screen where you need it.
