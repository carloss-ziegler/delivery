import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  ChevronDoubleDownIcon,
  ChevronRightIcon,
} from "react-native-heroicons/outline";

const Filters = () => {
  return (
    <TouchableOpacity className="justify-center border-b border-gray-300 h-12">
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center">
          <ChevronDoubleDownIcon size={20} color="gray" opacity={0.6} />
          <View className="ml-4">
            <Text className="font-medium">Ordenar</Text>
            <Text className="text-gray-500">Recomendado</Text>
          </View>
        </View>
        <ChevronRightIcon size={20} color="#00CCBB" />
      </View>
    </TouchableOpacity>
  );
};

export default Filters;
