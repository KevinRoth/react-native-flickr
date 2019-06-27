import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import axios from 'axios';
import PhotoDetail from './PhotoDetail';

class PhotoList extends Component {
  state = { photos: null };

  componentWillMount() {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=6e8a597cb502b7b95dbd46a46e25db8d&photoset_id=${this.props.albumId}&user_id=137290658%40N08&format=json&nojsoncallback=1`)
      .then(response => this.setState({ photos: response.data.photoset.photo }));
  }

    renderAlbum(item) {
        return (
            <PhotoDetail key={item.title} title={item.title} imageUrl={`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`} />
        )
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    key={"flatListPhoto"}
                    data={this.state.photos}
                    renderItem={({item}) => this.renderAlbum(item)}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        );
    }
}

export default PhotoList;
