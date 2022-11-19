import { View, Text } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import { useEffect } from "react";
import { useRef } from "react";

const SplashScreen = ({ navigation }) => {
  const animation = useRef(null);

  useEffect(() => {
    animation.current?.play();
    setTimeout(() => {
      navigation.navigate("Welcome");
    }, 4000);
  }, []);

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
