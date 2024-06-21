import { Tabs } from 'expo-router'
import {FontAwesome} from '@expo/vector-icons'
import React from 'react'
import { Text } from 'react-native'

export default function Homeayout() {
  return(
    <Tabs>
      <Tabs.Screen
      name='index' 
      options={{
        headerShown: false, 
        title: 'Home',
        tabBarStyle: {backgroundColor: '#2C2C2C', borderTopColor: '#000'},
        tabBarLabel: ({focused, children}) => {
          if(focused) {
            return <Text style={{color: '#ff0000'}}>{children}</Text>
          }
          return <Text style={{color: '#000'}}>{children}</Text>
        },
        tabBarIcon: ({focused}) => {
          if(focused) {
            return <FontAwesome name='home' color="#ff0000" size={32}/>
          }

          return <FontAwesome name='home' color="#000" size={32}/>
        }
        }}/>

      <Tabs.Screen
      name='user' 
      options={{
        headerShown: true, 
        title: 'Conta',
        headerStyle: {backgroundColor: '#2C2C2C'},
        headerTitleStyle: {fontSize: 32, color: '#ffff'},
        tabBarStyle: {backgroundColor: '#2C2C2C', borderTopColor: '#000'},
        tabBarLabel: ({focused, children}) => {
          if(focused) {
            return <Text style={{color: '#ff0000'}}>{children}</Text>
          }
          return <Text style={{color: '#000'}}>{children}</Text>
        },
        tabBarIcon: ({focused}) => {
          if(focused) {
            return <FontAwesome name='user' color="#ff0000" size={32}/>
          }

          return <FontAwesome name='user' color="#000" size={32}/>
        }
        }}/>
    </Tabs>
  )
}