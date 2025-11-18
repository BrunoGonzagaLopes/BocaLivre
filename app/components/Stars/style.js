import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    Container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    TextStar: {
        fontFamily: 'Roboto',
        fontWeight: '700',
        color: "#5d5d5d",
        marginLeft: 5,
        fontSize: 16
    },
    Star: {
        width: 15,
        height: 15,
    }
});
