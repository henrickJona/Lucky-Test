import React,{useState,useEffect, useRef} from 'react';
import {View,Text,TextInput,TouchableOpacity,Alert,Modal} from 'react-native';
import i18n from 'i18n-js';
import Loader from '../utils/index';
import LottieView from 'lottie-react-native';



const  Principal =()=>{

   
    const inputEl = useRef(null);
    const [number,setNumber] = useState(null);
    const [aguarda,setAguarda] = useState(false);
    const [attNumber,setAttNumber] = useState(0);
    const [anima,setAnima] = useState(false);

    useEffect(()=>{
       
        console.log('ta ai ',aguarda)
    
    
 
if(aguarda){
    setTimeout(() => {
        let myNumber = Math.floor(Math.random() * number)+ 1;
        console.log('ls')
        calculate(number,myNumber)
    }, 1000);
   
}else{
    console.log('tre')
}
console.log(aguarda)
},[aguarda])

useEffect(()=>{
       
    console.log('ta ai ',aguarda)



if(anima){
setTimeout(() => {
  setAnima(false)
}, 6000);

}else{
console.log('tre')
}
console.log(anima)
},[anima])

const check=()=>{
    console.log(number,'    nu')
    if(number <0){
    Alert.alert(i18n.t('alertTitle'),i18n.t('negativeWarning'))
    return
    }else if(number === null || number ===''){
        Alert.alert(i18n.t('alertTitle'),i18n.t('defatulValue'))
        return
    }else if(number == 1){
        Alert.alert(i18n.t('alertTitle'),i18n.t('negativeWarning'))
        return
    }
    setAguarda(true)

//     let myNumber = Math.floor(Math.random() * number)+ 1;
//   calculate(number,myNumber)
    }
const calculate=(number,myNumber)=>{
console.log('alou')
let i = 1
let sorteado =Math.floor(Math.random() * number)+ 1

    while(myNumber !== sorteado){
         sorteado = Math.floor(Math.random() * number)+ 1
         i++;
        // console.log(i,myNumber,sorteado)
    }
    if(i === 1){
        
        setAnima(true)
        inputEl.current.play()
    }
    
    setAttNumber(i)
   
    setAguarda(false)
    console.log(i,myNumber,sorteado)
return

}
const filter =(value)=>{
   
setNumber(value.replace(/[^0-9]/g, ''))
}

return(<View  style={{backgroundColor:'#E9E9EB',borderRadius:10,height:500,alignSelf:'center',width:'90%'}}>
    
    <Modal transparent={true} visible={anima} onRequestClose={() => {console.log('close modal')}}>
        
<LottieView
 ref={inputEl}
 style={{
   width: '100%',
   height: '100%',
   backgroundColor: '#00000040',
 }}
 source={require('../assets/confetti.json')}
/>
        </Modal>

  
  <View style={{flexDirection:'column',borderWidth:1,borderColor:'gray',borderRadius:10,flex:1,justifyContent:'center'}}>
  <Loader loading={aguarda} />
      <View style={{alignItems:'center',margin:45}}>
      <Text style={{color:'#42506B',fontSize:22}}>{i18n.t('title')}</Text>
      </View>
     <View style={{alignItems:'center',margin:45}}>
     <TextInput value = {number} maxLength={8} onChangeText={num =>filter(num)} keyboardType='numeric' style={{borderWidth:1,padding:12,borderRadius:5,borderColor:'#B7BDC0',}} placeholder={i18n.t('placeholderText')}/>
         
   
     </View>
      <View style={{alignItems:'center',margin:45}}>
      <TouchableOpacity key={4} onPress={() =>check()} style={{backgroundColor:'#EF4B4C',paddingHorizontal:15,borderRadius:9, width:120,paddingVertical:10,alignItems:'center',elevation:5}}>
          <Text style={{color:'#E9E9EB'}}>{i18n.t('buttonText')}</Text>
      </TouchableOpacity>
      </View>
      <Text style={{textAlign:'center'}}>{`${i18n.t('finalMessage')}: ${attNumber}`}</Text>
      
  </View>
   
   
   
</View>)
}

export default Principal;