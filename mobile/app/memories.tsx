import {
  Image,
  ScrollView,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "@expo/vector-icons/Feather";
import { Link } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as SecureStore from "expo-secure-store";
import { useEffect, useState } from "react";
import { api } from "../src/lib/api";
import dayjs from "dayjs";
import enAu from "dayjs/locale/en-au";

dayjs.locale(enAu);

interface Memory {
  id: string;
  coverUrl: string;
  excerpt: string;
  createdAt: string;
}

export default function memories() {
  const [memories, setMemories] = useState<Memory[]>([]);
  const { bottom, top } = useSafeAreaInsets();

  const signout = () => {
    SecureStore.deleteItemAsync("token");
  };

  async function loadMemories() {
    const token = await SecureStore.getItemAsync("token");

    const response = await api.get("/memories", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setMemories(response.data);
  }

  useEffect(() => {
    loadMemories();
  }, []);

  return (
    <ScrollView
      className="flex-1 px-8"
      contentContainerStyle={{ paddingBottom: bottom, paddingTop: top }}
    >
      <View className="mt-4 flex-row items-center justify-between">
        <View className="flex-1 flex-row justify-between gap-2">
          <Link href="/memories" asChild>
            <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full bg-purple-500">
              <Icon name="arrow-left" size={16} color="#fff" />
            </TouchableOpacity>
          </Link>

          <TouchableOpacity
            onPress={signout}
            className="h-10 w-10 items-center justify-center rounded-full bg-red-500"
          >
            <Icon name="log-out" size={16} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <View className="mt-6 space-y-10">
        {memories.map((memory, index) => {
          return (
            <View key={`${memory.id}${index}`} className="space-y-4">
              <View className="flex-row items-center gap-2">
                <View className="h-px w-5 bg-gray-50" />
                <Text className="font-body text-xs text-gray-50">
                  {dayjs(memory.createdAt).format("D of MMM, YYYY")}
                </Text>
              </View>
              <View className="space-y-4">
                <Image
                  source={{
                    uri: memory.coverUrl,
                  }}
                  className="aspect-video w-full rounded-lg"
                />
                <Text className="font-body text-base leading-relaxed text-gray-100">
                  {memory.excerpt}
                </Text>
                <Link href="/memories/id" asChild>
                  <TouchableOpacity className="flex-row items-center gap-2">
                    <Text className="font-body text-sm text-gray-200">
                      See More
                    </Text>
                    <Icon name="arrow-right" size={16} color="#9e9ea0" />
                  </TouchableOpacity>
                </Link>
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}
