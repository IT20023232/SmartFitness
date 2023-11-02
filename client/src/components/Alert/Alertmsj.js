import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';


export const ErrorAlert = ({msj}) => {
  return (
    <Stack sx={{ width: '100%' }} spacing={0}>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        {msj} — <strong>check it out!</strong>
      </Alert>
    </Stack>
  );
}

export const WorningAlert = ({msj}) => {
  return (
    <Stack>
      <Alert severity="warning">
        <AlertTitle>Warning</AlertTitle>
        This is a warning alert — <strong>check it out!</strong>
      </Alert>
    </Stack>
  );
}

export const inforAlert = ({msj}) => {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
           <Alert severity="info">
        <AlertTitle>Info</AlertTitle>
        This is an info alert — <strong>check it out!</strong>
      </Alert>
     </Stack>
  );
}

export const SuccessAlert = ({msj}) => {
  return (
    <Stack sx={{ width: '100%' , alignContent:'center' }} spacing={2}>
    <Alert severity="success">
      <AlertTitle>Success</AlertTitle>
      {msj} — <strong>check it out!</strong>
    </Alert>
  </Stack>
  );
}

