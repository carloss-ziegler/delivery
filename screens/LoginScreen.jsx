import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import { ArrowRightIcon } from "react-native-heroicons/outline";

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="bg-white flex-1 justify-center items-center">
      <Animatable.View
        animation="fadeInLeft"
        className="w-48 h-18  items-center justify-center flex-row"
      >
        <Text className="text-3xl">Bem-Vindo {""}</Text>
        <Animatable.Text
          animation="pulse"
          easing="ease-in-out"
          iterationCount="infinite"
          className="text-3xl"
        >
          👋
        </Animatable.Text>
      </Animatable.View>
      <Animatable.View animation="fadeInLeft">
        <Text className="text-gray-400">
          Peça a qualquer hora, de qualquer lugar!
        </Text>
      </Animatable.View>

      <View>
        <Animatable.Image
          source={require("../assets/delivery2.gif")}
          animation="slideInUp"
          iterationCount={1}
          className="h-96 w-96"
        />
      </View>

      <Animatable.View animation="fadeInUp" delay={600}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          className="shadow bg-[#00CCBB] w-64  py-4 rounded-lg flex-row items-center space-x-1 justify-center"
        >
          <Animatable.Text
            animation="pulse"
            easing="ease-in-out-sine"
            iterationCount="infinite"
            className="text-xl font-bold color-white"
          >
            Acessar <ArrowRightIcon size={20} color="#fff" />
          </Animatable.Text>
        </TouchableOpacity>
      </Animatable.View>
    </SafeAreaView>
  );
};

export default LoginScreen;
