import { FC } from 'react';
import { SearchOutlined } from '@mui/icons-material';
import { FormControl, Input, InputAdornment } from '@mui/material';

interface Props {
  placeholder: string;
}

export const SearchInput: FC<Props> = ({ placeholder }) => {
  return (
    <FormControl>
      <Input
        placeholder={ placeholder }
        endAdornment={
          <InputAdornment position="start">
            <SearchOutlined />
          </InputAdornment>
        }
      />
    </FormControl>
  )
}
