import React from 'react';
import { Button, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

class ElephantCard extends React.Component {
  render(){
    const { thumbnail } = this.props;
    return (
      <Card>
  
        <CardSection>
          <Image source={{ uri: thumbnail }} style={{ flex: 1, height: 300, width: null }} />
        </CardSection>
  
        <CardSection style={styles.checkInBtn}>
          <Button title="Check In" onPress={() => {}} />
        </CardSection>
  
      </Card>
    )
  }
}

const styles = {
  checkInBtn: {
    alignSelf: 'flex-end'
  }
}

export default ElephantCard;