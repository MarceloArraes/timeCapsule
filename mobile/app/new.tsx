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

// import NLWLogo from "../src/assets/nlw-spacetime-logo.svg";
import { Link, useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import * as SecureStore from "expo-secure-store";
import { api } from "../src/lib/api";

export default function NewMemory() {
  const { bottom, top } = useSafeAreaInsets();
  const router = useRouter();

  const [preview, setPreview] = useState<string | null>(null);

  const [content, setContent] = useState("");
  const [isPublic, setIsPublic] = useState(false);

  async function openImagePicker() {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
      });
      if (result.assets![0]) {
        setPreview(result.assets![0]?.uri);
      }
    } catch (err) {
      console.log("error757", err);
    }
  }

  async function handleCreateMemory() {
    const token = await SecureStore.getItemAsync("token");
    let coverUrl = "";

    if (preview) {
      const uploadFormData = new FormData();

      uploadFormData.append("file", {
        uri: preview,
        name: "image.jpg",
        type: "image/jpg",
      } as any);

      const uploadResponse = await api
        .post("/upload", uploadFormData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((success) => {
          console.log("memory created", success);
          return success;
        })
        .catch((error) => {
          console.log("error14563 ", error);
        });

      coverUrl = uploadResponse?.data.fileUrl;
    }

    await api.post(
      "/memories",
      {
        content,
        isPublic,
        coverUrl,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    router.back();
  }

  return (
    <ScrollView
      className="flex-1 px-8"
      contentContainerStyle={{ paddingBottom: bottom, paddingTop: top }}
    >
      <View className="mt-4 flex-row items-center justify-between">
        <Link href="/" asChild>
          <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full bg-purple-500">
            <Icon name="arrow-left" size={16} color="#fff" />
          </TouchableOpacity>
        </Link>
      </View>

      <View className="mt-6 space-y-6">
        <View className="flex-row items-center gap-2">
          <Switch
            value={isPublic}
            onValueChange={setIsPublic}
            trackColor={{ false: "#767577", true: "#372560" }}
            thumbColor={isPublic ? "#9b79ea" : "#9e9ea0"}
          />
          <Text className="font-body text-base text-gray-50">
            Make the memory public
          </Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={openImagePicker}
          className="h-32 items-center justify-center rounded-lg border border-dashed border-gray-500 bg-black/40"
        >
          {preview ? (
            <Image
              source={{ uri: preview }}
              className="h-full w-full rounded-lg object-cover"
            />
          ) : (
            <View className="flex-row items-center gap-2">
              <Icon name="image" color="#fff" size={16} />
              <Text className="text-base font-bold text-gray-50">
                Add cover picture or video.
              </Text>
            </View>
          )}
        </TouchableOpacity>

        <TextInput
          multiline
          value={content}
          onChangeText={setContent}
          textAlignVertical="top"
          className="p-0 font-body text-lg text-gray-100"
          placeholderTextColor="rgb(234 234 234)"
          placeholder="Freely add pictures, videos and texts that you want to remember."
        />

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={handleCreateMemory}
          className="items-center self-end rounded-full bg-green-500 px-5 py-2"
        >
          <Text className="font-alt text-sm uppercase text-black">Save</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
