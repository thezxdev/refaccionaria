import { FC, useState } from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent
} from '@mui/material';

interface items {
  title: string;
  value: string;
}

interface Props {
  title: string;
  items: items[];
}

export const SelectInput: FC<Props> = ({ title, items }) => {

  const [state, setState] = useState<string>('');

  const handleChange = ({ target }: SelectChangeEvent) => {
    setState(target.value);
  }

  return (
    <FormControl variant="standard" sx={{ width: 200 }}>
      <InputLabel
        id="select-label"
      >
        { title }
      </InputLabel>
      <Select
        labelId="select-label"
        id="select"
        value={state}
        onChange={handleChange}
      >
        {
          items.map( ( { title, value } ) => (
            <MenuItem key={ value } value={ value }>{ title }</MenuItem>
          ))
        }
      </Select>
    </FormControl>
  )
}

