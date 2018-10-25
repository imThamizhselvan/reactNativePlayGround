import React, {Component} from 'react';
import {Text, View} from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import styles from 'AwesomeProject/styles/index.js';
import { priceRequest } from './actions';
import { getBitcoinData } from './selectors';

export default class Bitcoin extends Component {
  static navigationOptions = {
    title: 'Bitcoin',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  // componentDidMount() {
  //   this.props.hitApi();
  // }

  render() {
    console.log("h assit");
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome sTo Test</Text>
      </View>
    );
  }
};

// Bitcoin.propTypes = {
//   hitApi: PropTypes.func.isRequired,
// };
//
//
// const mapStateToProps = createStructuredSelector({
//   bitcoinData: getBitcoinData(),
// });
//
// function mapDispatchToProps(dispatch) {
//   return {
//     hitApi: () => dispatch(priceRequest()),
//   };
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(Bitcoin);
