import React from 'react'
import { AppBar, Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useNavigate } from 'react-router-dom';
import ChecklistRtlIcon from '@mui/icons-material/ChecklistRtl';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';

const drawarWidth=240;
const MyDrawer = () => {
  const [open, setOpen]= React.useState(false);
  let navigate=useNavigate()
  const handleDrawerOpen =()=>{
      setOpen(true);
  }
  const handleDrawerClose =()=>{
      setOpen(false);
  }

  return (
    <>
    <Box sx={{display:"flex"}}  >
        <AppBar position='fixed' open={open}  >
            <Toolbar>
                <IconButton
                color='inherit'
                edge="start"
                onClick={handleDrawerOpen}
                sx={[
                    {
                        mr:2,
                    },
                    open &&{display:'none'}
                ]}
                >
                     
                  <MenuIcon/>
                  </IconButton>
                  <Typography variant='h6' noWrap component="div">
                       Tomato
                    </Typography>
                </Toolbar>
        </AppBar>
        <Drawer
        anchor='left'
        open={open}
        onClose={handleDrawerClose}
        >
        <Typography variant='h2'>
            Menu
        </Typography>
        <Divider/>
        <Box
         sx={{width:drawarWidth}}
         role="presentation"
        > 
        <List sx={{
            display:'flex',
            flexDirection:'column'
         }}>
            <ListItem>
                <ListItemButton onClick={()=>{
                    navigate("/")
                    handleDrawerClose()
                }}>
                    <ListItemIcon>
                         <DashboardIcon/>
                         </ListItemIcon>
                    <ListItemText>
                        Dashbord
                    </ListItemText>
                </ListItemButton>
            </ListItem>
         </List>
         <List>
            <ListItem>
            <ListItemButton onClick={()=>{
                    navigate("/alldishes")
                    handleDrawerClose()
                }}>
                    <ListItemIcon>
                     <DinnerDiningIcon/>
                    </ListItemIcon>
                    <ListItemText>
                        All Dish
                    </ListItemText>
                </ListItemButton>
            </ListItem>
         </List>
         <List>
            <ListItem>
            <ListItemButton onClick={()=>{
                    navigate("/adddishes")
                    handleDrawerClose()
                }}>
                    <ListItemIcon>
                         <ChecklistRtlIcon/>
                        </ListItemIcon>
                    <ListItemText>
                        AddDish
                    </ListItemText>
                </ListItemButton>
            </ListItem>
         </List>
         <List>
            <ListItem>
            <ListItemButton onClick={()=>{
                    navigate("/order")
                    handleDrawerClose()
                }}>
                    <ListItemIcon>
                         <AddShoppingCartIcon/>
                        </ListItemIcon>
                    <ListItemText>
                        Orders
                    </ListItemText>
                </ListItemButton>
            </ListItem>
         </List>
         <List>
            <ListItem>
            <ListItemButton onClick={()=>{
                    navigate("/customers")
                    handleDrawerClose()
                }}>
                    <ListItemIcon>
                         <HowToRegIcon/>
                        </ListItemIcon>
                    <ListItemText>
                        Customers
                    </ListItemText>
                </ListItemButton>
            </ListItem>
         </List>
         <List>
            <ListItem>
            <ListItemButton onClick={()=>{
                    navigate("/review")
                    handleDrawerClose()
                }}>
                    <ListItemIcon>
                         <StarIcon/>
                        </ListItemIcon>
                    <ListItemText>
                        Reviews
                    </ListItemText>
                </ListItemButton>
            </ListItem>
         </List>
         </Box>
        </Drawer>
      </Box>
</>
  )
}

export default MyDrawer