import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    ContainerCard: {
        marginLeft: '5%',
        marginRight: '5%',
        marginVertical: 10,
        
    },
    InfoCard: {
        width: '100%',
        height: 130,
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
    ImageCard: {
        width:'25%',
        height: '90%',
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
        top:12
    },
    Textname: {
        color: '#363636',
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 20,
        marginBottom: 4,
        position: 'relative',
        
    },
    DescriptionCard: {
        fontFamily: 'Roboto',
        color: '#a1a1a1',
        fontSize: 11,
        fontWeight: 'bold',
        position: 'relative',
        maxWidth:'90%'
    },

    });
