Source: https://reactnavigation.org/docs/drawer-based-navigation

Install dependencies:
```
npm install @react-navigation/native  @react-navigation/native-stack @react-navigation/drawer react-native-gesture-handler react-native-reanimated
```

Add the following to the top of `App.js`.
```
import 'react-native-gesture-handler';
```

Change "reanimated" version in `package.json` as follows and run `npm install`.
```
"react-native-reanimated": "^2.14.4"
```

Screen options with nested navigators https://reactnavigation.org/docs/screen-options-resolution

You can only modify navigation options for a navigator from one of its screen components. This applies equally to navigators that are nested as screens.
