import React from 'react';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import { Actions } from 'react-native-router-flux';

const AlbumDetail = ({ title, albumId }) => {
  return (
    <Card>
      <CardSection>
       <Button onPress={() => Actions.photoList({albumId:albumId})}>
         Entrá a {title}
        </Button>
      </CardSection>
    </Card>
  );
};

export default AlbumDetail;
