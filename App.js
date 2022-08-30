import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { TailwindProvider } from "tailwindcss-react-native";
import BasketScreen from "./screens/BasketScreen";
import HomeScreen from "./screens/HomeScreen";
import PreparingOrder from "./screens/PreparingOrder";
import RestaurantScreen from "./screens/RestaurantScreen";
import DeliveryScreen from "./screens/DeliveryScreen";
import { store } from "./store";
import LoginScreen from "./screens/LoginScreen";
import Register from "./screens/Register";
import RegisterScreen from "./screens/RegisterScreen";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";
import UserScreen from "./screens/UserScreen";
import { useEffect, useState } from "react";
import Notification from "./screens/Notification";
import Payment from "./screens/Payment";
import Coupons from "./screens/Coupons";

const Stack = createNativeStackNavigator();

export default function App() {
  const [userCredentials, setUserCredentials] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem("token").then((response) => {
      setUserCredentials(response);
    });
  }, [userCredentials]);

  return (
    <>
      <NavigationContainer>
        <Provider store={store}>
          <TailwindProvider>
            <StatusBar style="dark" />
            <Stack.Navigator>
              {userCredentials ? (
                <Stack.Group>
                  <Stack.Screen name="Home" component={HomeScreen} />
                  <Stack.Screen
                    name="Restaurant"
                    component={RestaurantScreen}
                  />
                  <Stack.Screen
                    name="Basket"
                    component={BasketScreen}
                    options={{ presentation: "modal", headerShown: false }}
                  />

                  <Stack.Screen
                    options={{ title: "Notificações", headerShown: false }}
                    name="Notification"
                    component={Notification}
                  />
                  <Stack.Screen
                    options={{ title: "PAGAMENTOS", headerShown: false }}
                    name="Payment"
                    component={Payment}
                  />
                  <Stack.Screen
                    options={{ title: "Coupons", headerShown: false }}
                    name="Coupons"
                    component={Coupons}
                  />
                  <Stack.Screen
                    name="User"
                    component={UserScreen}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="Preparing"
                    component={PreparingOrder}
                    options={{
                      presentation: "fullScreenModal",
                      headerShown: false,
                    }}
                  />
                  <Stack.Screen
                    name="Delivery"
                    component={DeliveryScreen}
                    options={{
                      presentation: "fullScreenModal",
                      headerShown: false,
                    }}
                  />
                </Stack.Group>
              ) : (
                <Stack.Group>
                  <Stack.Screen
                    name="Welcome"
                    component={LoginScreen}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="Login"
                    component={Register}
                    options={{ presentation: "modal", headerShown: false }}
                  />
                  <Stack.Screen
                    name="Register"
                    component={RegisterScreen}
                    options={{ presentation: "modal", headerShown: false }}
                  />
                </Stack.Group>
              )}
            </Stack.Navigator>
          </TailwindProvider>
        </Provider>
      </NavigationContainer>
      <Toast />
    </>
  );
}
