import React from "react";
import {
  createBottomTabNavigator,
  BottomTabBar,
} from "@react-navigation/bottom-tabs";
import { BlurView } from "expo-blur";
import HomeScreen from "../../screens/HomeScreen";
import EmptyScreen from "../../screens/EmptyScreen";
import Icon from "../../components/Icon";

const Tab = createBottomTabNavigator();

const BlurryBottomBar = (props) => {
  return (
    <BlurView
      intensity={100}
      tint="dark"
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <BottomTabBar {...props} />
    </BlurView>
  );
};

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: "white",
        style: {
          backgroundColor: "transparent",
        },
      }}
      tabBar={BlurryBottomBar}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "home" : "home-outline"}
              color={focused ? "white" : color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Friends"
        component={EmptyScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "people" : "people-outline"}
              color={focused ? "white" : color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={EmptyScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "search" : "search-outline"}
              color={focused ? "white" : color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Library"
        component={EmptyScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "library" : "library-outline"}
              color={focused ? "white" : color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={EmptyScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "person-circle" : "person-circle-outline"}
              color={focused ? "white" : color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
