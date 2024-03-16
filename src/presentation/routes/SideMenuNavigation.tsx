import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { ProfileScreen } from '../screens';
import { globalColors } from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const  SideMenuNavigator = () => {
  return (
    <Drawer.Navigator 
        screenOptions={{
            headerShown: false,
            drawerType: 'slide',


            drawerActiveBackgroundColor: globalColors.primary,
            drawerActiveTintColor: 'white',
            drawerInactiveTintColor: globalColors.primary,
            drawerItemStyle: {
                borderRadius: 100,
                paddingHorizontal: 20
            }

        }}
    >
      <Drawer.Screen name="StackNavigator" component={ StackNavigator } />
      <Drawer.Screen name="Profile" component={ ProfileScreen } />
    </Drawer.Navigator>
  );
}