import React from 'react';
import Paper from '@material-ui/core/Paper';
import { default as MaterialTable } from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import LinearProgress from '@material-ui/core/LinearProgress';
import moment from 'moment';

import { IData } from '../../containers/Main';
import { Indicator } from './styled';
import { thousondsToK } from '../../utils/formatters';

interface IProps {
  data: IData[]
  nameFilter: string
  minDateFilter: Date
  maxDateFilter: Date
  isDataLoading: boolean
  isDataLoadingFailure: boolean
}

export const Table = ({
  data,
  isDataLoading,
  isDataLoadingFailure,
  nameFilter,
  minDateFilter,
  maxDateFilter,
}:IProps): JSX.Element => {

  const filteredData = data.filter((item: IData) =>
    item.name.toLowerCase().includes(nameFilter.toLowerCase())
    &&
    minDateFilter 
      ? moment(item.startDate, "MM/dd/yyyy") > moment(minDateFilter) 
      : true
    &&
    maxDateFilter 
      ? moment(item.endDate, "MM/dd/yyyy") < moment(maxDateFilter) 
      : true
    &&
    moment(item.startDate, "MM/dd/yyyy") < moment(item.endDate, "MM/dd/yyyy")
  );

  return (
    <Paper>
      <MaterialTable>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Start Date</TableCell>
            <TableCell>End Date</TableCell>
            <TableCell>Active</TableCell>
            <TableCell>Budget</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredData.length 
            ? filteredData.map((item: IData) => {

                const active = 
                  moment() > moment(item.startDate, "MM/dd/yyyy") &&
                  moment() < moment(item.endDate, "MM/dd/yyyy")
              
                return (
                  <TableRow key={item.id}>
                    <TableCell component="th" scope="row">
                      {item.name}
                    </TableCell>
                    <TableCell>
                      {item.startDate}
                    </TableCell>
                    <TableCell>
                      {item.endDate}
                    </TableCell>
                    <TableCell>
                      <Indicator active={active}/>
                      {active ? 'Active' : 'Inactive'}
                    </TableCell>
                    <TableCell>
                      {thousondsToK(item.budget) + ' USD'}
                    </TableCell>
                  </TableRow>
                )
              }
            ) 
            : !isDataLoading && 
              <TableRow>
                <TableCell>
                  No data found, try to type <i>"AddCampaigns()"</i> in browser's console
                </TableCell>
              </TableRow>
          }
          {isDataLoadingFailure &&
            <TableRow>
              <TableCell>
                Data loading error
              </TableCell>
            </TableRow>
          }
        </TableBody>
      </MaterialTable>
      {isDataLoading &&
        <LinearProgress />
      }
    </Paper>
  )
}

Table.defaultProps = {
  data: [],
  isDataLoading: false,
  isDataLoadingFailure: false,
  nameFilter: ''
}