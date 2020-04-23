//React component using class
import React, {useState, Component} from 'react';
import {View, Button, Text} from 'react-native';

export default class YourApp extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      message: 'Hello Word',
    };
  }
  render(){
    return(
      <View style={{flex: 1,justifyContent:'center', alignItems:'center', backgroundColor:'green'}}>
      <Text>{this.state.count}</Text>  
      <Button title="Click to increase counter" onPress={()=>this.setState({count: this.state.count + 1})}>
      </Button>
      </View>

    );
  }
}


////React component using function
import React, {useState, useEffect} from 'react';
import {View, Button, Text} from 'react-native';

export default function YourApp(){
  const [count, setCount] = useState(0)
  return(
  <View style={{flex: 1, justifyContent: 'center', alignItems:'center', backgroundColor:'green'}}>
  <Text>{count}</Text>
  <Button title="Click to change count" onPress={()=> setCount(count + 1)}>
   </Button>   
  </View>
  );
}

/////// React life cycle//////////////

import React, {useState, Component} from 'react';
import {View, Button, Text} from 'react-native';

export default class YourApp extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      message: 'Hello Word',
    };
  }
  static getDerivedStateFromProps(props, state)
  {
    return null
  }
  render(){
    return(
      <View style={{flex: 1,justifyContent:'center', alignItems:'center', backgroundColor:'green'}}>
      <Text>{this.state.count}</Text>  
      <Button title="Click to increase counter" onPress={()=>this.setState({count: this.state.count + 1})}>
      </Button>
      <Text>{this.state.message}</Text>
      </View>

    );
  }
  componentDidMount(){
    fetch('https://samples.openweathermap.org/data/2.5/forecast?zip=122001&appid=b6907d289e10d714a6e88b30761fae22')
    .then(response => response.json())
    .then(data=>this.setState({message: data.cod}));
  }
}

///Function to use effect hooks
import React, {useState, useEffect} from 'react';
import {View, Button, Text} from 'react-native';

export default function YourApp(){
  const [count, setCount] = useState(0)
  useEffect(()=>{
   setCount(100)  
  }
  );

  return(
  <View style={{flex: 1, justifyContent: 'center', alignItems:'center', backgroundColor:'green'}}>
  <Text>{count}</Text>
  <Button title="Click to change count of clicks" onPress={()=> setCount(count + 1)}>
   </Button>   
  </View>
  );
}


///core componants and native componants using function
import React from 'react';
import {View, ScrollView, Text, TextInput, Image} from 'react-native';

export default function(){
  return(
  <ScrollView>
  <Text>Some text</Text>  
  <View>
  <Text>Some more text</Text>
  <Image source={{uri:'https://reactnative.dev/docs/assets/p_cat2.png'}} style={{width: 100, height: 100}}></Image>  
  </View>
  <TextInput style={{height: 40, borderColor: 'grey', borderWidth: 1}} defaultValue = "You can write here"></TextInput>
  </ScrollView>
  );
}

/////Cat example using class
import React, { Component } from 'react';
import {Text} from 'react-native';

export default class Cat extends Component
{
  render(){
    return(
    <Text>Hello, I am your cat</Text>
    );
  }
}

///props and custom componant use 
import React from 'react';
import {Text, TextInput, View} from 'react-native';
import CustomComponant from './CustomComponant.js' ;

 export default function cafe(){
  return(
   <View>
   <Text>Hi Welcome!</Text>
   <CustomComponant age= "27"></CustomComponant>
   <CustomComponant age="29"></CustomComponant>
   </View>
  );
}


///////////scroll view with custom componant
import React,{useState} from 'react';
import {Text, TextInput, View, ScrollView, Image} from 'react-native';
import CustomComponant from './CustomComponant.js' ;
import CustomWithClass from './CustomWithClass.js';

 export default function cafe(){
  const [text, setText] = useState('');
  const logo = {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    height: 64,
    width: 64,
  };   
  return(
   <View style={{padding: 50}}>
   <Text>Hi Welcome!</Text>
   <CustomWithClass age= "27" food= "rajma"></CustomWithClass>
   <CustomWithClass age="29" food= "chawal"></CustomWithClass>
   <TextInput style={{height: 40}} placeholder="Type here to translate!" onChangeText={text=>setText(text)} defaultValue={text}></TextInput>
   <Text style={{padding: 20, fontSize: 42}}>  
   </Text>
   <ScrollView>
   <Text style={{fontSize: 96}}> Scroll me plz </Text>     
   <Image source={logo}></Image>
   <Image source={logo}></Image>
   <Image source={logo}></Image>
   <Image source={logo}></Image>
   <Image source={logo}></Image>
   <Text style={{fontSize: 96}}> Scroll me plz </Text>     
   <Image source={logo}></Image>
   <Image source={logo}></Image>
   <Image source={logo}></Image>
   <Image source={logo}></Image>
   <Image source={logo}></Image>
   <Text style={{fontSize: 96}}> Scroll me plz </Text>     
   <Image source={logo}></Image>
   <Image source={logo}></Image>
   <Image source={logo}></Image>
   <Image source={logo}></Image>
   <Image source={logo}></Image>
   </ScrollView>
   </View>
  );
 }


 ///////flat list example///////
 import React, { Component } from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

export default class FlatExample extends Component{
  render(){
    return(
      <View style={styles.container}>
      <FlatList data={[{key: 'dheeraj'},{key: 'hanuman'},{key: 'shyam'},{key: 'ram'}]} renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}></FlatList>
      </View>

    );
  }
}


const styles = StyleSheet.create(
  {
    container: {
     flex: 1,
     paddingTop: 22
    },
    item: {
    padding: 10,
    fontSize: 18,
    height : 44,
    },
  }
)

//////Image background example
import React, { Component } from 'react';
import {FlatList, StyleSheet, Text, View, Image, ImageBackground} from 'react-native';

var img = 'demo'
export default class FlatExample extends Component{
 
  render(){
    return(
      <View style={styles.container}>
      <ImageBackground source={require('./' + img +'.png')} style={{width:'100%', height:'100%'}}>
      <Text> Image background example new </Text>  
      </ImageBackground>
      </View>

    );
  }
}


const styles = StyleSheet.create(
  {
    container: {
     flex: 1,
     paddingTop: 22
    },
    item: {
    padding: 10,
    fontSize: 20,
    },
  }
)