import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import UserSettings from "../components/UserSettings";
import {
  ChatIcon,
  CreditCardIcon,
  HeartIcon,
  LocationMarkerIcon,
  TicketIcon,
} from "react-native-heroicons/outline";
import { BellIcon } from "react-native-heroicons/outline";

const UserScreen = () => {
  const navigation = useNavigation();

  return (
    <View className="">
      <View className="relative">
        <Image
          source={require("../assets/BG.jpg")}
          className="w-full h-44 bg-gray-300 p-4"
        />
      </View>
      <View className="flex items-center">
        <Image
          source={require("../assets/avatar.png")}
          className="h-24 w-24 rounded-full bg-gray-600 -mt-16 shadow-xl"
        />

        <TouchableOpacity className="bg-[#00CCBB] p-2 mt-6 rounded-xl mb-2 shadow">
          <Text className="font-bold text-lg text-white">Editar Prefil</Text>
        </TouchableOpacity>
      </View>

      <ScrollView className="rounded-tr-2xl rounded-tl-2xl h-96 bg-white">
        <TouchableOpacity>
          <UserSettings
            text="Chats"
            icon={<ChatIcon size={24} color="#00CCBB" />}
            number="9+"
            subtitle="Minhas conversas"
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.popToTop();
            navigation.navigate("Notification");
          }}
        >
          <UserSettings
            text="Notificações"
            icon={<BellIcon size={24} color="#00CCBB" />}
            number="2"
            subtitle="Minha central de notificações"
            page="Notification"
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.popToTop();
            navigation.navigate("Payment");
          }}
        >
          <UserSettings
            text="Métodos de Pagamento"
            icon={<CreditCardIcon size={24} color="#00CCBB" />}
            novo="Novo!"
            subtitle="Meus saldos e cartões"
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.popToTop();
            navigation.navigate("Coupons");
          }}
        >
          <UserSettings
            text="Cupons"
            icon={<TicketIcon size={24} color="#00CCBB" />}
            number="3"
            subtitle="Meus cupons de desconto"
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <UserSettings
            text="Favoritos"
            icon={<HeartIcon size={24} color="#00CCBB" />}
            novo="Novo!"
            subtitle="Meus locais favoritos"
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <UserSettings
            text="Endereço de Entrega"
            icon={<LocationMarkerIcon size={24} color="#00CCBB" />}
            novo="Novo!"
            subtitle="Meus endereços de entrega"
          />
        </TouchableOpacity>
      </ScrollView>
      <View className="items-center mt-4">
        <TouchableOpacity
          onPress={() => AsyncStorage.removeItem("token")}
          className="bg-red-500 rounded-3xl items-center justify-center w-20 p-3 shadow"
        >
          <Text className="font-bold text-white">Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserScreen;
