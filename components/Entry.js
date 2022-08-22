import React, {useEffect} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Button
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { formatCurrency, getSupportedCurrencies } from "react-native-format-currency";
import { Feather } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';

class Entry extends React.Component {
    constructor(){
        super()
    }

    state = {
        bookArray: [],
        aku:'iya'
    }

    render() {
        const [valueFormattedWithSymbol, valueFormattedWithoutSymbol, symbol] = formatCurrency({ amount: this.props.val.harga, code: "USD" })
        return ( 
            <View key={this.keyval} style={styles.entry}>
                <Text fontWeight='bold' styles={styles.titleText}>{this.props.val.judul}</Text>
                <Text styles={styles.entryText}>{this.props.val.tanggal}</Text>
                <Text styles={styles.entryText}>{valueFormattedWithSymbol}</Text>
                <Text styles={styles.entryText}>{this.props.val.lokasi}</Text>
                <View style={styles.entryIcon}>
                <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate('EditScreen', {
                        postId: 3006,
                        title: this.props.val.judul,
                        tanggal: this.props.val.tanggal,
                        harga: this.props.val.harga,
                        lokasi: this.props.val.lokasi,
                    });
                }}>
                    <Feather name="edit" style={{paddingRight:15}} size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={this.props.deleteMethod}>
                    <Ionicons name="md-trash" size={24} style={{paddingRight:10}} color="#a12a2a" />
                </TouchableOpacity>
                </View>
            </View>
            
        );
    }
}

export default withNavigation(Entry);

const styles = StyleSheet.create({
    entry: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed',
    },
    titleText: {
        fontWeight:'bold',
        paddingLeft: 20,
    },
    entryText: {
        fontSize: 14,
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#E91E63',
    },
    entryIcon: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        top: 30,
        bottom: 10,
        right: 10,
    },
    entryDeleteText: {
        color: 'white',
    }
});