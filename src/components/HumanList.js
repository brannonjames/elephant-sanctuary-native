import React from 'react';
import { FlatList, View, Button } from 'react-native';
import WildElephantCard from './WildElephantCard';
import { connect } from 'react-redux';
import { getHumans } from '../actions';

class ElephantList extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Humans'
    }
  };


  async componentWillMount(){
    this.props.getHumans();
  }


  render(){
    console.log(this.props.humans);
    return (
      <View style={{ flex: 1 }}>
        <FlatList 
          data={this.props.humans}
          renderItem={({item}) => <WildElephantCard key={item.id} {...item} />}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    )
  }
}


const mapStateToProps = state => {
  return {
    humans: state.humans
  }
}

export default connect(mapStateToProps, { getHumans })(ElephantList);