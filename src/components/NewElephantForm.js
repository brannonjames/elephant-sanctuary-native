import React, { Component } from 'react';
import { View, TextInput, Picker } from 'react-native';
import { getHumans } from '../actions';
import { connect } from 'react-redux';
import Header from './Header';

const styles = {
  formStyle: {
    marginTop: 16
  },
  inputStyle: {
    borderColor: 'grey',
    flex: 1,
    fontSize: 26
  },
  inputContainerStyle: {
    height: 54,
    alignSelf: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    margin: 18,
    borderColor: 'grey',
    borderRadius: 6,
    paddingLeft: 14,
  }
}

class NewElephantForm extends Component {

  state = {
    newElephant: {
      url: '',
      thumbnail: '',
      reddit_id: '',
      name: '',
      happiness_level: '',
      owner: 0
    }
  }

  componentWillMount = () => {
    this.props.getHumans();
  }

  handleChange = name => text =>  {
    this.setState({ [name]: text });
}

  renderPickerItems = () => {
    return this.props.humans.map(human => (
      <Picker.Item 
        key={human.id}
        label={human.name}
        value={human.id}
      />
    ))
  }

  render(){
    return (
      <View style={{ flex: 1, backgroundColor: '#dbf9ee' }}>
        <Header title="New Elephant" />
        <View style={styles.formStyle}>

          <View style={styles.inputContainerStyle}>
            <TextInput 
              style={styles.inputStyle}
              placeholder="Name"
              onChangeText={this.handleChange('name')}
              value={this.state.name}
            />
          </View>

          <View style={styles.inputContainerStyle}>
            <TextInput 
              name="happiness_level"
              style={styles.inputStyle}
              keyboardType='numeric'
              placeholder="Happiness Level"
            />
          </View>

          <View style={{ margin: 16 }}>
            <Picker style={{ flex: 1 }}>
              { this.renderPickerItems() }
            </Picker>
          </View>

        </View>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    humans: state.humans
  }
}

export default connect(mapStateToProps, { getHumans })(NewElephantForm);