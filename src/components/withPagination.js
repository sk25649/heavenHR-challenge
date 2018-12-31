import React, { Component } from 'react';
import _ from 'lodash';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Navigation from './Navigation';

import { navigate } from '../actions/NavigationActions';

function withPagination(WrappedComponent) {
    return class Pagination extends Component {
        render() {
            const { friends, navigation: { index }, actions } = this.props;
            const pagination = friends.slice(index, index + 2);
            const max = friends.length;
            return (
                <div className="paginationContainer">
                    <WrappedComponent 
                        friends={pagination}
                        actions={actions}
                    />
                    <Navigation
                        index={index} 
                        max={max}
                        navigate={this.props.navigate}
                    />
                </div>
            );
        }
    };
}

// const mapStateToProps = (state) => state;

const withPaginationWrapper = compose(
    connect((state) => state, { navigate }),
    withPagination
);

export default withPaginationWrapper;
