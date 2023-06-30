import { useEffect } from "react";
import * as SecureStore from "expo-secure-store";
import { useRouter } from "expo-router";
import { Text, View, Image, TouchableOpacity } from "react-native";
// import Synth1 from "./src/assets/synth1.jpeg";
// import Synth3 from "./src/assets/synth3.jpeg";
// import Synth4 from "./src/assets/synth4.jpeg";
// import Synth5 from "./src/assets/synth5.jpeg";
import Stripes from "../src/assets/stripe.svg";
import { styled } from "nativewind";
import BgSun from "../src/assets/bg-sun.png";
import { makeRedirectUri, useAuthRequest } from "expo-auth-session";
import { api } from "../src/lib/api";

const StyledStripes = styled(Stripes);

const discovery = {
  authorizationEndpoint: "https://github.com/login/oauth/authorize",
  tokenEndpoint: "https://github.com/login/oauth/access_token",
  revocationEndpoint:
    "https://github.com/settings/connections/applications/cb22a35fd7fb5a0e1291",
};

export default function App() {
  const router = useRouter();
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: "cb22a35fd7fb5a0e1291",
      scopes: ["identity"],
      redirectUri: makeRedirectUri({
        scheme: "spacecapsule",
      }),
    },
    discovery
  );
  const UserRegistration = async (code: string) => {
    const response = await api.post("/register", { code });

    const { token } = response.data;

    await SecureStore.setItemAsync("token", token);
    router.push("/memories");
  };

  useEffect(() => {
    console.log("response123", response);
    console.log(
      "makeRedirectUri123",
      makeRedirectUri({
        scheme: "spacecapsule",
      })
    );

    if (response?.type === "success") {
      const { code } = response.params;
      console.log("code654 ", code);
      UserRegistration(code);
    }
  }, [response]);

  return (
    <View className="flex-1 items-center py-10">
      <View className="flex-1 items-center justify-center gap-6">
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
          onPress={() => {
            promptAsync();
          }}
        >
          <Text className="font-alt text-sm uppercase text-black">
            SAVE MEMORY
          </Text>
        </TouchableOpacity>
      </View>
      <Text className="text-center font-body text-sm leading-relaxed text-gray-200">
        Made by Marcelo, with love.
      </Text>
    </View>
  );
}
