import React, { useState } from 'react';
import { Box, Grid, Button } from '@mui/material';

const Home = () => {
  const [clickedBoxes, setClickedBoxes] = useState([]);
  const [colors, setColors] = useState(Array(9).fill('white'));

  const handleClick = (index) => {
    if (clickedBoxes.includes(index) || clickedBoxes.length === 9) return;

    const newClickedBoxes = [...clickedBoxes, index];
    const newColors = [...colors];
    newColors[index] = 'green';
    setClickedBoxes(newClickedBoxes);
    setColors(newColors);

    if (index === 8) {
      newClickedBoxes.forEach((boxIndex, i) => {
        setTimeout(() => {
          const updatedColors = [...newColors];
          updatedColors[boxIndex] = 'orange';
          setColors(updatedColors);
        }, i * 300);
      });
    }
  };

  const handleReset = () => {
    setClickedBoxes([]);
    setColors(Array(9).fill('white'));
  };

  return (
    <div>
      <Grid container spacing={0.5} justifyContent="center" alignItems="center" style={{ height: '80vh' }}>
        {Array.from({ length: 9 }).map((_, index) => (
          <Grid item xs={2} key={index} marginLeft={20}>
            <Box
              onClick={() => handleClick(index)}
              sx={{
                width: '100px',
                height: '100px',
                border: '1px solid black',
                backgroundColor: colors[index],
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            />
          </Grid>
        ))}
      </Grid>
      <Box textAlign="center" mt={2}>
        <Button variant="contained" onClick={handleReset}>Reset</Button>
      </Box>
    </div>
  );
};

export default Home;
