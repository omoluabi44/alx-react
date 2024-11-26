import React, { Component } from "react";

function withLogger(WrappedComponent) {
    class LoggerComponent extends Component {
        componentDidMount() {
            console.log(`Component ${WrappedComponent.name} is mounted`);
        }
        componentWillUnmount() {
            console.log(`Component ${WrappedComponent.name} is going to unmount`);
        }
        render() {
            return <WrappedComponent {...this.props} />;
        }
    }

    // Setting the displayName for debugging purposes
    LoggerComponent.displayName = `WithLogger(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

    return LoggerComponent;
}

export default withLogger;
