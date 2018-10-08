import React from 'react';
import { 
    Image, View, Text,Left, Button, Container,
} from 'react-native';
import { Icon } from 'native-base';
import SearchHeader from './SearchHeader';
import Address from './Address';
import Balance from './Balance';
import Transaction from './Transaction';
import Detail from './Detail';
const Search = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <SearchHeader />
            </View>
            <View style={styles.address}>
                <Address />
            </View>
            <View style={styles.break}>
            </View>
            <View style={styles.balance}>
                <Balance />
            </View>
            <View style={styles.transaction}>
                <Transaction />
            </View>
            <View style={styles.detail}>
                <Detail />
            </View>
        </View>
    );
};
const styles = {
    container:{
        flex: 1,
        // flexDirection: 'column',
        backgroundColor: '#ecf0f1',
    },
    header:{
        flex: 1,
        flexDirection:'row',
        backgroundColor: '#2980b9',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    address:{
        flex: 2,
        flexDirection: 'column',
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    break:{
        height: 10,
    },
    balance:{
        flex: 1.5,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    transaction:{
        flex: 1,
    },
    detail: {
        flex: 6,
    }
}
export default Search;