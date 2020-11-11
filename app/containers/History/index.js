/**
 *
 * History
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectHistoryArray, makeSelectSpinnerState } from './selectors';
import reducer from './reducer';
import saga from './saga';
import Table from '../../components/Table';
import { fetchHistoryData } from './actions';

export function History({ onFetchHistoryData, historyArray, spinnerState }) {
  useInjectReducer({ key: 'history', reducer });
  useInjectSaga({ key: 'history', saga });

  useEffect(() => {

    onFetchHistoryData();
  }, []);

  return (
    <div>
      <Helmet>
        <title>History</title>
        <meta name="description" content="Description of History" />
      </Helmet>
      <Table data={historyArray} name={"HistoryTable"} spinnerState={spinnerState}></Table>
    </div>
  );
}

History.propTypes = {};

const mapStateToProps = createStructuredSelector({
  historyArray: makeSelectHistoryArray(),
  spinnerState: makeSelectSpinnerState(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onFetchHistoryData : () => dispatch(fetchHistoryData()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(History);
