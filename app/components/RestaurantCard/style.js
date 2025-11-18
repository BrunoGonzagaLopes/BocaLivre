import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default StyleSheet.create({
    ContainerCard: {
        marginLeft: '5%',
        marginRight: '5%',
        marginVertical: 10,
    },
    RestaurantInfoCard: {
        width: '100%',
        height: 120,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 4, 
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
    },
    RestaurantImageCard: {
        width: '25%',
        height: '100%',
        borderRadius: 20,
    },
    ContainerTextInfoCard: {
        width: '70%',
        justifyContent: 'center',
        padding: 10,
        paddingLeft: 20,
    },
    ValueInfo: {
        textAlign: 'right',
        fontFamily: 'Roboto',
        fontWeight: '700',
        width: '100%',
        color: '#939393',
        right: -16,
        top: -2
    },
    Textname: {
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: RFValue(16),
        position: 'relative',
    },
    TextDistance: {
        fontFamily: 'Roboto',
        fontWeight: '700',
        color: "#868686",
        fontSize: RFValue(14),
        marginLeft: "10",
        position: 'relative',
    },
    Distance: {
        flexDirection: 'row',
        fontFamily: 'Roboto',
        marginVertical: 4,
        alignItems:'center',
    },
    DescriptionCard: {
        fontFamily: 'Roboto',
        color: '#a1a1a1',
        fontSize: 14,
        fontWeight: 'bold',
        position: 'relative',
        minHeight: 30,
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
