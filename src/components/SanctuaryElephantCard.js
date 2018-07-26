import React from 'react';
import { Image, Text, Button, View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
  
const SanctuaryElephantCard = props => {
  const { thumbnail, name, happiness_level } = props;
  const { nameStyle, thumbnailSectionStyle, happinessStyle, checkoutBtnContainer } = styles;
  return (
    <Card>

    <CardSection style={thumbnailSectionStyle}>
      <Image source={{ uri: thumbnail }} style={{ height: 150, width: 150 }} />
      <View style={checkoutBtnContainer}>
        <Button title="Checkout" onPress={() => {}} />
      </View>
    </CardSection>

    <CardSection>
      <Text style={nameStyle}>{name}</Text>
    </CardSection>

    <CardSection>
      <Text style={happinessStyle}>Happiness Level: {happiness_level}</Text>
    </CardSection>

    </Card>
  )
}

const styles = {
  thumbnailSectionStyle: {
    justifyContent: 'space-between'
  },
  checkoutBtnContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  nameStyle: {
    fontSize: 32
  },
  happinessStyle: {
    fontSize: 22
  }
}

export default SanctuaryElephantCard;