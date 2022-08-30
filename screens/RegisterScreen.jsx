import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
  const navigation = useNavigation();

  return (
    <View className="items-center justify-center flex-1">
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text className="text-3xl">Acessar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;
