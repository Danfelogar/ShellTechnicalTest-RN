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
npx rnvi-update-plist package.json ios/JobchainTechnicalTestRN(AppName)/Info.plist
```