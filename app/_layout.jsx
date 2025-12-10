import { Colors } from '@/constants/theme';
import { Stack } from 'expo-router';
import { Appearance } from 'react-native';


export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = Appearance.getColorScheme();

  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

  return (
      <Stack screenOptions={{ headerStyle: { backgroundColor: theme.headerBackground}, headerTintColor: theme.text, headerShadowVisible: false}} > 
        {/* <Stack.Screen name="(coffee)" options={{ headerShown: false }} /> */}
        <Stack.Screen name="index" options={{ title: "Home", headerShown: false}} />
        <Stack.Screen name="contact" options={{ title: "Contact us", headerShown: "true" }} /> 
        {/* <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} /> */}
      </Stack>
      
  );
}
