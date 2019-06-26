import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const PhotoDetail = ({ title, imageUrl }) => {
  const {
    thumbnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={{headerContentStyle}}>
        <Image
          style={imageStyle}
          source={{ uri: imageUrl }}
        />


         <View style={{marginTop: 12, alignItems: 'center', justifyContent: 'center'}}>
           <Button onPress={() => Linking.openURL(imageUrl)}>
             Ver imágen {title}
           </Button>
         </View>
       </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    marginTop: 12,
    width: 400
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: 350
  }
};

export default PhotoDetail;
