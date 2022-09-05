import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { XIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import Filters from "../components/Filters";

const Filter = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1">
      <View className="flex-row items-center justify-between h-20 p-5 shadow border-b border-gray-300">
        <TouchableOpacity onPress={navigation.goBack}>
          <XIcon size={24} color="#00CCBB" />
        </TouchableOpacity>
        <Text className="font-semibold -ml-6">FILTROS</Text>
        <View></View>
      </View>

      <View className="p-4 border-b border-gray-300 bg-white">
        <Filters />
        <Filters />
        <Filters />
        <Filters />
      </View>
    </View>
  );
};

export default Filter;
