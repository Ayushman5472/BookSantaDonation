import * as React from 'react'
import {createDrawerNavigator} from 'react-navigation-drawer'
import CustomSidebarMenu from './customSidebarMenu'
import {AppTabNavigator} from './AppTabNavigator'
import SettingsScreen from '../screens/SettingsScreen'

export const AppDrawerNavigator = createDrawerNavigator({
Home:{screen:AppTabNavigator},
Settings: {screen:SettingsScreen},
},
{
contentComponent:CustomSidebarMenu
},
{
initialRouteName:'Home'
},
)
