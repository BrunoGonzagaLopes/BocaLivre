import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    ContainerCard: {
        marginLeft: '1%',
        marginRight: '1%',
        marginVertical: 10,
    },
    InfoCard: {
        width: '100%',
        height: 120,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.1,
        shadowRadius: 12,
        elevation: 4,
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    ImageCupom: {
        width: 50,
        height: 50,
        margin: 10,
        transform: [{ rotate: '45deg' }]
    },
    ContainerTextInfoCard: {
        flexDirection: 'column',
        flex: 1,
        marginLeft: 10,
        maxWidth: 195,
        justifyContent: 'center',
    },
    Value: {
        textAlign: 'left',
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 16,

        color: '#595959',
    },
    Info: {
        textAlign: 'left',
        fontFamily: 'Roboto',
        fontSize: 10,
        color: '#595959',
        maxWidth: 195,
        marginTop: 5
    },
    ContainerInfoBuy: {
        width: 100,
        alignContent: 'right',
    },
    TextValidity: {
        position: 'relative',
        top: -20,
        textAlign: 'right',
        color:'#7c7c7c',
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 14,
    },
    TextCode: {
        position: 'relative',
        top: 20,
        textAlign: 'center',
        color: '#FCC419',
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 12,
        padding:2,
        borderWidth:1,
        borderColor:'#FCC419',
        borderRadius:50
    }
});
