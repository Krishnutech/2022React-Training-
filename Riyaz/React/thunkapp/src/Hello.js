import React, { Component } from 'react';
import axios from 'axios';
import { connect } from "react-redux";

class Hello extends Component {

  state = { data: [] };

  render() {
    return (
      <>
        <h1>React thunk</h1>
        <button onClick={this.props.setData}>Get data</button>
        <button onClick={this.props.removeData}>Remove data</button>
        {this.props.data.map((x, i) => <div key={i}>{x.title}</div>)}
      </>
    );
  }
}

const separateGet = (name) => {
  return (dispatch, getState) => {
    axios.get('https://jsonplaceholder.typicode.com/posts',{ timeout: 0 })
        .then(result => {
          console.log(name, getState());
          dispatch({ type: 'setData', data: result.data });
        })
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.storage.data || []
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setData: () => {
      dispatch(separateGet('Azxy'));
    },
    removeData: () => {
      dispatch({ type: 'removeData' })
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
