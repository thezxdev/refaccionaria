import { Grid } from '@mui/material';
import { BarChart } from '../components/BarChart';
import { RylyLayout } from '../layout/RylyLayout';
import { PieChart } from '../components/PieChart';

export const HomePage = () => {
  return (
    <RylyLayout>
      <Grid
        container
        spacing={0}
        // direction="column"
      >
        <Grid
          container
          spacing={0}
          sx={{
            flexDirection: {
              xs: 'column',
              sm: 'row',
              md: 'row'
            },
            justifyContent: {
              xs: 'center',
              sm: 'space-evenly',
              md: 'space-around'
            },
            alignContent: {
              xs: 'center',
              sm: 'flex-start'
            }
          }}
        >
          <Grid
            item
            // alignSelf="flex-end"
            // alignContent="center"
            sx={{
              width: {
                xs: '60%',
                sm: '50%',
                md: '45%'
              },
              alignSelf: {
                sm: 'flex-end'
              }
            }}
          >
            <BarChart />
          </Grid>

          <Grid
            item
            width="25%"
            sx={{
              width: {
                xs: '60%',
                sm: '35%',
                md: '25%'
              }
            }}
          >
            <PieChart />
          </Grid>
        </Grid>

      </Grid>

      <Grid
        container
        spacing={0}
        sx={{
          justifyContent: {
            xs: 'center',
            md: 'flex-start'
          },
          marginLeft: {
            md: 5
          }
        }}
      >
        <Grid
          item
          sx={{
            width: {
              xs: '80%',
              sm: '60%',
              md: '50%'
            }
          }}
        >
          <BarChart />
        </Grid>
      </Grid>
    </RylyLayout>
  )
}
