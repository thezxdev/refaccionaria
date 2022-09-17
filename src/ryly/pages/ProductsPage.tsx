import { Grid } from '@mui/material';
import { ProductCard } from '../components/ProductCard';
import { SearchInput } from '../components/SearchInput';
import { SelectInput } from '../components/SelectInput';
import { RylyLayout } from '../layout/RylyLayout';

const items = [
  {
    title: 'Categoría 1',
    value: 'category1'
  },
  {
    title: 'Categoría 2',
    value: 'category2'
  },
  {
    title: 'Categoría 3',
    value: 'category3'
  },
];

export const ProductsPage = () => {


  return (
    <RylyLayout>
      <Grid
        container
        justifyContent="space-between"
      >
        <Grid item alignSelf="flex-end">
          <SearchInput placeholder="Buscar Producto" />
        </Grid>

        <Grid item>
          <SelectInput items={items} title="Categorías" widthSize={200} />
        </Grid>
      </Grid>

      <Grid
        container
        gap={2}
        sx={{
          margin: '15px auto',
          width: '80%',
          justifyContent: {
            xs: 'center',
            sm: 'space-around',
            md: 'space-evenly',
            lg: 'normal'
          },
        }}
      >
        {
          [1,2,3,4,5].map( val => (
            <Grid 
              item
              key={ val }
            >
              <ProductCard />
            </Grid>
          ))
        }
      </Grid>
    </RylyLayout>
  )
}