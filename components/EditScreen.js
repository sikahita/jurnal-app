import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DatePicker from 'react-native-neat-date-picker';

export default class EditScreen extends React.Component {
    static navigationOptions = {
        title: 'Edit Book',
        headerShown: false,
    };

    state = {
        judulBuku: '',
        hargaBuku: '',
        tanggalBeli: '',
        lokasiBeli: '',
        showDatePicker:false
    }

    render() {
        const { title, harga, tanggal, lokasi } = this.props;
        console.log(title)
        const openDatePicker = () => {
            this.setState({showDatePicker:true})
        }

        const onCancel = () => {
        // You should close the modal in here
        this.setState({showDatePicker:false})

        }

        const onConfirm = ( date ) => {
        // You should close the modal in here
        console.log(date.dateString)
        this.setState({showDatePicker:false,tanggalBeli:date.dateString})
        }

        const checkTextInput = () => {
            //Check for the Name TextInput
            if (!this.state.judulBuku.trim()) {
                alert('Please Enter Book Title');
                return;
            }
            //Check for the Email TextInput
            if (!this.state.hargaBuku.trim()) {
                alert('Please Enter Book Price');
                return;
            }

            if (!this.state.tanggalBeli.trim()) {
                alert('Please Enter Buy Date');
                return;
            }

            if (!this.state.lokasiBeli.trim()) {
                alert('Please Enter Book Store');
                return;
            }
            //Checked Successfully
            //Do whatever you want
            alert('Success');
            receivedValue(entryArray.push({
                // 'date': d.getFullYear() +
                //     "/" + (d.getMonth() + 1) +
                //     "/" + d.getDate(),
                'judul': this.state.judulBuku,
                'harga': this.state.hargaBuku,
                'tanggal': this.state.tanggalBeli,
                'lokasi': this.state.lokasiBeli

            }))
            this.props.navigation.goBack()
        }
       
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Update Book</Text>
                    <TouchableOpacity style={styles.backButton}>
                    <Ionicons onPress={() => {
                            this.props.navigation.goBack()
                        }} name="arrow-back-outline" size={24} color="black" />
                    </TouchableOpacity> 
                </View>
                <View>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(judulBuku) => this.setState({ judulBuku })}
                        value={title}
                        placeholder='Entry Book Title'
                        multiline={true}
                        clearButtonMode='always'
                        placeholderTextColor='grey'
                        underlineColorAndroid='transparent'>
                    </TextInput>
                </View>
                <View>
                    <TextInput
                        keyboardType='numeric'
                        maxLength={15}
                        style={styles.textInput}
                        onChangeText={(hargaBuku) => this.setState({ hargaBuku })}
                        value={harga}
                        placeholder='Entry Book Price'
                        multiline={true}
                        clearButtonMode='always'
                        placeholderTextColor='grey'
                        underlineColorAndroid='transparent'>
                    </TextInput>
                </View>
                <View>
                    <TextInput
                        maxLength={15}
                        style={styles.textInput}
                        onChange={openDatePicker}
                        value={tanggal}
                        placeholder='Entry Buy Date'
                        multiline={true}
                        clearButtonMode='always'
                        placeholderTextColor='grey'
                        underlineColorAndroid='transparent'>
                    </TextInput>
                    <DatePicker
                        isVisible={this.state.showDatePicker}
                        mode={'single'}
                        onCancel={onCancel}
                        onConfirm={onConfirm}
                    />
                </View>
                <View>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(lokasiBeli) => this.setState({ lokasiBeli })}
                        value={lokasi}
                        placeholder='Entry Bookstore or Buy link ecommerce'
                        multiline={true}
                        clearButtonMode='always'
                        placeholderTextColor='grey'
                        underlineColorAndroid='transparent'>
                    </TextInput>
                </View>
                <TouchableOpacity onPress={checkTextInput} style={styles.addButton}>
                    <Ionicons style={styles.addButtonText} name="checkmark" size={24} color="black" />
                </TouchableOpacity>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerText: {
        color: 'white',
        fontSize: 20,
        padding: 20,
        marginTop: 20
    },
    scrollContainer: {
        flex: 1,
        marginBottom: 100,
    },
    textInput: {
        // alignSelf: 'stretch',
        textAlignVertical: "top",
        color: 'black',
        padding: 20,
        backgroundColor: 'white',
        borderTopWidth: 2,
        borderTopColor: '#ededed',
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
    header: {
        backgroundColor: '#6e3d16',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 0,
        borderBottomColor: '#AECCC2',
    },
    backButton: {
        position: 'absolute',
        zIndex: 11,
        flexDirection: 'row',
        bottom: 10,
        left: 10,
        padding: 10,
        paddingTop: 10,
        borderRadius: 5,
        elevation: 0,
    },
    backButtonText: {
        color: '#fff',
        fontSize: 17,
    },
});
