
import { HeaderShownContext } from '@react-navigation/elements';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';

import 'react-native-reanimated';



export default function RootLayout() {
  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    
      <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="index"  />
        
      </Stack>
     
    
  );
}
