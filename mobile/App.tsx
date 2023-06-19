import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { BaiJamjuree_700Bold } from "@expo-google-fonts/bai-jamjuree";
// import Synth1 from "./src/assets/synth1.jpeg";
import Synth2 from "./src/assets/synth2.jpeg";
// import Synth3 from "./src/assets/synth3.jpeg";
// import Synth4 from "./src/assets/synth4.jpeg";
// import Synth5 from "./src/assets/synth5.jpeg";
import Stripes from "./src/assets/stripe.svg";
import { styled } from "nativewind";
import BgSun from "./src/assets/bg-sun.png";

const StyledStripes = styled(Stripes);

export default function App() {
  const [hasLoaded, err] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  });
  if (!hasLoaded) {
    return null;
  }
  if (err != null) {
    console.log("error123", err);
  }
  return (
    <ImageBackground
      source={Synth2}
      className="relative flex-1 items-center bg-zinc-800 py-10"
      imageStyle={{ position: "absolute", opacity: 0.7 }}
    >
      <StyledStripes
        className="absolute right-48 top-96 rotate-90"
        height={"5%"}
      />
      <View className="flex-1 items-center justify-center gap-6">
        <Image
          source={BgSun}
          alt="Sol Invictus"
          style={{ width: 100, height: 100, position: "absolute", top: "20%" }}
        />
        <View className="space-y-2">
          <Text className="text-center font-title text-2xl leading-tight text-zinc-50">
            Your time Capsule
          </Text>
          <Text className="text-center font-body text-base leading-relaxed text-zinc-100">
            Save the best moments of your life.
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          className="justify-center rounded-full bg-green-500 px-5 py-3"
        >
          <Text className="font-alt text-sm uppercase text-black">
            SAVE MEMORY
          </Text>
        </TouchableOpacity>
      </View>
      <Text className="text-center font-body text-sm leading-relaxed text-gray-200">
        Made by Marcelo, with love.
      </Text>
      <StatusBar style="light" translucent />
    </ImageBackground>
  );
}
