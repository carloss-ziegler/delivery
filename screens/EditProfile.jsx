import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import EditProfileOption from "../components/EditProfileOption";

const EditProfile = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View className="flex-row items-center justify-between p-4">
        <TouchableOpacity onPress={navigation.goBack}>
          <ChevronLeftIcon size={28} color="#00CCBB" />
        </TouchableOpacity>
        <Text className="font-medium -ml-6">EDITAR PERFIL</Text>
        <View></View>
      </View>

      <View className="p-3 mt-2 h-20 w-full justify-center">
        <TouchableOpacity className="border border-gray-300 rounded h-[74px] w-96 justify-center px-3">
          <View className="w-full h-12 flex-row items-center justify-between">
            <View className="flex-row items-center ">
              <Image
                source={require("../assets/svgIcon.png")}
                className="w-10 h-10 rounded"
              />
              <View className="ml-3">
                <Text className="font-semibold">Conta mais segura</Text>
                <Text className="font-medium text-xs">
                  Faça a verificação do seu celular
                </Text>
              </View>
            </View>
            <ChevronRightIcon size={20} color="#00CCBB" />
          </View>
        </TouchableOpacity>
      </View>

      <View className="mt-7 flex-1">
        <EditProfileOption
          title="Informações pessoais"
          subtitle="Nome completo e CPF"
          route=""
        />
        <EditProfileOption
          title="Dados de contato"
          subtitle="E-mail e telefone de contato"
          route=""
        />
        <EditProfileOption
          title="Credenciais"
          subtitle="Meios de acesso a sua conta"
          route=""
        />
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;
