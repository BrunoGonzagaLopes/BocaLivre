import styles from './style';
import { Image, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {useEffect, useState} from "react";
import {getPontuacao} from "../../services/BeneficiosSevice";

export default function Points() {
    const [pontos, setPontos] = useState(0);

    useEffect(() => {
        const loadPontos = async () => {
            const response = await getPontuacao();
            console.log(response);
            setPontos(response);
        }
        loadPontos();
    })

    return (
        <TouchableOpacity>
            <LinearGradient
                colors={["#FEFEFB", "#F3F3F3"]}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                style={[styles.container]}>

                <Image style={styles.image} source={require('../../assets/images/icons/moeda.png')} />
                <Text style={styles.textPoints}>{pontos}</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
};

