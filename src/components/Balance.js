import React from 'react';
import {
    Text, View, Image
} from 'react-native';
import {
    Icon
} from 'native-base';

const Balance = ()=>{
    return (
        <View style={styles.container}>
            <View style={styles.rowHeader}>
                <Text style={styles.textHeader}>
                    ETH BALANCE
                </Text>
            </View>
            <View style={styles.rowBalance}>
                <Image 
                    style = {styles.image}
                    source={require('../img/ethereum.png')}
                />
                <Text style={styles.balanceNumber}>
                    2.94718715
                </Text>
                <Text style={styles.eth}>
                    ETH
                </Text>
            </View>
        </View>
    ); 
};
const styles = {
    container:{
        flex: 1,
    },
    rowHeader:{
        flex: 1,
        justifyContent: 'center',
    },
    rowBalance:{
        flex: 1,
        flexDirection: 'row',
    },
    textHeader: {
        marginLeft: 20,
        color: '#7f8c8d',
        fontWeight: 'bold',
    },
    balanceNumber:{
        color: '#2ecc71',
        fontSize: 20,
        marginRight: 5,
    },
    eth: {
        marginTop: 6,
        color: 'black',
    },
    image:{
        width: 30,
        height: 30,
        marginLeft: 20,
        marginRight: 20,
    },
}
export default Balance;