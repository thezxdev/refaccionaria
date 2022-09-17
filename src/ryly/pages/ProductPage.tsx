import { Button, Grid, TextareaAutosize, TextField, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { CarouselItem } from '../components/CarouselItem';
import { SelectInput } from '../components/SelectInput';
import { RylyLayout } from '../layout/RylyLayout';

const items = [
  {
    title: 'Proveedor 1',
    value: 'supplier1'
  },
  {
    title: 'Proveedor 2',
    value: 'supplier2'
  },
  {
    title: 'Proveedor 3',
    value: 'supplier3'
  },
];

const carouselItems = [
  {
    url: 'https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ'
  },
  {
    url: 'https://i.picsum.photos/id/101/2621/1747.jpg?hmac=cu15YGotS0gIYdBbR1he5NtBLZAAY6aIY5AbORRAngs'
  },
  {
    url: 'https://i.picsum.photos/id/1024/1920/1280.jpg?hmac=-PIpG7j_fRwN8Qtfnsc3M8-kC3yb0XYOBfVzlPSuVII'
  }
];

export const ProductPage = () => {
  return (
    <RylyLayout>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="space-evenly"
      >
        <Grid item sx={{ width: '500px' }}>
          <Carousel>
            {
              carouselItems.map( ( item, i ) => (
                <CarouselItem key={i} item={item} />
              ))
            }
          </Carousel>
        </Grid>

        <Grid item container flexDirection="column" width={300}>
          {/* <form style={{ display: 'flex', flexDirection: 'column', width: '100%' }}> */}
            <TextField
              label="Nombre"
              variant="filled"
              placeholder="Nombre"
              fullWidth
              required
              sx={{
                mb: 2
              }}
            />

            <TextField
              label="Precio"
              variant="filled"
              placeholder="Precio"
              type="number"
              required
              sx={{
                mb: 2
              }}
            />

            <TextField
              label="Cantidad"
              variant="filled"
              placeholder="Cantidad"
              required
              sx={{
                mb: 2
              }}
            />

            <SelectInput
              items={ items }
              title="Proveedor"
              
            />

            <TextareaAutosize
              minRows={3}
              placeholder="Descripción del producto"
              required
              style={{
                margin: '16px 0'
              }}
            />

            <Button
              variant="outlined"
            >
              Guardar
            </Button>

          {/* </form> */}
        </Grid>
      </Grid>
    </RylyLayout>
  )
}
