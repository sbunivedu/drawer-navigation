import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, View } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';



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

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="A"
        component={HomeScreen}
        options={{ tabBarLabel: 'Home!' }}
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
        options={{ tabBarLabel: 'Settings!' }}
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
            drawerIcon: getDrawerItemIcon("home"),
          }}
        />
        <Drawer.Screen
          name="Notifications"
          component={NotificationsStackScreen}
          options={{
            drawerIcon: getDrawerItemIcon("info"),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
