import { Grid, Typography } from '@mui/material';
import { RylyLayout } from '../layout/RylyLayout';

export const ProductPage = () => {
  return (
    <RylyLayout>
      <Grid
        container
        spacing={0}
        direction="column"
      >
        <Grid item>
          <Typography>ProductPage</Typography>
        </Grid>
      </Grid>
    </RylyLayout>
  )
}
