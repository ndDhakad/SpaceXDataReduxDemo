/**
 *
 * Table
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { SyncLoader } from 'react-spinners';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import Grid from '@material-ui/core/Grid';
import BootstrapTable from 'react-bootstrap-table-next';
import PropTypes from 'prop-types';
import paginationFactory from 'react-bootstrap-table2-paginator';
import './styles.css';

const useStyles = makeStyles(theme => ({
  resize: {
    fontSize: '0.75em',
    fontFamily: 'MarsCentra-Book',
    padding: '5px',
  },
  root: {
    width: '100%',
    padding: 0,
  },
}));

function Table({ data, name, spinnerState }) {
  const classes = useStyles();

  const headerStyle = () => ({
    width: '16%',
    textAlign: 'center',
    backgroundColor: 'rgb(0,215,185)',
    fontSize: '12px',
    fontWeight: 'bold',
    fontFamily: 'Arial,sans-serif',
    color: '#ffffff',
    verticalAlign: 'bottom',
    padding: '0.25rem',
  });

  const cellStyle = () => ({
    fontSize: '11px',
    fontWeight: 'normal',
    fontFamily: 'Arial,sans-serif',
    padding: '0.25rem',
  });

  const expandRow = {
    renderer: row => {
      if (name === 'HistoryTable') {
        const pArray = [];
        for (let propt in row.links) {
          const value = row.links[propt] == null ? ` ` : row.links[propt];
          pArray.push(
            <span>
              {' '}
              <b>{propt}</b>
              {`: ` + value + `,  `}
            </span>,
          );
        }
        return (
          <div>
            <p>Links</p>
            <p>{pArray}</p>
          </div>
        )
      }
      else if(name === 'AddressTable') {
        const pArray = [];
        for(const propt in row.orbit_params){
          let value = row.orbit_params[propt] == null ? ` ` :  row.orbit_params[propt];
          pArray.push(<span> <b>{propt}</b>{  `: ${  value  },  `}</span>) ;
        }
        return(
          <div>
            <p>Orbit Parameters</p>

            <p>{pArray}</p>
          </div>
        )
      }
    },
    showExpandColumn: true,
  };

  const noradFormatter = (cell, row) => {
    if (row.norad_id.length == 0) return '';
    const pArray = [];
    for (let i = 0; i < row.norad_id.length; i++) {
      pArray.push(<span>{row.norad_id[i]}</span>);
    }
    return <p>{pArray}</p>;
  };
  const customersFormatter = (cell, row) => {
    if (row.customers.length == 0) return '';
    const pArray = [];
    for (let i = 0; i < row.customers.length; i++) {
      pArray.push(<span>{row.customers[i]}</span>);
    }
    return <p>{pArray}</p>;
  };

  const historyColumn = [
    {
      dataField: 'id',
      text: 'ID',
      align: 'center',
      sort: true,
      editable: false,
      style: cellStyle,
      // headerStyle,
    },
    {
      dataField: 'title',
      text: 'Title',
      align: 'center',
      sort: true,
      style: cellStyle,
      editable: false,
      // headerStyle,
    },
    {
      dataField: 'event_date_utc',
      text: 'Event Date (UTC)',
      align: 'center',
      sort: true,
      style: cellStyle,
      editable: false,
      // headerStyle,
    },
    {
      dataField: 'event_date_unix',
      text: 'Event Date (Unix)',
      align: 'center',
      sort: true,
      style: cellStyle,
      editable: false,
      // headerStyle,
    },
    {
      dataField: 'flight_number',
      text: 'Flight No.',
      align: 'center',
      sort: true,
      style: cellStyle,
      editable: false,
      // headerStyle,
    },
    {
      dataField: 'details',
      text: 'Details',
      align: 'center',
      sort: true,
      style: cellStyle,
      editable: false,
      // headerStyle,
    },
    /* {
      dataField: 'links',
      text: 'Links',
      align: 'center',
      sort: true,
      formatter: linkCellFormatter,
      style: cellStyle,
      editable: false,
      headerStyle,
    }, */
  ];

  const addressColumn = [
    {
      dataField: 'payload_id',
      text: 'Payload ID',
      align: 'center',
      style: cellStyle,
      // formatter: caseFillData,
      editable: false,
      // headerStyle,
    },
    {
      dataField: 'norad_id',
      text: 'Norad ID',
      align: 'center',
      style: cellStyle,
      formatter: noradFormatter,
      editable: false,
      // headerStyle,
    },
    {
      dataField: 'reused',
      text: 'Reused',
      align: 'center',
      style: cellStyle,
      editable: false,
      // headerStyle,
    },
    {
      dataField: 'customers',
      text: 'Customers',
      align: 'center',
      style: cellStyle,
      formatter: customersFormatter,
      editable: false,
      // headerStyle,
    },
    {
      dataField: 'nationality',
      text: 'Nationality',
      align: 'center',
      style: cellStyle,
      editable: false,
      // headerStyle,
    },
    {
      dataField: 'manufacturer',
      text: 'Manufacturer',
      align: 'center',
      style: cellStyle,
      editable: false,
      // headerStyle,
    },
    {
      dataField: 'payload_type',
      text: 'Type',
      align: 'center',
      style: cellStyle,
      editable: false,
      // headerStyle,
    },
    {
      dataField: 'payload_mass_kg',
      text: 'Mass(kg)',
      align: 'center',
      style: cellStyle,
      editable: false,
      // headerStyle,
    },
    {
      dataField: 'payload_mass_lbs',
      text: 'Mass(lbs)',
      align: 'center',
      style: cellStyle,
      editable: false,
      // headerStyle,
    },
    {
      dataField: 'orbit',
      text: 'Orbit',
      align: 'center',
      style: cellStyle,
      editable: false,
      // headerStyle,
    },
  ];

  let tableColumns;
  const key = 'id';
  let tableId;
  switch (name) {
    case 'HistoryTable':
      tableId = 'HistoryTable';
      tableColumns = historyColumn;
      break;
    case 'AddressTable':
      tableId = 'AddressTable';
      tableColumns = addressColumn;
      break;
  }
  return (
    <div style={{ boxSizing: 'border-box', width: '100%' }}>
      <Paper elevation={1} square style={{ padding: '10px', marginTop: 10 }}>
        {(() => {
          if (spinnerState) {
            return (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '300px',
                }}
              >
                <SyncLoader size={15} margin={2} color="#0000a0" loading />
              </div>
            );
          }
          return (
            <ToolkitProvider
              keyField={key}
              data={data}
              columns={tableColumns}
              pagination={paginationFactory()}
              search
              exportCSV
            >
              {props => (
                <Grid>
                  <Grid style={{ overflowX: 'auto' }} id={tableId}>
                    <BootstrapTable
                      classes="tableStyle"
                      {...props.baseProps}
                      bootstrap4
                      keyField={key}
                      data={data}
                      columns={tableColumns}
                      bordered={false}
                      pagination={paginationFactory()}
                      // striped
                      hover
                      expandRow={expandRow}
                      // filter={ filterFactory()}
                    />
                  </Grid>
                </Grid>
              )}
            </ToolkitProvider>
          );
        })()}
      </Paper>
    </div>
  );
}

Table.propTypes = { data: PropTypes.array };

export default memo(Table);
