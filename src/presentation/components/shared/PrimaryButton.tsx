import { Pressable, Text, View } from 'react-native';
import { globalColors, globalStyles } from '../../theme/appTheme';
import { useNavigation } from '@react-navigation/native';


interface Props {
    label: string;
    color?: string;
    onPress: () => void;
}

export const PrimaryButton = ({ label, color = globalColors.primary, onPress }: Props) => {

    const navigation = useNavigation()

    return (
        <Pressable 
            style={ globalStyles.primaryButton }
            onPress={ onPress }
        >
            <Text style={ globalStyles.buttonText }>{ label }</Text>
    </Pressable>
    )
}
