import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "@expo/vector-icons/Feather";
import * as SecureStore from "expo-secure-store";

const Signin = ({ promptAsync }) => {
  // const token = await SecureStore.getItemAsync("token");

  return (
    <TouchableOpacity
      onPress={() => promptAsync()}
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 3,
      }}
    >
      <View className="items-center justify-center">
        <Icon
          name="user"
          size={20}
          width={40}
          height={40}
          style={{
            borderRadius: 99,
            top: 10,
            left: 10,
            color: "black",
          }}
        />
        <View
          style={{
            backgroundColor: "#6974FE",
            height: 40,
            width: 40,
            position: "absolute",
            borderRadius: 99,
            zIndex: -1,
            opacity: 0.4,
          }}
        />
      </View>
      <View>
        <Text style={{ maxWidth: 150, fontSize: 14 }}>
          <Text style={{ textDecorationLine: "underline" }}>
            Create your account
          </Text>{" "}
          and save your memories!
        </Text>
        <Text>Sign in</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Signin;
