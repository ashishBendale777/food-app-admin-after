import { Box, Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Adddishes = () => {

  const [dishImage, setdishImage] = useState(null)

  let handleFormSubmit = async (e) => {
    e.preventDefault()
    let formData = new FormData(e.target)
    let reqFormData = Object.fromEntries(formData.entries())
    let finalReqData = { ...reqFormData, dishimage: dishImage }
    console.log(reqFormData);

    try {
      let reqResult = await axios.post("http://localhost:5000/api/adddishes", finalReqData,{
        headers:{
          "Content-Type":"multipart/form-data"
        }
      })
      alert("Dish Added")
      console.log(reqResult);

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Box sx={{
        marginTop: 10,
        width: 500,
        height: 500,
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}>
        <Typography variant='h4'>Add Dish</Typography>

        <Box component={'form'}
          onSubmit={(e) => {
            handleFormSubmit(e)
          }}>
          <TextField
            type='text'
            variant='outlined'
            label="Dish Name"
            placeholder='Enter Dish Name'
            name="dishName" />

          <TextField
            type='text'
            variant='outlined'
            label="Dish Type"
            placeholder='Enter Dish Type'
            name="dishType" />

          <TextField
            type='text'
            variant='outlined'
            label="Dish Category"
            placeholder='Enter Dish Category'
            name="dishCategories" />

          <TextField
            type='number'
            variant='outlined'
            label="Dish Price"
            placeholder='Enter Dish Price'
            name="dishprice" />

          <TextField
            type='file'
            placeholder='Select Image'
            onChange={(e) => setdishImage(e.target.files[0])}
            name="dishimage" />

          <Button type='submit' variant='contained' color='primary'>Add Dish</Button>

        </Box>
      </Box>
    </>
  )
}

export default Adddishes
