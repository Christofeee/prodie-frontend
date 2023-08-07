import React, { useState, useEffect } from 'react';
import '../index.css';
import Grid from '@mui/material/Unstable_Grid2';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import axios from "axios";
import { redirect, useNavigate } from 'react-router-dom';


import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from 'react-leaflet'



const CreatePreorder = () => {

  const [nrc1, setNrc1] = React.useState('12');
  const [nrc2, setNrc2] = React.useState('');
  const [nrc3, setNrc3] = React.useState('');
  const [nrc4, setNrc4] = React.useState('');

  const [name, setName] = React.useState('');
  const [mobilePhone, setMobilePhone] = React.useState('');
  const [secondaryPhone, setSecondaryPhone] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [latitude, setLatitude] = React.useState('');
  const [longitude, setLongitude] = React.useState('');
  const [product, setProduct] = React.useState('');
  const navigate = useNavigate();
  

  const handleSubmit  = () => {

    if ( nrc1 && nrc2 && nrc3 && nrc4 && name && mobilePhone && email && address && product && latitude && longitude) {
      console.log("good information")
    } else {
      console.log("Bad information")
      alert("Please fill in all required fields before submitting the form.");
      return;
    }

    axios.post('http://localhost:8000/api/preorders',
                { address:address,
                  nrc: nrc1+"/"+nrc2+"("+nrc3+")"+nrc4,
                  email:email,
                  latitude:latitude,
                  longitude:latitude,
                  name:name,
                  phone:mobilePhone,
                  secondary_phone:secondaryPhone,
                  product_id:product
                })
            .then(response => {
                console.log(response.data);
                navigate("/preorderlist");
            })
            .catch(error => {
                console.log(error);
            });
  }


    // const handleChange = (event) => {
    //   setAge(event.target.value);
    // };


  const ContainerStyle = {
      backgroundColor: 'white',
      borderRadius: '5px',
      margin: '30px 50px 50px 50px',
      padding: '10px',
  };

  const [position, setPosition] = useState(null)
  
  const mainHeaderStyle = {
      marginLeft:'50px'
  };
  useEffect(() => {
    if (position)
    {setLatitude(position.lat)
    setLongitude(position.lng)}
    
  }, [position]);
  function LocationMarker() {
    
    const map = useMapEvents({
      click(e) {
        console.log("click good")
        console.log(e.latlng)
        setPosition(e.latlng)
        
        // map.locate()
      },
      // locationfound(e) {
      //   console.log("location targeted")

      //   setPosition(e.latlng)
      //   console.log(e.latlng)

      //   map.flyTo(e.latlng, map.getZoom())
      // },
    })
  
    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    )
  }

  return (
    <div className="App">
      <Grid container style={ContainerStyle}>
        <Grid md={12}>
          {/* header */}
          <header className="App-header">
            <h2 style={mainHeaderStyle}>Create Preorder</h2>
          </header>
        </Grid>
        <Grid md={12}>
          {/* NRC field */}
          <fieldset className='custom_fieldset'>
            <legend>
              <strong>NRC<span style={{color:"red"}}>*</span></strong>
            </legend>
            {/* dropdown1 */}
            {/* <Grid container spacing={2} style={ContainerStyle}> */}
              <Grid container display={'flex'} alignItems="center">
                <Grid md={2}>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <Select
                    value={nrc1}
                    onChange={(event) => setNrc1(event.target.value)}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                  >
                    <MenuItem value={'12'}>12</MenuItem>
                    <MenuItem value={'13'}>13</MenuItem>
                    <MenuItem value={'14'}>14</MenuItem>
                  </Select>
                </FormControl>
                </Grid>
                <Grid md={1}>
                <Box>
                  /
                </Box>
                </Grid>
                <Grid md={3}>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <Select
                    value={nrc2}
                    onChange={(event) => setNrc2(event.target.value)}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={'LAMATA'}>LAMATA</MenuItem>
                    <MenuItem value={'DAGANA'}>DAGANA</MenuItem>
                    <MenuItem value={'LAMANA'}>LAMANA</MenuItem>
                  </Select>
                </FormControl>
                </Grid>
                <Grid md={3}>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <Select
                    value={nrc3}
                    onChange={(event) => setNrc3(event.target.value)}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem> 
                    <MenuItem value={'N'}>N</MenuItem>
                    <MenuItem value={'C'}>C</MenuItem>
                    
                  </Select>
                </FormControl>
                </Grid>
                <TextField id="outlined-basic" label="numbers" variant="outlined"
                  value={nrc4}
                  onChange={(event) => setNrc4(event.target.value)}
                  inputProps={{ 'aria-label': 'Without label' }} />
              </Grid>
              {/* <Grid xs={2}>
                
              </Grid> */}
            {/* </Grid> */}
            
            
          </fieldset>
        </Grid>
        <Grid md={3}>
          {/* Name field */}
          <fieldset className='custom_fieldset'>
            <legend>
              <strong>Name<span style={{color:"red"}}>*</span></strong>
            </legend>
            {/* dropdown1 */}
            {/* <Grid container spacing={2} style={ContainerStyle}> */}
              <Grid xs={12} display={'flex'} alignItems="center">
                <TextField id="outlined-basic" label="Enter name" variant="outlined"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  inputProps={{ 'aria-label': 'Without label' }} />
              </Grid>
              {/* <Grid xs={2}>
                
              </Grid> */}
            {/* </Grid> */}
          </fieldset>
        </Grid>
        <Grid md={3}>
          {/* Mobile Phone field */}
          <fieldset className='custom_fieldset'>
            <legend>
              <strong>Mobile Phone<span style={{color:"red"}}>*</span></strong>
            </legend>
            {/* dropdown1 */}
            {/* <Grid container spacing={2} style={ContainerStyle}> */}
              <Grid xs={12} display={'flex'} alignItems="center">
                <TextField id="outlined-basic" label="Enter mobile phone" variant="outlined"
                  value={mobilePhone}
                  onChange={(event) => setMobilePhone(event.target.value)}
                  inputProps={{ 'aria-label': 'Without label' }} />
              </Grid>
              {/* <Grid xs={2}>
                
              </Grid> */}
            {/* </Grid> */}
          </fieldset>
        </Grid>
        <Grid md={3}>
          {/* Secondary Phone */}
          <fieldset className='custom_fieldset'>
            <legend>
              <strong>Secondary Phone</strong>
            </legend>
            {/* dropdown1 */}
            {/* <Grid container spacing={2} style={ContainerStyle}> */}
              <Grid xs={12} display={'flex'} alignItems="center">
                <TextField id="outlined-basic" label="Enter secondary phone" variant="outlined"
                  value={secondaryPhone}
                  onChange={(event) => setSecondaryPhone(event.target.value)}
                  inputProps={{ 'aria-label': 'Without label' }} />
              </Grid>
              {/* <Grid xs={2}>
                
              </Grid> */}
            {/* </Grid> */}
          </fieldset>
        </Grid>
        <Grid md={3}>
          {/* Email */}
          <fieldset className='custom_fieldset'>
            <legend>
              <strong>Email<span style={{color:"red"}}>*</span></strong>
            </legend>
            {/* dropdown1 */}
            {/* <Grid container spacing={2} style={ContainerStyle}> */}
              <Grid xs={12} display={'flex'} alignItems="center">
                <TextField id="outlined-basic" label="Enter email" variant="outlined" 
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  inputProps={{ 'aria-label': 'Without label' }}/>
              </Grid>
              {/* <Grid xs={2}>
                
              </Grid> */}
            {/* </Grid> */}
          </fieldset>
        </Grid>

        <Grid md={5} style={{padding:"50px"}}>
          <Box style={{width:"100%",height:"400px"}}>
          {/* Map field */}
            <MapContainer style={{height:"100%"}}  center={[16.813452831118475, 96.13449017986916]} zoom={15}>
              <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  // attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <LocationMarker />
            </MapContainer>
          </Box>
          
        </Grid>
        <Grid md={5} style={{padding:"50px"}}>
        <Grid md={2}>
          {/* Address field */}
        <fieldset className='custom_fieldset'>
          <legend>
            <strong>Address<span style={{color:"red"}}>*</span></strong>
          </legend>
          {/* dropdown1 */}
          {/* <Grid container spacing={2} style={ContainerStyle}> */}
            <Grid xs={12} display={'flex'} alignItems="center">
              <TextField id="outlined-basic" label="Enter address" variant="outlined" 
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              inputProps={{ 'aria-label': 'Without label' }}/>
            </Grid>
            {/* <Grid xs={2}>
              
            </Grid> */}
          {/* </Grid> */}
        </fieldset>
        </Grid>
        <Grid md={2}>
          {/* Product field*/}
        <fieldset className='custom_fieldset'>
          <legend>
            <strong>Product<span style={{color:"red"}}>*</span></strong>
          </legend>
          {/* dropdown1 */}
          {/* <Grid container spacing={2} style={ContainerStyle}> */}
          <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                  value={product}
                  onChange={(event) => setProduct(event.target.value)}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={1}>Product A</MenuItem>
                  <MenuItem value={2}>Product B</MenuItem>
                  <MenuItem value={3}>Product C</MenuItem>
                </Select>
              </FormControl>
            {/* <Grid xs={2}>
              
            </Grid> */}
          {/* </Grid> */}
        </fieldset>
        </Grid>
        <Grid md={2}>{/* latitude field */}
        <fieldset className='custom_fieldset'>
          <legend>
            <strong>Latitude<span style={{color:"red"}}>*</span></strong>
          </legend>
          {/* dropdown1 */}
          {/* <Grid container spacing={2} style={ContainerStyle}> */}
            <Grid xs={12} display={'flex'} alignItems="center">
              <TextField id="outlined-basic" label="" variant="outlined"
                value={latitude}
                onChange={(event) => setLatitude(event.target.value)}
                inputProps={{ 'aria-label': 'Without label' }} disabled/>
            </Grid>
            {/* <Grid xs={2}>
              
            </Grid> */}
          {/* </Grid> */}
        </fieldset></Grid>
        <Grid md={2}>{/* Longitude field */}
        <fieldset className='custom_fieldset'>
          <legend>
            <strong>Longitude<span style={{color:"red"}}>*</span></strong>
          </legend>
          {/* dropdown1 */}
          {/* <Grid container spacing={2} style={ContainerStyle}> */}
            <Grid xs={12} display={'flex'} alignItems="center">
              <TextField id="outlined-basic" label="" variant="outlined"
                value={longitude}
                onChange={(event) => setLongitude(event.target.value)}
                inputProps={{ 'aria-label': 'Without label' }} disabled/>
            </Grid>
            {/* <Grid xs={2}>
              
            </Grid> */}
          {/* </Grid> */}
        </fieldset>
        <span style={{fontWeight:"bold",color:'#ff6d00' }}>Click on the map to get Latitude and Longitude</span></Grid>
        </Grid>
        
        <Grid md={12} paddingRight={"100px"} paddingBottom={"100px"} justifyContent={"right"} display={"flex"}>
          {/* button field */}
          <Button onClick={handleSubmit} variant="contained" endIcon={<SendIcon />} style={{padding:"20px 50px",fontSize:"large"}}>
            Save
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};


 
export default CreatePreorder;