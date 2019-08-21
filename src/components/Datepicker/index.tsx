import React from 'react';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

interface IProps {
  label?: string
  value: Date
  minDate?: Date | null
  maxDate?: Date | null
  onChange: (date: Date) => void
}

export const Datepicker = ({
  label,
  value,
  minDate,
  maxDate,
  onChange,
}:IProps): JSX.Element => {

  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);

  function handleDateChange(date: any) {
    setSelectedDate(date);
    onChange(date);
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        format="MM/dd/yyyy"
        label={label}
        value={selectedDate}
        minDate={minDate}
        maxDate={maxDate}
        onChange={handleDateChange}
      />
    </MuiPickersUtilsProvider>
  )
}

Datepicker.defaultProps = {
  label: '',
  placeholder: ''
}