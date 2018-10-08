import React, { Component } from 'react';
import { 
    Text, View, FlatList,
} from 'react-native';
import flatListData from '../data/FlatListData';
class FlatListItem extends Component {
    render(){
        return (
        <View style={styles.container}>
            <View style={{flex: 1,}}>
                <Text style={{marginLeft: 20}}>{this.props.item.date}</Text>
            </View> 
            <View style={styles.break}></View>
            <View style={styles.rowAddress}>
                <Text style={styles.address}>{this.props.item.address}</Text>
                <Text style={styles.value}>{this.props.item.value}</Text>
                <Text style={{flex: 1,marginTop: 4,}}>ETH</Text>
            </View>
            <View style={styles.rowBlock}>
                <Text style={{flex:1,marginLeft: 20,}}>Block</Text>
                <Text style={styles.block}>{this.props.item.block}</Text>
                <Text style={{flex:1.5,}}>{this.props.item.date}</Text>
                <Text style={{flex:1.5,}}>{this.props.item.time}</Text>
            </View>
        </View>
    );
    }
}
export default class Detail extends Component {
    render(){
        return(
            <View style={styles.container}>
            <FlatList 
            data = {flatListData}
            renderItem={({item, index})=>{
                return (
                    <FlatListItem item={item} index={index}>
                        
                    </FlatListItem>
                )
            }
            }>

            </FlatList>
        </View>
        )
        
    }
}
const styles = {
    container: {
        flex: 1,
    },
    rowAddress: {
        flex: 2,
        backgroundColor: 'white',
        flexDirection: 'row',
    },
    address: {
        fontSize: 18,
        flex: 4,
        marginLeft: 20,
        color: '#3498db',
    },
    value: {
        flex: 2,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
    },
    break:{
        height: 10,
    },
    rowBlock: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
    },
    block: {
        flex: 3,
        alignItems: 'flex-start',
        color: 'black',
        fontWeight: 'bold',
    }
}