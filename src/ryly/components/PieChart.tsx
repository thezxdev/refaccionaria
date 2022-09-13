
import { Typography } from '@mui/material';
import { useMemo } from 'react';
import { Pie } from 'react-chartjs-2';

const scores = [ 300, 500, 1500, 200, 300, 400, 3000 ];
const labels = [ 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo' ];

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false
    }
  }

}

export const PieChart = () => {
  
  const data = useMemo( () => {
    return {
      labels,
      datasets: [
        {
          data: scores,
          backgroundColor: [
            'rgba(77, 59, 184, 0.57)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(231, 156, 100, 0.49)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(62, 182, 193, 0.57)'
          ],
        }
      ]
    }
  }, [] );

  return (
    <>
      <Pie data={ data } options={ options } />

      <Typography
        textAlign="center"
        mt={ 1 }
        fontWeight="bold">
          Total: { scores.reduce( ( previousValue: number, currentValue: number ) => previousValue + currentValue ) }
        </Typography>
    </>
  )
}
