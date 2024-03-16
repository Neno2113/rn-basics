import { Pressable, Text, View } from 'react-native'
import { globalColors, globalStyles } from '../../theme/appTheme'
import { DrawerActions, NavigationProp, useNavigation } from '@react-navigation/native'
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { RootStackParams } from '../../routes/StackNavigator';
import { useEffect } from 'react';




export const HomeScreen = () => {


  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  useEffect(() => {
    navigation.setOptions({
      headerLeft:  () => (
        <Pressable 
          onPress={ () => navigation.dispatch( DrawerActions.toggleDrawer )}
        >
          <Text>Menu</Text>
        </Pressable>
      )
    })
  }, [])
  



  return (
    <View style={ globalStyles.container }>
      
 
      <PrimaryButton 
        label='Home'
        onPress={ () => navigation.navigate('Home')}
        color={ globalColors.primary}
      />

      <PrimaryButton 
        label='Products'
        onPress={ () => navigation.navigate('Products')}
        color={ globalColors.primary}
      />

      <PrimaryButton 
        label='Settings'
        onPress={ () => navigation.navigate('Settings')}
        color={ globalColors.primary}
      />
    </View>
  )
}
