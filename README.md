# React Native Shell Project

This project is a shell template to quickly start new React Native projects.
It comes pre-configured with popular libraries for navigation, icons, form validation, and more.
You can use this as a base to avoid repetitive setup steps in new projects.

## Included libraries

- **react-native-vector-icons** (all icon sets: AntDesign, Entypo, EvilIcons, Feather, FontAwesome, FontAwesome5, FontAwesome5Pro, FontAwesome6, FontAwesome6Pro, Fontello, Fontisto, Foundation, Icomoon, Ionicons, Lucide, MaterialDesignIcons, MaterialIcons, Octicons, SimpleLineIcons, Zocial)
- **@react-navigation/native**, **@react-navigation/stack** (navigation)
- **react-native-gesture-handler**, **react-native-safe-area-context**, **react-native-screens** (navigation dependencies)
- **react-hook-form**, **@hookform/resolvers**, **yup** (form validation)
- **@react-native/new-app-screen** (UI)
- **Typescript, Jest, ESLint, Prettier** (dev tools)
- See `package.json` for the full list and versions.


## Form Handling and Validation

This template includes **react-hook-form** for efficient form state management and **yup** for schema-based form validation. These libraries help you build robust forms with minimal boilerplate and strong validation rules.

To add your own features, just install new packages and start coding!

## how install vector-icons in react-native with ios
```ts
npx rnvi-update-plist package.json ios/ShellTechnicalTestRN(AppName)/Info.plist
```

## Jetpack Compose integration (Android / Fabric native components)

If you want to take this project and integrate Jetpack Compose (Fabric native components) for Android, please follow these instructions:

- Search the entire codebase for every comment that says:
	`//init: jetpack Compose`
	and use those comments as guidance and entry points for the integration work.

- Use the following files as concrete examples for the native side, package registration, and the JS/TS usage:
	- `android/app/src/main/java/com/webview/ComposeFormManager.kt`
	- `android/app/src/main/java/com/webview/ComposeFormView.kt`
	- `android/app/src/main/java/com/webview/ReactWebViewPackage.kt`
	- `src/components/ComposeFormNativeComponent.ts`
	- `src/screen/Home.tsx`

- Read the official React Native documentation on Fabric native components carefully before starting:
	https://reactnative.dev/docs/fabric-native-components-introduction

Notes and quick tips:
- The Kotlin/Java files demonstrate how to create a View and a ViewManager and how to register the package with React Native.
- The TS/JS files show how the Fabric component is exported and consumed from React Native screens.
- Make sure Fabric is enabled in your Android build configuration if required by your RN version, and follow the migration/setup steps in the RN docs.
- When changing native code, do a clean rebuild (for example `./gradlew clean` on Android) and restart Metro to pick up native changes.

- Before running `pnpm run android`, generate the codegen artifacts (if your project/setup requires them) by running these commands from the project root:
```sh
cd android
./gradlew generateCodegenArtifactsFromSchema
```

## Run Android for the first time (example)

If you're starting the Android app for the first time (or after native code changes), you may need to generate codegen artifacts, reset Metro's cache, and then build/run the app. From the project root run the following commands in your terminal:

```sh
# 1. Generate codegen artifacts (run inside the android folder)
cd android
./gradlew generateCodegenArtifactsFromSchema

# 2. Go back to the project root
cd ..

# 3. Reset Metro bundler cache (helps avoid stale cache issues)
pnpm run reset-cache

# 4. Build and install the Android app
pnpm run android
```

Notes:
- On macOS/Linux you may need to make the Gradle wrapper executable the first time: `chmod +x android/gradlew`.
- If you changed native code, consider running `./gradlew clean` inside `android/` before step 1.
