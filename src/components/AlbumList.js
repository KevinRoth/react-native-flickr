import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { photoset: null };

  componentWillMount() {
    axios.get('https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=6e8a597cb502b7b95dbd46a46e25db8d&user_id=137290658%40N08&format=json&nojsoncallback=1')
      .then(response => this.setState({ photoset: response.data.photosets.photoset }));
  }

  renderAlbum(item) {
    return (
        <AlbumDetail key={item.id} title={item.title._content}  albumId={item.id}  />
    )
  }

  render() {
    if (!this.state.photoset) { 
			return (
			    <View style={{flex: 1}}>
                  <Text>
                    Espere un momento...
                  </Text>
                </View>
				);
    }

    return (
      <View style={{ flex: 1 }}>
        <FlatList
            key={"flatListAlbum"}
            data={this.state.photoset}
            renderItem={({item}) => this.renderAlbum(item)}
            keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

export default AlbumList;
