import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
        marginTop:20
    },
    ContainerCard: {
        marginLeft: '5%',
        marginRight: '5%',
        marginVertical: 6,
    },
    cardInfo: {
        width: '100%',
        height: 45,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.1,
        shadowRadius: 12,
        elevation: 4,
        flexDirection: 'row',
        alignItems: 'center',
    },
   iconStyles:{
    width:25,
    height:25,
    marginLeft: 30,
    marginRight:20
   }
})
