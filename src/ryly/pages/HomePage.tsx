import { Grid, Typography } from '@mui/material';
import { RylyLayout } from '../layout/RylyLayout';

export const HomePage = () => {
  return (
    <RylyLayout>
      <Grid
        container
        spacing={0}
        direction="column"
      >
        <Grid item>
          <Typography>HomePage</Typography>
        </Grid>
      </Grid>
    </RylyLayout>
  )
}
