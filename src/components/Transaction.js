import React from 'react';
import { 
    Text, View, FlatList,
} from 'react-native';
const Transaction = ()=>{
    return (
        <View style={styles.container}>
            <View style={styles.rowHeader}>
                <Text style={styles.textHeader}>Ethereum Transactions </Text>
                <Text style={styles.total}>(32)</Text>
            </View>
        </View>
    );
};
const styles = {
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    rowHeader:{
        flex: 1.5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    textHeader:{
        fontSize: 18,
        color: 'black',
        fontWeight:'bold',
        marginLeft: 20,
    },
    total:{
        fontSize: 18,
    },
};
export default Transaction;