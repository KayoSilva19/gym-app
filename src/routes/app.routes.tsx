import { Platform } from 'react-native'
import { useTheme } from 'native-base'
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs'

import { Home } from '@screens/Home'
import { Exercise } from '@screens/Exercise'
import { History } from '@screens/History'
import { Profile } from '@screens/Profile'

import  HomeIcon from '@assets/home.svg'
import HistoryIcon from '@assets/history.svg'
import ProfileIcon from '@assets/profile.svg'

type AppRouteType = {
  home: undefined,
  exercise: undefined,
  history: undefined,
  profile: undefined,
}

export type AppBottomNavigatorRoutesProps = BottomTabNavigationProp<AppRouteType> 

const { Navigator, Screen } = createBottomTabNavigator<AppRouteType>()

export function AppRoutes() {
  const { sizes, colors } = useTheme()
  const iconSize = sizes[6]

  return (
    <Navigator screenOptions={{ 
      headerShown: false, 
      tabBarShowLabel: false ,
      tabBarActiveTintColor: colors.green[500],
      tabBarInactiveTintColor: colors.gray[200],
      tabBarStyle: {
        backgroundColor: colors.gray[600],
        borderTopWidth: 0,
        height: Platform.OS === 'android' ? 'auto' : 96,
        paddingBottom: sizes[10],
        paddingTop: sizes[10],
      },
    }}>
      <Screen 
        name='home' 
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <HomeIcon fill={ color } width={iconSize} height={iconSize}/>
          )
        }}
      />
      <Screen 
        name='history' 
        component={History} 
        options={{
          tabBarIcon: ({ color }) => (
            <HistoryIcon fill={ color } width={iconSize} height={iconSize}/>
          )
        }}
      />
      <Screen 
        name='profile' 
        component={Profile} 
        options={{
          tabBarIcon: ({ color }) => (
            <ProfileIcon fill={ color } width={iconSize} height={iconSize}/>
          )
        }}
      />
      <Screen 
        name='exercise' 
        component={Exercise} 
        options={{
          tabBarButton: () => null
        }}
      />
    </Navigator>
  )
}