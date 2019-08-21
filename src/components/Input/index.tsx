import React, { useState, useEffect, useRef } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';

interface IProps {
  label?: string
  onChange: (value: string) => void,
  placeholder?: string,
}

export const Input = ({
  label,
  onChange,
  placeholder,
}:IProps): JSX.Element => {

  const [labelWidth, setLabelWidth] = useState(0);
  const [value, setValue] = React.useState('');
  const labelRef = useRef<HTMLLabelElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setValue(value);
    onChange(value);
  }

  useEffect(() => {
    setLabelWidth(labelRef.current!.offsetWidth);
  }, []);

  return (
    <FormControl variant="outlined">
      <InputLabel ref={labelRef} htmlFor="component-outlined">
        {label}
      </InputLabel>
      <OutlinedInput
        id="component-outlined"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        labelWidth={labelWidth}
      />
    </FormControl>
  )
}

Input.defaultProps = {
  label: '',
  placeholder: ''
}