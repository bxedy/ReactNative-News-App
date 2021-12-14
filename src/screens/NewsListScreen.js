import React from 'react';
import { ScrollViewComponent, StyleSheet} from 'react-native';

import Card from '../components/Card';

const NewsListScreen = props => {
    return (
<Card navigation={props.navigation}/>
    );
}

const styles = StyleSheet.create({

});


export default NewsListScreen;