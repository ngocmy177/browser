import React from 'react';
import { 
    View, Text, TouchableOpacity,
} from 'react-native';
import { Icon, Right } from 'native-base';
const Address = () => {
    return (
        <View style={styles.container}>
            <View style={styles.rowHeader}>
                <Text style={styles.header}>
                    Address
                </Text>
                <View style={styles.icon}>
                    <TouchableOpacity>
                        <Icon name = 'share' />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.rowAddress}>
                <Text style={styles.address}>
                    0x21679934a49f9659b6eea004e472..e83d
                </Text>
                
                <View style={styles.icon}>
                    <TouchableOpacity>
                        <Icon name = 'copy' />
                    </TouchableOpacity>        
                </View>
            </View>
        </View>
    );
};
const styles = {
    container: {
        flex: 1,
    },
    rowHeader: {
        flex: 2,
        alignItems: 'center',
        flexDirection: 'row',
    },
    rowAddress: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
    },
    header: {
        flex: 7,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 20, 
    },
    address: {
        flex: 7,
        fontSize: 15,
        color: 'black',
        marginLeft: 20,
    },
    icon: {
        flex: 1,
        justifyContent:'flex-end',
    },
}
export default Address;