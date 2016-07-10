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
ListView,
ScrollView,
ActivityIndicatorIOS
} = ReactNative;

//var MovieView = require('./MovieView');

var styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  image: {
    width: 400,
    height: 300
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  thumb: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  textContainer: {
    flex: 1
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#48BBEC'
  },
  title: {
    fontSize: 20,
    color: '#656565'
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10
  }
});

class SearchResults extends Component {
 
  // constructor(props) {
  //   super(props);
  //   var dataSource = new ListView.DataSource(
  //     {rowHasChanged: (r1, r2) => r1.url_thumb !== r2.url_thumb});
  //   this.state = {
  //     dataSource: dataSource.cloneWithRows(this.props.movies)
  //   };
  // }
 
  // renderRow(rowData, sectionID, rowID) {
  //   return (
  //     <TouchableHighlight
  //         underlayColor='#dddddd'>
  //       <View>
  //         <Text>{rowData.title}</Text>
  //       </View>
  //     </TouchableHighlight>
  //   );
  // }
 
  render() {
    return (
  <ScrollView style={styles.textContainer}>
          <View style={styles.container}>
            <Image source={{uri: this.props.movies.Poster}} style={styles.thumb}/>
          </View>
      <Text style={styles.description}>
          Title: {this.props.movies.Title}
        </Text>
        <Text style={styles.description}>
          Year: {this.props.movies.Year}
        </Text>
        <Text style={styles.description}>
          Rated: {this.props.movies.Rated}
        </Text>
        <Text style={styles.description}>
          Released: {this.props.movies.Released}
        </Text>
        <Text style={styles.description}>
          Runtime: {this.props.movies.Runtime}
        </Text>
        <Text style={styles.description}>
          Genre: {this.props.movies.Genre}
        </Text>
        <Text style={styles.description}>
          Director: {this.props.movies.Director}
        </Text>
        <Text style={styles.description}>
          Actors: {this.props.movies.Actors}
        </Text>
        <Text style={styles.description}>
          Plot: {this.props.movies.Plot}
        </Text>
        <Text style={styles.description}>
          Awards: {this.props.movies.Awards}
        </Text>
        <Text style={styles.description}>
          imdbRating: {this.props.movies.imdbRating}
        </Text>
        </ScrollView>

 //     <ListView
   //     dataSource={this.state.dataSource}
     //   renderRow={this.renderRow.bind(this)}/>
    );
  }
 
}

module.exports = SearchResults;