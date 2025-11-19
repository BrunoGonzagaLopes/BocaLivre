import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 10,
        backgroundColor:'#fff',
        paddingHorizontal:10,
        paddingVertical:3,
        margin:5,
        alignContent:'center',
        borderRadius:10
    },
    image: {
        width: 24,
        height: 24
    },
    textPoints: {
        fontSize: 24,
        fontWeight: 700,
        fontFamily: 'Roboto'
    }
})