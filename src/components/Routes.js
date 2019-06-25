import React from 'react'
import { Router, Scene } from 'react-native-router-flux';
import AlbumList from "./AlbumList";
import PhotoList from "./PhotoList";

const Routes = () => (
    <Router>
        <Scene key="root">
            <Scene key="albumList" component={AlbumList} title="Albums" initial={true} />
            <Scene key="photoList" component={PhotoList} title="Photos" />
        </Scene>
    </Router>
)
export default Routes
