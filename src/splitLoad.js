import React, { Component } from 'react';

const withSplitting = getComponent => {
  class WithSplitting extends Component {
    state = {
      Module: null
    };

    constructor(props) {
      super(props);
      getComponent.then(({ default: Module }) => {
        this.setState({
          Module
        });
      });
    }

    render() {
      const { Module } = this.state;
      if (!Module) {
        return null;
      }
      return <Module {...this.props} />;
    }
  }

  return WithSplitting;
};

export default withSplitting;