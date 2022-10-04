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
        navigation.navigate("Home");
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
    <View className="flex-1 bg-[#FFF]">
      <Animatable.View
        animation="fadeInLeft"
        className="mt-8 flex-row items-center justify-between mb-12 px-5"
      >
        <Animatable.Image
          animation="flipInY"
          source={require("../assets/deliveryLogo.jpeg")}
          className="w-24 h-24 rounded-full"
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("Register")}
          className="w-24 items-center justify-center rounded h-9 bg-[#00CCBB]"
        >
          <Text className="text-white font-bold">Cadastre-se</Text>
        </TouchableOpacity>
      </Animatable.View>

      <View className="px-7">
        <Text className="mb-5 font-bold text-3xl">Entrar</Text>
        <Text className="text-gray-500 text-sm font-medium">
          Bem-Vindo de volta!
        </Text>
        <Text className="text-gray-500 text-sm font-medium">
          Entre com sua conta para continuar
        </Text>
      </View>

      <Animatable.View animation="fadeInUp" className="bg-white flex-1 p-5">
        <View className="flex-row items-center justify-start mt-4 rounded bg-gray-100">
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

        <View className="flex-row items-center mt-6 justify-between rounded bg-gray-100">
          <View className="flex-row items-center justify-start">
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
          </View>
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

        <View className="items-center justify-center mt-4 mb-1 flex-row">
          <View className="h-[1px] w-16 bg-gray-400 mr-2" />
          <Text className="text-xs text-gray-400">Ou</Text>
          <View className="h-[1px] w-16 bg-gray-400 ml-2" />
        </View>

        <View className="items-center flex-row justify-evenly">
          <TouchableOpacity className="items-center mt-3">
            <FontAwesome.Button name="google" backgroundColor="#3b5998">
              <Text className="text-sm text-white">
                Entrar com <Text className="font-bold">Google</Text>
              </Text>
            </FontAwesome.Button>
          </TouchableOpacity>

          <TouchableOpacity className="items-center mt-3">
            <FontAwesome.Button name="apple" backgroundColor="#44444c">
              <Text className="text-sm text-white">
                Entrar com <Text className="font-bold">Apple ID</Text>
              </Text>
            </FontAwesome.Button>
          </TouchableOpacity>
        </View>
      </Animatable.View>

      <View className="flex-1 bg-white px-3 -mt-7 justify-center items-center">
        <View className="mt-3">
          <Text className="text-xs text-gray-400 text-center">
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
