import { View, Text } from 'react-native';
import { globalStyles } from '../../theme/appTheme';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { StackActions, useNavigation } from '@react-navigation/native';

export const SettingScreen = () => {

  const navigation = useNavigation();

  return (
    <View style={ globalStyles.container }> 
       <Text style={{ marginBottom: 10 }}>Setting Screen</Text> 


       <PrimaryButton 
          label='Regresar'
          onPress={ () => navigation.goBack() }
       />

      <PrimaryButton 
          label='Regresar al home'
          onPress={ () =>  navigation.dispatch( StackActions.popToTop() )}
       />
    </View>
  )
}
