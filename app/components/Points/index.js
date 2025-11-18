import styles from './style';
import { Image, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
export default function Points() {

    return (
        <TouchableOpacity>
            <LinearGradient
                colors={["#FEFEFB", "#F3F3F3"]}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                style={[styles.container]}>

                <Image style={styles.image} source={require('../../assets/images/icons/moeda.png')} />
                <Text style={styles.textPoints}>15990</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
};

