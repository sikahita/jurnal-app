import React from 'react';
import SearchBar from 'react-native-dynamic-search-bar';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

import Entry from './Entry.js';
import EntryScreen from './EntryScreen.js'
import EditScreen from './EditScreen.js';

export default class Home extends React.Component {
    static navigationOptions = {
        title: 'Home',
        headerShown: false,
    };

    state = {
        entryArray: [],
    }

    receivedValue = (value) => {
        this.setState({value})
    }

    handleOnChangeText = (text) => {
    // ? Visible the spinner
    this.setState({
        searchText: text,
        spinnerVisibility: true,
    });

    // ? After you've done to implement your use-case
    // ? Do not forget to set false to spinner's visibility
    this.setState({
        spinnerVisibility: false,
    });
    };

    render() {
        const { navigate } = this.props.navigation;


        let entries = this.state.entryArray.map((val, key) => {
            return <Entry key={key} keyval={key} val={val}
                deleteMethod={() => this.deleteEntry(key)} editMethod={() => this.editEntry}/>
        });

        const { spinnerVisibility } = this.state;

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}> Salsa Book Shelf </Text>
                </View>
                <View style={{marginTop:10}}>
                    <SearchBar
                    height={50}
                    fontSize={14}
                    fontColor="#fdfdfd"
                    iconColor="#fdfdfd"
                    shadowColor="#282828"
                    cancelIconColor="#fdfdfd"
                    // backgroundColor="#ba312f"
                    spinnerVisibility={spinnerVisibility}
                    placeholder="Search any book ..."
                    fontFamily="BurbankBigCondensed-Black"
                    shadowStyle={styles.searchBarShadowStyle}
                    onChangeText={this.handleOnChangeText}
                    />
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('EntryScreen', {
                    entryArray: this.state.entryArray,
                    receivedValue: this.receivedValue
                })} style={styles.addButton}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>

                <ScrollView style={styles.scrollContainer}>
                    {entries}
                </ScrollView>
            </View>
        );
    }

    deleteEntry(key) {
        this.state.entryArray.splice(key, 1);
        this.setState({ entryArray: this.state.entryArray })
    }

    editEntry(key) {
        this.props.navigation.navigate('EditScreen')
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#6e3d16',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 0,
        borderBottomColor: '#AECCC2',
    },
    headerText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20,
        padding: 26,
    },
    scrollContainer: {
        flex: 1,
        marginBottom: 100,
    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 20,
        backgroundColor: '#734825',
        width: 70,
        height: 70,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 24,
    },
});
