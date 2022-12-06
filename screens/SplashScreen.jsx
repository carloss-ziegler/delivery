import { View, Text } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import { useEffect } from "react";
import { useRef } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const SplashScreen = ({ navigation }) => {
  const animation = useRef(null);

  useEffect(() => {
    animation.current?.play();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user.displayName);
        setTimeout(() => {
          navigation.replace("Initial");
        }, 3500);
      } else {
        console.log("nenhum usuário");
        setTimeout(() => {
          navigation.replace("Welcome");
        }, 3500);
      }
    });
  }, [navigation]);

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <LottieView
        ref={animation}
        autoPlay
        loop
        source={require("../assets/splashScreen.json")}
        style={{ width: "100%", height: 300 }}
      />
    </View>
  );
};

export default SplashScreen;
