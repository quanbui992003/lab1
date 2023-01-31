import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View,ScrollView, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
import ProductList from './.expo/abc';
import React,{useState} from 'react'; 

export default function App() {
  
let name='Bui Hong Quan'
let MSV='ph20506'
const [isShow, setIsShow] = useState(false);
const [name1, setName] = useState("");
const [mota, setmota] = useState("");
const [linkmo, setlink ]= useState("");
const [data, setData] = useState([
  {
   name2: "abc",
   mota2:"aaaa",
   anh:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSj1EFvOtXBps1H0eMjmCp3lr1lOg0lFBOJQ&usqp=CAU"
  }
]);
  return (
         <View style={styles.container}>

          <Text style={styles.Text}>Họ và tên:{name}</Text>
          <Text style={styles.Text}>Msv:{MSV}</Text>
          <Image style={{width:50,height:50,}} source={{uri:"https://ict-imgs.vgcloud.vn/2020/09/01/19/huong-dan-tao-facebook-avatar.jpg"}}/>
         
          <Button title='click'
          onPress={()=>{
             setIsShow(!isShow)
          }}/>
       {
        isShow?(
          <>
            <TextInput 
            placeholder='Ten'
            onChangeText={(text)=>
              setName(text)} style={styles.input}/>
              <TextInput 
            placeholder='mota'
            onChangeText={(text)=>
              setmota(text)} style={styles.input}/>
                  <TextInput 
            placeholder='link'
            onChangeText={(text)=>
              setlink(text)} style={styles.input}/>
             <View style={{flexDirection:"row"}}>
                <TouchableOpacity 
                onPress={()=>{
                  setIsShow(false)
                }}
                style={{backgroundColor:"blue",width:80, height:40,justifyContent:"center",
              alignItems:"center",borderRadius:5}}>
              <Text style={{color:"white", fontSize:25,}}>huy</Text>

            </TouchableOpacity>

            <TouchableOpacity style={{backgroundColor:"blue",width:80, height:40,justifyContent:"center",
              alignItems:"center",borderRadius:5,marginLeft:10}}>
              <Text style={{color:"white", fontSize:25,}}>luu</Text>
             
            </TouchableOpacity>
             </View>
          
          </>
         
        ):null
       }
<FlatList
style={{
  flex:1,

}}
data={data}
keyExtractor={(item)=>item.name2}
renderItem={({item})=>{
  return(
    <View>
     
    <Image style={{width:50,height:50,}} source={{uri:item.anh}}/>
    <Text>{item.name2}</Text>
    <Text>{item.mota2}</Text>
    </View>
  )
}}
/>
    </View>
  )
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20,
    backgroundColor: '#fff',
   marginTop:20,
  },
  input:{
    width:"100%",
    borderWidth:1,
    fontSize:20,
    marginVertical:10
  }
});
