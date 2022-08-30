import { View, Text, TouchableOpacity, TextInput, Alert } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Entypo } from "@expo/vector-icons";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase";
import { useState } from "react";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleLoginWithEmail = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        AsyncStorage.setItem("token", JSON.stringify(userCredential));
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
    navigation.popToTop();
    Toast.show({
      type: "success",
      text1: "Login",
      text2: "Logado com sucesso!",
      visibilityTime: 3000,
    });
  };

  return (
    <View className="flex-1 bg-[#00CCBB]">
      <Animatable.View
        animation="fadeInLeft"
        className="mt-12 mb-12 items-center"
      >
        <Animatable.Image
          animation="flipInY"
          source={require("../assets/deliveryLogo.jpeg")}
          className="w-40 h-40 rounded-full"
        />
      </Animatable.View>

      <Animatable.View
        animation="fadeInUp"
        className="bg-white flex-1 rounded-t-2xl p-5"
      >
        <View className="w-full items-center">
          <View className="border-t-[3px] rounded w-5 border-gray-500" />
        </View>
        <Text className="text-xl mt-8">Email</Text>
        <View className="flex-row items-center">
          <Entypo.Button name="mail" backgroundColor="#fff" color="#000" />
          <TextInput
            onChangeText={(text) => setEmail(text)}
            type="email"
            placeholder="example@gmail.com"
            className="w-80 px-2 border-b h-10 mb-2"
            style={{ fontSize: "16px" }}
          />
        </View>

        <Text className="text-xl mt-8">Senha</Text>
        <View className="flex-row items-center">
          <Entypo.Button name="lock" backgroundColor="#fff" color="#000" />
          <TextInput
            onChangeText={(text) => setPassword(text)}
            type="password"
            placeholder="******"
            className="w-80 px-2 border-b h-10 mb-2"
            style={{ fontSize: "16px" }}
            secureTextEntry
          />
        </View>

        <TouchableOpacity
          onPress={handleLoginWithEmail}
          className="bg-[#00CCBB] w-full rounded-md py-4 mt-4 items-center"
        >
          <Text className="text-white font-bold items-center justify-center text-xl">
            Login
          </Text>
        </TouchableOpacity>

        <TouchableOpacity className="items-center mt-3">
          <FontAwesome.Button name="google" backgroundColor="#3b5998">
            <Text className="text-sm text-white">Entrar com Google</Text>
          </FontAwesome.Button>
        </TouchableOpacity>

        <TouchableOpacity
          className="items-center mt-3"
          onPress={() => navigation.navigate("Register")}
        >
          <Text className="text-sm text-gray-400">
            Não possui uma conta?{" "}
            <Text className="text-[#00CCBB] text-sm">Cadastre-se</Text>
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

export default Register;
