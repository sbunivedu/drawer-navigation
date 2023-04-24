import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, View } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

function getHeaderTitle(route) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';

  switch (routeName) {
    case 'Home':
      return 'Home title';
    case 'Notifications':
      return 'Notifications title';
  }
}


import { MaterialIcons } from '@expo/vector-icons';

const getDrawerItemIcon = icon=>({color})=>(
  <MaterialIcons name={icon} size={22} style={{ color: color }} />
);

const HomeStack = createNativeStackNavigator();
const SettingsStack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function HomeScreen2({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
      <Button onPress={() => navigation.push("C")} title="Go to next screen" />
    </View>
  );
}

function NotificationsScreen2({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back" />
    </View>
  );
}

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="A"
        component={HomeScreen}
        options={({ route }) => ({
          headerTitle: getHeaderTitle(route),
          headerShown: false
        })}
      />
      <HomeStack.Screen
        name="B"
        component={NotificationsScreen}
        options={({ route }) => ({
          headerTitle: getHeaderTitle(route),
          headerShown: false
        })}
      />
    </HomeStack.Navigator>
  );
}

function NotificationsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="B"
        component={NotificationsScreen}
        options={{
          headerShown: true
        }}
      />
      <SettingsStack.Screen
        name="C"
        component={NotificationsScreen2}
        options={{
          headerShown: true
        }}
      />
    </SettingsStack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="HomeStack"
          component={HomeStackScreen}
          options={{
            title: "Home",
            drawerIcon: getDrawerItemIcon("home"),
            drawerLabel: 'Home',
          }}
        />
        <Drawer.Screen
          name="Notifications"
          component={NotificationsStackScreen}
          options={{
            drawerIcon: getDrawerItemIcon("info"),
            drawerLabel: 'Notifications',
            headerShown: false
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
