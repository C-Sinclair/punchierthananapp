import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Icon from 'react-native-vector-icons/Feather'
import { Home, Videos, Podcasts, Articles } from '../screens'
import { createAppContainer } from 'react-navigation'
import Colours from '../themes/Colours'

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
                    <TabIcon 
                        name={navigation.state.routeName}
                        colour={tintColor} />
            )},
        }),
        tabBarOptions: {
            activeTintColor: Colours.main,
            inactiveTintColor: Colours.inactive,
        }
    }
)

const Navigator = createAppContainer(tabs)

const HomeIcon = props => (
    <Icon 
        name="home" 
        size={25} 
        color={props.colour} />
)

const VideosIcon = props => (
    <Icon
        name="youtube"
        size={25}
        color={props.colour} />
)

const PodcastsIcon = props => (
    <Icon
        name="headphones"
        size={25}
        color={props.colour} />
)

const ArticlesIcon = props => (
    <Icon
        name="book-open"
        size={25}
        color={props.colour} />
)

export const TabIcon = ({ name, colour }) => {
    switch (name) {
        case "Home":
            return <HomeIcon colour={colour} />
        case "Videos":
            return <VideosIcon colour={colour} />
        case "Podcasts":
            return <PodcastsIcon colour={colour} />
        case "Articles":
            return <ArticlesIcon colour={colour} />
        default:
            return null
    }
}

export default Navigator