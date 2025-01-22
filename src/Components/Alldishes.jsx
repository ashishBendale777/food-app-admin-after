import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid2, Typography } from '@mui/material';
import axios, { all } from 'axios'
import React, { useEffect, useState } from 'react'

const Alldishes = () => {
  const [allDishes, setallDishes] = useState([])

  useEffect(() => {
    let fetchDishes = async () => {
      try {
        let result = await axios.get("http://localhost:5000/api/alldishes")
        console.log("DISH", result.data);
        setallDishes(result.data)
      } catch (error) {
        console.log(error);
      }
    }

    fetchDishes()

  }, []);


  return (
    <>
      <Box sx={{
        margin: 10
      }}>
        <Grid2>
          {
            allDishes.map((item) => {
              return (
                <Grid2 size={
                  {
                    sm: 12,
                    md: 6,
                    lg: 4
                  }
                }
                  key={item._id}>
                    <item>
                      <Card>
                        <CardMedia src=''
                        component="img"
                        image={`http://localhost:5000/${item.dishImage}`}/>
                        <CardContent>
                          <Typography variant='inherit'>
                            {item.dishName}
                          </Typography>
                          <Typography variant='inherit'>
                            {item.dishprice}
                          </Typography>
                          <Typography variant='inherit'>
                            {item.dishType}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button variant='contained' color='success'>Update</Button>
                          <Button variant='contained' color='error'>Delete</Button>
                        </CardActions>
                      </Card>
                    </item>

                </Grid2>
              )
            })
          }
        </Grid2>
      </Box>
    </>
  )
}

export default Alldishes
