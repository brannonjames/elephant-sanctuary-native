import React from 'react';
import { FlatList, View, Button } from 'react-native';
import SanctuaryElephantCard from './SanctuaryElephantCard';
import { connect } from 'react-redux';
import { getSanctuaryElephants } from '../actions';

class SanctuaryList extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Sanctuary',
      headerRight: <Button title="Humans" onPress={() => navigation.navigate('Humans')} />
    }
  };


  async componentWillMount(){
    this.props.getSanctuaryElephants();
  }


  render(){
    return (
      <View style={{ flex: 1 }}>
        <FlatList 
          data={this.props.elephants}
          renderItem={({item}) => <SanctuaryElephantCard key={item.id} {...item} />}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    )
  }
}


const mapStateToProps = state => {
  return {
    elephants: state.sanctuaryElephants
  }
}

export default connect(mapStateToProps, { getSanctuaryElephants })(SanctuaryList);