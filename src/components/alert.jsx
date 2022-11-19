import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function ErrorAlert() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error">This is an error alert — check it out!</Alert>
    </Stack>
  );
}

export default function WarningAlert() {
    return (
    <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="warning">This is a warning alert — check it out!</Alert>
    </Stack>
    );
}

export default function InfoAlert() {
    return (
    <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="info">This is a info alert — check it out!</Alert>
    </Stack>
    );
}

export default function SuccessAlert() {
    return (
    <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="success">This is a success alert — check it out!</Alert>
    </Stack>
    );
}