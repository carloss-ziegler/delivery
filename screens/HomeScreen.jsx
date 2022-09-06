import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  AdjustmentsIcon,
  ChevronDownIcon,
  ClockIcon,
  LocationMarkerIcon,
  PencilIcon,
  SearchIcon,
  TrashIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "../sanity";
import { UserIcon } from "react-native-heroicons/outline";
import Modal from "react-native-modal";
import slides from "../helper/slides";

const HomeScreen = () => {
  const [active, setActive] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == 'featured'] {
        ...,
        restaurants[]->{
          ...,
          dishes[]->
        }
      }
    `
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []);

  return (
    <>
      <Modal
        onBackdropPress={toggleModal}
        className="w-full justify-end m-0"
        isVisible={isModalVisible}
      >
        <View className="w-full h-72 justify-between p-5 bg-white rounded">
          <View className="items-center justify-between flex-row">
            <TouchableOpacity
              onPress={() => setActive(!active)}
              className={`${
                active && "bg-[#00CCBB]"
              } items-center p-1 w-[100px] rounded-2xl`}
            >
              <Text
                className={`${
                  active ? "text-white font-bold" : "text-[#00CCBB]"
                } font-semibold `}
              >
                Delivery
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setActive(!active)}
              className={`${
                active && "bg-[#00CCBB]"
              } items-center p-1 w-[100px] rounded-2xl`}
            >
              <Text
                className={`${
                  active ? "text-white font-bold" : "text-[#00CCBB]"
                } font-semibold `}
              >
                Retirar
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setActive(!active)}
              className={`${
                active && "bg-[#00CCBB]"
              } items-center p-1 w-[100px] rounded-2xl`}
            >
              <Text
                className={`${
                  active ? "text-white font-bold" : "text-[#00CCBB]"
                } font-semibold `}
              >
                Cardápio
              </Text>
            </TouchableOpacity>
          </View>

          <View className="h-32 justify-evenly">
            <View className="flex-row items-center justify-between border-b border-gray-300 h-12">
              <View className="flex-row items-center">
                <LocationMarkerIcon color="gray" opacity={0.6} size={24} />
                <Text className="ml-4 text-[16px] font-medium">
                  Localização selecionada
                </Text>
              </View>
              <TouchableOpacity>
                <Text className="text-[16px] text-[#00CCBB]">Alterar</Text>
              </TouchableOpacity>
            </View>

            <View className="flex-row items-center justify-between border-b border-gray-300 h-12">
              <View className="flex-row items-center">
                <ClockIcon color="gray" opacity={0.6} size={24} />
                <Text className="ml-4 text-[16px] font-medium">Agora</Text>
              </View>
              <TouchableOpacity>
                <Text className="text-[16px] text-[#00CCBB]">Alterar</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View className="items-center bg-[#00CCBB] p-4 rounded">
            <TouchableOpacity
              className="items-center w-full"
              onPress={toggleModal}
            >
              <Text className="text-white font-bold text-[16px]">
                Confirmar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <SafeAreaView className="bg-white pt-5">
        <View
          onPress={toggleModal}
          className="flex-row pb-3 items-center mx-4 space-x-2"
        >
          <Image
            source={require("../assets/motoboy.png")}
            className="h-9 w-9 bg-gray-300 p-4 rounded-full"
          />

          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">Peça Agora!</Text>
            <TouchableOpacity onPress={toggleModal}>
              <Text className="font-bold text-xl">
                Localização Atual
                <ChevronDownIcon size={20} color="#00CCBB" />
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("User")}
            className="shadow-lg bg-[#E4E4E4] p-2 rounded-full"
          >
            <UserIcon size={24} color="#00CCBB" />
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center space-x-2 pb-2 mx-2">
          <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3 rounded">
            <SearchIcon color="gray" size={20} />
            <TextInput
              placeholder="Restaurantes e pratos"
              keyboardType="default"
            />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Filter")}>
            <AdjustmentsIcon color="#00CCBB" />
          </TouchableOpacity>
        </View>
        <ScrollView
          className="bg-gray-100"
          contentContainerStyle={{
            paddingBottom: 100,
          }}
        >
          <Categories />

          <ScrollView horizontal className="w-full shadow p-4">
            <View className="flex-row">
              <Image
                source={require("../assets/deliverooAd.jpg")}
                className="w-80 h-44 bg-white shadow rounded mr-3"
              />
              <Image
                source={require("../assets/deliverooAd2.jpg")}
                className="w-80 mr-3 bg-white h-44 shadow rounded"
              />
              <Image
                source={require("../assets/deliverooAd3.webp")}
                className="w-80 h-44 bg-white shadow rounded"
              />
            </View>
          </ScrollView>

          {featuredCategories?.map((category) => (
            <FeaturedRow
              key={category._id}
              id={category._id}
              title={category.name}
              description={category.short_desc}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;