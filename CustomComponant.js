import React,{useState} from 'react';
import {Text, TextInput, View, Button} from 'react-native';

export default function Cat(props)
{
 function getFullName(first, second, third){
        return first + " " + second + " " + third;
      }
  const [isHungry, setIsHungry] = useState(true)  
  const {itemId} = props.route.params;
  const {otherParam} = props.route.params;
  
  return(
  <View>  
  <Text>Hello, I am {getFullName("dheeraj", "kumar", "takyar1")}.</Text>
  <Text>Age of dheeraj is {props.age}</Text>
  <Text>I am {isHungry ? "hungry" : "full"}</Text>
  <Text>I want to eat {props.food}</Text>
  <Button onPress={()=> {setIsHungry(false)}} disabled={!isHungry} title={isHungry ? "Pour me some food" : "Thank you!"} ></Button>
  <Text>{itemId}</Text>
  <Text>{otherParam}</Text>
  <Button title="Go To Home" onPress={()=> props.navigation.navigate('HOME',{itemId: 87, otherParam: 'anything you want here',})}></Button>
  </View>
  );
}