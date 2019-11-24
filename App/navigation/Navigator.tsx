import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Icon from 'react-native-vector-icons/Feather'
import { Home, Videos, Podcasts, Articles } from '../screens'
import { createAppContainer } from 'react-navigation'

const tabs = createBottomTabNavigator(
    {
        Home, 
        Videos,
        Podcasts,
        Articles
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                return (
                    <Icon 
                        name={iconName(navigation.state.routeName)} 
                        size={25} 
                        color={tintColor} />
                )
              },
            }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        }
    }
)

const Navigator = createAppContainer(tabs)

const iconName = routeName => {
    switch (routeName) {
        case "Home":
            return "home"
        case "Videos":
            return "youtube"
        case "Podcasts":
            return "headphones"
        case "Articles":
            return "book-open"
    }
}

export default Navigator