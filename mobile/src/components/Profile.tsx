import React, { useEffect, useState } from "react";
import { Image, View, Text } from "react-native";
import jwtDecode from "jwt-decode";
import * as SecureStore from "expo-secure-store";
import { TouchableOpacity } from "react-native-gesture-handler";
import { router } from "expo-router";

interface User {
  sub: string;
  avatarUrl: string;
  name: string;
}

export function Profile() {
  const [user, setUser] = useState<User | null>(null);
  const decodeUser = async () => {
    const token = await SecureStore.getItemAsync("token");
    console.log("token7654 ", token);
    if (!token) return null;
    const user: User = jwtDecode(token);
    setUser(user);
  };

  const signout = () => {
    SecureStore.deleteItemAsync("token");
    setUser(null);
    router.replace("/");
  };

  useEffect(() => {
    decodeUser();
  }, []);
  if (!user) return null;
  return (
    <View className="flex flex-row items-center gap-3 text-left">
      <View
        style={{
          backgroundColor: "#DD8BFC",
          height: 45,
          width: 45,
          borderRadius: 99,
          position: "absolute",
          right: "40%",
          top: -2,
          zIndex: 2,
          opacity: 0.3,
        }}
      />
      <Image
        source={{ uri: user.avatarUrl }}
        alt=""
        style={{
          width: 45,
          height: 45,
          borderRadius: 99,
          position: "absolute",
          right: "40%",
          top: -2,
        }}
      />
      <View>
        <Text className="max-w-[150px] text-sm leading-snug">
          <Text className="underline">{user.name}</Text>
        </Text>
        <TouchableOpacity
          onPress={signout}
          className="text-sm text-red-400 transition-colors duration-500 hover:text-red-300"
        >
          <Text>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
