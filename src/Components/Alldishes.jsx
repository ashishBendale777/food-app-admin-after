import { Hardware } from '@mui/icons-material';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, Grid2, TextField, Typography } from '@mui/material';
import axios, { all } from 'axios'
import React, { useEffect, useState } from 'react'

const Alldishes = () => {
  const [allDishes, setallDishes] = useState([])
  const [openDeleteDia, setopenDeleteDia] = useState(false)

  const [updatedPrice, setupdatedPrice] = useState(0)


  const [selectedDish, setselectedDish] = useState(null)
  const [isUpdateOpen, setisUpdateOpen] = useState(false)

  let handleDeleteOpen = () => {
    setopenDeleteDia(true)
  }
  let handleDeleteClose = () => {
    setopenDeleteDia(false)
  }


  //handle update diolog open
  let handleUpdateOpen = () => {
    setisUpdateOpen(true)
  }
  let handleUpdateClose = () => {
    setisUpdateOpen(false)
  }

  let deleteDishRequest = async () => {
    let deleteReq = {
      dishId: selectedDish._id
    }
    console.log(deleteReq);
    try {
      let resDelete = await axios.post("http://localhost:5000/api/deletedish", deleteReq)
      handleDeleteClose()
      console.log(resDelete);
      setselectedDish(null)
    } catch (error) {
      console.log(error);
      alert("Error on delete")
    }
  }

  let updatePriceRequest = async () => {
    let reqBody = {
      dishId: selectedDish._id,
      dishprice: Number(updatedPrice)
    }

    try {
      let result = await axios.put("http://localhost:5000/api/updatedish", reqBody)
      handleUpdateClose()
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

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
                        image={`http://localhost:5000/${item.dishImage}`} />
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
                        <Typography variant='inherit'>
                          {item._id}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button variant='contained' color='success'
                          onClick={(e) => {
                            handleUpdateOpen()
                            setselectedDish(item)
                          }}
                        >Update</Button>
                        <Button variant='contained' color='error'
                          onClick={() => {
                            setselectedDish(item)
                            handleDeleteOpen()
                          }}>Delete</Button>
                      </CardActions>
                    </Card>
                  </item>

                </Grid2>
              )
            })
          }
        </Grid2>

        <Dialog open={openDeleteDia}
          onClose={handleDeleteClose}>
          <DialogTitle>
            Message
          </DialogTitle>
          <DialogContent>
            Are sure want to delete this dish?
          </DialogContent>
          <DialogActions>
            <Button variant='contained' color='primary'
              onClick={() => deleteDishRequest()}>YES</Button>
            <Button variant='contained' color='warning'
              onClick={() => {
                handleDeleteClose()
              }}>NO</Button>
          </DialogActions>


        </Dialog>


        <Dialog open={isUpdateOpen}
          onClose={handleUpdateClose}>
          <DialogTitle>
            Update Dish Price
          </DialogTitle>
          <DialogContent>
            <TextField fullWidth onChange={(e) => setupdatedPrice(e.target.value)} placeholder="Enter Price" variant='outlined' label="Enter Update Price"
              type='text' />
          </DialogContent>
          <DialogActions>
            <Button variant='contained' color='primary'
              onClick={() => { updatePriceRequest() }}>Update</Button>
            <Button variant='contained' color='warning'
              onClick={() => {
                handleUpdateClose()
              }}>Close</Button>
          </DialogActions>


        </Dialog>


      </Box>
    </>
  )
}

export default Alldishes
