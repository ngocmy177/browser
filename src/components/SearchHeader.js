import React from 'react';
import { 
    Image, View, Text,Left, TouchableOpacity,
} from 'react-native';
import { Icon } from 'native-base';
const SearchHeader = () => {
    return (
        <View>
            <View style={styles.header}>
                <TouchableOpacity>
                    <Image 
                        style = {styles.image}
                        source={require('../img/close-button.png')}
                    />
                </TouchableOpacity>
                <Text style={styles.text}>Address Details</Text>
            </View>
        </View>
        
    );
};
const styles = {
    header:{
        flexDirection: 'row',
        
    },
    image:{
        width: 15,
        height: 15,
        marginLeft: 20,
    },
    text:{
        fontSize: 20,
        color: 'white',
        marginLeft: 40,
    }
}
export default SearchHeader;