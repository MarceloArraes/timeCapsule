import { ImageBackground, Image } from "react-native";
import Stripes from "../src/assets/stripe.svg";
import Synth2 from "../src/assets/synth2.jpeg";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { BaiJamjuree_700Bold } from "@expo-google-fonts/bai-jamjuree";
// import Synth1 from "./src/assets/synth1.jpeg";
import { styled } from "nativewind";
// import { SplashScreen } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useCallback, useEffect, useState } from "react";
import { Stack } from "expo-router";
import * as SecureStore from "expo-secure-store";
import BgSun from "../src/assets/bg-sun.png";

const StyledStripes = styled(Stripes);

SplashScreen.preventAutoHideAsync();

export default function layout() {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState<
    null | boolean
  >(false);
  const [hasLoaded, err] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  });

  useEffect(() => {
    SecureStore.getItemAsync("token").then((token) => {
      setIsUserAuthenticated(!!token);
    });
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (!hasLoaded) return null;
    if (hasLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [hasLoaded]);
  if (!hasLoaded) return null;
  return (
    <ImageBackground
      source={Synth2}
      onLayout={onLayoutRootView}
      className="relative flex-1 bg-zinc-800"
      imageStyle={{ position: "absolute", opacity: 0.7 }}
    >
      <StyledStripes
        className="absolute right-48 top-96 rotate-90"
        height={"5%"}
      />
      <Image
        source={BgSun}
        alt="Sol Invictus"
        style={{
          width: 100,
          height: 100,
          position: "absolute",
          top: "20%",
          alignSelf: "center",
        }}
      />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "transparent" },
        }}
      >
        <Stack.Screen
          name="index"
          redirect={isUserAuthenticated as boolean | undefined}
        />
        <Stack.Screen name="new" />
        <Stack.Screen name="memories" />
      </Stack>
      <StatusBar style="light" translucent />
    </ImageBackground>
  );
}
