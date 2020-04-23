import React, { Component } from 'react';
import {View, Button, Text} from 'react-native';

export default class CatClass extends Component
{

    constructor(props) {
        super(props);
        this.state = {
        isHungry: true,
        fullName: "dheeraj kumar takyar",
        itemId:49,
        };
    }
    showError(){
      alert('error from custom class')
    }
   static getDerivedStateFromProps(props, state)
   {      
   if (props.route.params?.itemId){
   const {itemId} = props.route.params.itemId;
   return props;
   }else
   {
   return null;
   }
   }


    render(){
        return(
       <View> 
       <Text>My name is {this.state.fullName} </Text>
       <Text>My age is {this.props.age} </Text>
        <Text>I like food {this.props.food}</Text>   
        <Text>{this.props.route.params?.itemId}</Text>
        <Button title="Go To Details" onPress={()=> this.props.navigation.navigate('Detail',{itemId: 86, otherParam: 'anything you want here',})}></Button>
       </View>
        );
    }
}


