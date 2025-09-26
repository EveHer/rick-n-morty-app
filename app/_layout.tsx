import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack 
    screenOptions={{ 
      headerStyle: { backgroundColor: '#272b33' }, 
      headerTintColor: '#ff9800',
      headerTitleStyle: { fontWeight: 'bold' },
    }}>
      <Stack.Screen name="index" options={{ title: 'Rick n Morty - Api Consume' }} />
    </Stack>
}
