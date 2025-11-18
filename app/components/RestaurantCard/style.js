import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    ContainerCard: {
        marginLeft: '5%',
        marginRight: '5%',
        marginVertical: 10,
    },
    RestaurantInfoCard: {
        width: '100%',
        height: 150,
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
    RestaurantImageCard: {
        width: '40%',
        height: '100%',
        borderRadius: 20,
    },
    ContainerTextInfoCard: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center',
    },
    ValueInfo: {
        textAlign: 'right',
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 14,
        color: '#939393',
        position: 'relative',
        top: -10
    },
    Textname: {
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 16,
        marginBottom: 4,
        position: 'relative',
        bottom: 10
    },
    Distance: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 12,
        color: '#a1a1a1',
        position: 'relative',
        bottom: 10
    },
    DescriptionCard: {
        fontFamily: 'Roboto',
        color: '#a1a1a1',
        fontSize: 10,
        fontWeight: 'bold',
        position: 'relative',
        bottom: 10
    },
    textChamada: {
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontStyle: 'normal',
        lineHeight: 14,
        letterSpacing: 0,
        fontSize: 20,
        marginTop: 20,
        marginLeft: 10,
        color: '#383838',
        padding: 20
    }
    });
