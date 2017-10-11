import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { subscribeToBfx } from '../actions';

import OrderBook from './OrderBook';

class Layout extends Component {
  componentDidMount() {
    this.props.subscribeToBfx();
  }

  render() {
    const { orderBook, trades } = this.props;
    console.log('trades:', trades);
    return (
      <div className="layout">
        <OrderBook orderBook={orderBook} />
      </div>
    );
  }
}

Layout.propTypes = {
  subscribeToBfx: PropTypes.func.isRequired,
  orderBook: PropTypes.array.isRequired,
  trades: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  orderBook: state.orderBook,
  trades: state.trades,
});

const mapDispatchToProps = dispatch => ({
  subscribeToBfx(socket) {
    dispatch(subscribeToBfx(socket));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
