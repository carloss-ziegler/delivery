import { View, Text, TouchableOpacity, TextInput, Alert } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase";
import { useState } from "react";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
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
        <View className="flex-row items-center justify-center mt-8 bg-gray-100">
          <View className="opacity-50">
            <Entypo.Button
              name="mail"
              backgroundColor="rgb(243, 244, 246)"
              color="#000"
            />
          </View>
          <TextInput
            onChangeText={(text) => setEmail(text)}
            type="email"
            placeholder="example@gmail.com"
            className="w-80 h-12"
            style={{ fontSize: "16px" }}
          />
        </View>

        <View className="flex-row items-center mt-6 justify-between bg-gray-100">
          <View className="opacity-50">
            <Entypo.Button
              name="lock"
              backgroundColor="rgb(243, 244, 246)"
              color="#000"
            />
          </View>
          <TextInput
            onChangeText={(text) => setPassword(text)}
            type="password"
            placeholder="******"
            className="w-80 h-12"
            style={{ fontSize: "16px" }}
            secureTextEntry={hidePassword}
          />
          <TouchableOpacity
            disabled={!password}
            onPress={() => setHidePassword(!hidePassword)}
            className={`-ml-10 px-2 ${!password && "opacity-30"}`}
          >
            {hidePassword ? (
              <Ionicons name="eye" color="#000" size={25} />
            ) : (
              <Ionicons name="eye-off" color="#000" size={25} />
            )}
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={handleLoginWithEmail}
          className="bg-[#00CCBB] w-full rounded-md py-4 mt-6 items-center"
        >
          <Text className="text-white font-bold items-center justify-center text-xl">
            Login
          </Text>
        </TouchableOpacity>

        <TouchableOpacity className="items-center mt-3">
          <FontAwesome.Button name="google" backgroundColor="#3b5998">
            <Text className="text-sm text-white">
              Entrar com <Text className="font-bold">Google</Text>
            </Text>
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

      <View className="flex-1 bg-white px-3 -mt-8 shadow-sm">
        <View className="mt-3">
          <Text className="text-xs text-gray-400">
            {"  "}
            Ao continuar você concorda com nossos{" "}
            <Text className="text-[#00CCBB]">Termos & Privacidade.</Text> Nós
            usamos seus dados para oferecer a você uma melhor{" "}
            <Text className="text-[#00CCBB]">experiência</Text> com o nosso
            sistema.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Register;
