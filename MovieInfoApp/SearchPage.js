'use strict';
var React = require('react');
var {
Component
} = React;

var ReactNative = require('react-native');
var {
StyleSheet,
Text,
TextInput,
View,
TouchableHighlight,
Image,
ActivityIndicatorIOS
} = ReactNative;

var SearchResults = require('./SearchResults');

var styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  flowRight: {
  flexDirection: 'row',
  alignItems: 'center',
  alignSelf: 'stretch'
},
buttonText: {
  fontSize: 18,
  color: 'white',
  alignSelf: 'center'
},
button: {
  height: 36,
  flex: 1,
  flexDirection: 'row',
  backgroundColor: '#48BBEC',
  borderColor: '#48BBEC',
  borderWidth: 1,
  borderRadius: 8,
  marginBottom: 10,
  alignSelf: 'stretch',
  justifyContent: 'center'
},
searchInput: {
  height: 36,
  padding: 4,
  marginRight: 5,
  flex: 4,
  fontSize: 18,
  borderWidth: 1,
  borderColor: '#48BBEC',
  borderRadius: 8,
  color: '#48BBEC'
},
image: {
  width: 217,
  height: 138
}
});

function urlForQueryAndPage(key, value) {
  var data = {
      y: '',
      plot: 'short',
      r: 'json'
  };
  data[key] = value;
 
  var querystring = Object.keys(data)
    .map(key => key + '=' + encodeURIComponent(data[key]))
    .join('&');
 
  return 'http://www.omdbapi.com/?' + querystring;
};

class SearchPage extends Component {
  constructor(props) {
  super(props);
  this.state = {
    searchString: '',
    isLoading: false,
    message: ''
  };
}

 _executeQuery(query) {
  console.log(query);
  this.setState({ isLoading: true });
  fetch(query)
  .then(response => response.json())
  .then((responseJson) => {
        this._handleResponse(responseJson);
        console.log(responseJson)
      })
  .catch(error =>
     this.setState({
      isLoading: false,
      message: 'There was an error: ' + error
   }));
 }

_handleResponse(response) {
  this.setState({ isLoading: false , message: '' });
  if (response.Response.substr(0, 1) !== 'F') {
    this.props.navigator.push({
  title: 'Results',
  component: SearchResults,
  passProps: {movies: response}
});
  } else {
    this.setState({ message: 'Movie not recognized; please try again.'});
  }
}
 
onSearchPressed() {
  var query = urlForQueryAndPage('t', this.state.searchString);
  this._executeQuery(query);
}
  onSearchTextChanged(event) {
  console.log('onSearchTextChanged');
  this.setState({ searchString: event.nativeEvent.text });
  console.log(this.state.searchString);
}
  render() {
    var spinner = this.state.isLoading ?
  ( <ActivityIndicatorIOS
      size='large'/> ) :
  ( <View/>);
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          Search for a movie!
        </Text>
        <View style={styles.flowRight}>
  <TextInput
  style={styles.searchInput}
  value={this.state.searchString}
  onChange={this.onSearchTextChanged.bind(this)}
  placeholder='Enter Movie Title'/>
  <TouchableHighlight style={styles.button}
      underlayColor='#99d9f4' onPress={this.onSearchPressed.bind(this)}>
    <Text style={styles.buttonText}>Go</Text>
  </TouchableHighlight>
</View>
<Text style={styles.description}>{this.state.message}</Text>
      </View>
    );
  }
}

module.exports = SearchPage;