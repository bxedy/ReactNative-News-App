import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


const Card = props => {
    return (
        <TouchableOpacity onPress={() => props.navigation.navigate('NewsDetails')}>
            <View style={styles.card}>
                <View style={styles.imageHeader}>
                    <Image
                        style={styles.image}
                        source={{ uri: 'https://user-images.githubusercontent.com/16916934/27370350-c82d1c44-5679-11e7-9147-2e8adeb4c515.png'}} />
                </View>
                <View style={styles.tittleWrapper}>
                    <Text style={styles.tittle}>
                        Dummy tittle
                    </Text>
                    <MaterialIcons
                        name='favorite-border'
                        color='#000000'
                        size={24}>
                    </MaterialIcons>
                </View>
                <View style={styles.descriptionWrapper}>
                    <Text>Dummy description</Text>
                </View>
            </View>
        </TouchableOpacity>


    );
}


const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        height: 300,
        marginVertical: 20,
        elevation: 5,
    },
    imageHeader: {
        width: '100%',
        height: '60%',
        borderTopStartRadius: 0,
        borderTopRightRadius: 0,
        overflow: 'hidden',
    },
    image: {
        height: '100%',
        width: '100%',
    },
    tittleWrapper: {
        marginTop: 10,
        height: '10%',
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    tittle: {
        fontSize: 20,
    },
    description: {
        fontSize: 15,
        marginTop: 10

    },
    descriptionWrapper: {
        paddingHorizontal: 15,
    },
})

export default Card;