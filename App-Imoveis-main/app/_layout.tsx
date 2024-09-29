import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="home/index" options={{ headerShown: false }} />
      <Stack.Screen name="register/index" options={{ headerShown: false }} />
      <Stack.Screen name="house/index" options={{ headerShown: false }} />
    </Stack>
  );
}
