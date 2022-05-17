import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const CustomInput = ({
 label,
 type,
 ...props
}) => {
 return (
<>
<Box
      
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label={label} type={type} variant="outlined" {...props}/> 
    </Box>
</>
 );
}

export default CustomInput;