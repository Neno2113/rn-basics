import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { RootStackParams } from '../../routes/StackNavigator';
import { globalStyles } from '../../theme/appTheme';
import { useEffect } from 'react';




export const ProductScreen = () => {

    const {id, name } = useRoute<RouteProp<RootStackParams, 'Product'>>().params;
    const navigation = useNavigation();

    
    useEffect(() => {
        navigation.setOptions({
            title: name
        })
  
    }, [])
    

    return (
        <View style={ globalStyles.container }>
            <Text>ProductScreen</Text>

            <Text style={{
                fontSize: 20,
                textAlign: 'center',
                marginTop: 20
            }}>
                { id} - { name }
            </Text>
        </View>
    )
}
