import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, ProductScreen, ProductsScreen, SettingScreen } from '../screens';



export type RootStackParams = {
    Home: undefined,
    Products: undefined,
    Product: { id: number, name: string },
    Settings: undefined,
}

const Stack = createStackNavigator<RootStackParams>();


export const  StackNavigator = () =>  {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: true,
        headerStyle: {
            elevation: 0,
            shadowColor: 'transparent'
        }
    }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Settings" component={SettingScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
    </Stack.Navigator>
  );
}