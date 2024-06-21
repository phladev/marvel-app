import {Stack} from 'expo-router'

export default function RootLayout() {
  return(
    <Stack>
      <Stack.Screen name='index' options={{headerShown: false}}/>
      <Stack.Screen name='(auth)/login'  options={{
        headerShown: true, 
        title: 'Login', 
        headerStyle: {backgroundColor: '#2c2c2c',}, 
        headerTitleStyle: {color: '#ffff'}
        }}/>
      <Stack.Screen name='(auth)/register' options={{
        headerShown: true,
        title: 'Registro', 
        headerStyle: {backgroundColor: '#2c2c2c'}, 
        headerTitleStyle: {color: '#ffff'}, 
        }}/>
      <Stack.Screen name='(tabs)' options={{headerShown: false}}/>
    </Stack>
  )
}