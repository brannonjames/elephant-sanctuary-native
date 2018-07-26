import React from 'react';
import { FlatList, View, Button, Modal, Text } from 'react-native';
import WildElephantCard from './WildElephantCard';
import { connect } from 'react-redux';
import { getWildElephants } from '../actions';
import NewElephantForm from './NewElephantForm';

class HumansList extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Elephants',
      headerRight: <Button title="Sanctuary" onPress={() => navigation.navigate('Sanctuary')} />
    }
  };

  state = { showModal: false }


  async componentWillMount(){
    this.props.getWildElephants();
  }


  render(){
    return (
      <View style={{ flex: 1, backgroundColor: '#dbf9ee' }}>
        <Button title="Show Modal" onPress={() => this.setState({ showModal: true })} />


        <FlatList 
          data={this.props.elephants}
          renderItem={({item}) => <WildElephantCard key={item.id} {...item}  />}
          keyExtractor={item => item.id}
        />


        <Modal visible={this.state.showModal} animationType='slide' >
          <NewElephantForm />
          <Button title="close" onPress={() => this.setState({ showModal: false })} />
        </Modal>
      </View>
    )
  }
}


const mapStateToProps = state => {
  return {
    elephants: state.wildElephants
  }
}

export default connect(mapStateToProps, { getWildElephants })(HumansList);