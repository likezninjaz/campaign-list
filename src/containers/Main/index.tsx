import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Input } from '../../components/Input';
import { Datepicker } from '../../components/Datepicker';
import { Table } from '../../components/Table';
import {
  Container,
  Header,
  Dates,
  DateContainer,
  TableContainer,
} from './styled';

import { 
  getMainDataSelector,
  getIsDataLoading,
  getIsDataLoadingFailure
} from '../../store/selectors/main';
import { getMainData } from '../../store/actions/main';

export interface IData {
  id: number,
  name: string,
  startDate: string,
  endDate: string,
  budget: number,
  active: boolean
}

export const Main = () => {

  const dispatch = useDispatch()
  const mainData: IData[] = useSelector(getMainDataSelector);
  const isDataLoading: boolean = useSelector(getIsDataLoading);
  const isDataLoadingFailure: boolean = useSelector(getIsDataLoadingFailure);
  const [maxDate, setMaxDate] = useState();
  const [minDate, setMinDate] = useState();
  const [searchValue, setSearchValue] = useState('');
  
  useEffect(() => {
    dispatch(getMainData.request());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Header>
        <Dates>
          <DateContainer>
            <Datepicker
              label='Start date'
              onChange={(date: Date) => setMinDate(date)}
              value={minDate}
              maxDate={maxDate}
            />
            </DateContainer>
          <DateContainer>
            <Datepicker
              label='End date'
              value={maxDate}
              minDate={minDate}
              onChange={(date: Date) => setMaxDate(date)}
            />
          </DateContainer>
        </Dates>
        <Input
          label='Search by name'
          onChange={(value: string) => setSearchValue(value)}
        />
      </Header>
      <TableContainer>
        <Table
          data={mainData}
          nameFilter={searchValue}
          minDateFilter={minDate}
          maxDateFilter={maxDate}
          isDataLoading={isDataLoading}
          isDataLoadingFailure={isDataLoadingFailure}
        />
      </TableContainer>
    </Container>
  )
}
