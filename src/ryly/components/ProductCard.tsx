import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material';

export const ProductCard = () => {
  return (
    <Card sx={{
      maxWidth: 300,
      borderTopLeftRadius: 50
    }}>
      <CardMedia
        component="img"
        height="200"
        image="https://dummyimage.com/600x400/000/fff"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Nombre Producto
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptate distinctio quae nesciunt. Facere odit
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between', margin: '0 20px' }}>
        <Typography sx={{ fontSize: 20, fontWeight: 'bold' }}>Cantidad: 20</Typography>
        <Typography sx={{ fontSize: 20, fontWeight: 'bold' }}>$ 100</Typography>
      </CardActions>
    </Card>
  )
}
