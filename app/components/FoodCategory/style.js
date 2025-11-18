import { StyleSheet } from "react-native";

export default StyleSheet.create({
  containerCategory:{
    flexDirection:"row",
    justifyContent: 'space-evenly',
    marginTop:20
    },
    categoryBoll:{
    width:60,
    height:60,
    textAlign:'center',
    marginHorizontal:10
  },
  description:{
    marginTop:10,
    color:'#939393',
    textAlign:'center',
    fontFamily: 'Roboto',
    fontWeight: '700',      
    fontStyle: 'normal',  
    fontSize: 12,
    lineHeight: 16,         
    letterSpacing: 0,
  },
  iconBoll:{
    width: '65%',
    height: '65%',
    margin: 'auto'
  }
})