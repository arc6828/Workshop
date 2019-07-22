import * as React from 'react';
import { Text, View, StyleSheet, TextInput,Button} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      weight : "70",
      height : "170",
      bmi : 0,
      meaning : "",
    };
    //this.compute = this.compute.bind(this);
  }

  //ALWAYS USE ARROW FUNCTION FOR YOUR FUNCTION
  compute = () => {
    console.log("On Pressed !!!!!");
    let weight = parseFloat(this.state.weight);
    let height = parseFloat(this.state.height);
    let bmi = weight / (height/100 * height/100);
    this.setState({"bmi":bmi  });
  }

  render() {
    console.log("State Change !!!", this.state);
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 25, }}>Weight (kg.)</Text>
        <TextInput 
          placeholder="enter kg..." 
          value={ this.state.weight } 
          onChangeText={ (weight) => this.setState({"weight" : weight}) } />        
        <Text style={{ fontSize: 25, }}>Height (cm.)</Text>
        <TextInput 
          placeholder="enter cm..."  
          value={ this.state.height } 
          onChangeText={ (height) => this.setState({"height" : height}) } />
        <Text style={{ fontSize: 50, alignSelf : 'center' }}>
          BMI : { this.state.bmi.toFixed(2) }
        </Text>  
        <Button 
          title="Calculate"           
          onPress={ this.compute } 
          value={ this.state.bmi } />        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 18,
  },
  
});
