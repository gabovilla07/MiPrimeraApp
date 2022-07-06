const URL ='';
const END_POINT ='';
import { Alert } from "react-native";
 
class API{
    async getData(){
        const query =await fetch(URL)
        const data = await query.json()
        return data
    }
    registerData(){
        fetch('${END_POINT}doorcount.php',{
            method: 'POST',
            body: JSON.stringify({
                pquantity: quantity
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
        .catch(error =>console.error('Error: '.error))
        .then(response =>{
            if(response.status === 1){
            Alert.alert('Cantidad ')
        }else()=>{
            Alert.alert('Error 404')
        }
        })
    }

}