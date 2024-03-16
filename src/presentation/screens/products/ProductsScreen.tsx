import { View, Text } from 'react-native';
import { globalStyles } from '../../theme/appTheme';
import { FlatList } from 'react-native-gesture-handler';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { type NavigationProp, useNavigation } from '@react-navigation/native';
import { type RootStackParams } from '../../routes/StackNavigator';



const products = [
  {id: 1, name: 'Producto 1'},
  {id: 2, name: 'Producto 2'},
  {id: 3, name: 'Producto 3'},
  {id: 4, name: 'Producto 4'},
  {id: 5, name: 'Producto 5'},
  {id: 6, name: 'Producto 6'},
]

export const ProductsScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={ globalStyles.container}>
      <Text style={{ fontSize: 30, marginBottom: 10}}>Productos</Text>
      <FlatList 
        data={ products }
        renderItem={ ( data ) => (
          <PrimaryButton 
            onPress={ () => navigation.navigate('Product', { id: data.item.id, name: data.item.name }) }
            label={ data.item.name }
          />
        )}
      /> 

      <Text style={{ fontSize: 30, marginBottom: 10}}>Ajustes</Text>

      <PrimaryButton 
        onPress={ () =>  navigation.navigate('Settings')}
        label='Ir a ajustes'
      />
    </View>
  )
}
