import React, { useState, useEffect } from 'react';
import '../index.css';
import { DataGrid, GridToolbarQuickFilter } from '@mui/x-data-grid';
//for backend connection
import axios from "axios";
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import { redirect, useNavigate } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';
import Grid from '@mui/material/Unstable_Grid2';



const ContainerStyle = {
  backgroundColor: 'white',
  borderRadius: '5px',
  margin: '30px 50px 50px 50px',
  padding: '10px',
  height:"500px", 
  width: '90%'
};

function QuickSearchToolbar() {
  
  return (
    <Box
      sx={{
        p: 0.5,
        pb: 0,
      }}
    >
      <GridToolbarQuickFilter />
    </Box>
  );
}

export default function PreorderList() {
    const [preorders, setPreorders] = React.useState([]);
    const navigate = useNavigate();
    

    useEffect(() => {
        // Axios API call
            axios.get('http://localhost:8000/api/preorders')
            .then(response => {
                console.log(response.data);
                setPreorders(response.data);
            })
            .catch(error => {
                console.log(error);
            });
        }, []);

  return (
    <div style={ContainerStyle}>
      
    <DataGrid
      columns={[{ field: 'id', headerName: 'ID' },
                { field: 'name', headerName: 'Customer Name' },
                { field: 'phone', headerName: 'Phone' },
                { field: 'secondary_phone', headerName: 'Secondary Phone' },
                { field: 'email', headerName: 'Email' },
                { field: 'address', headerName: 'Address' },
                { field: 'latitude', headerName: 'Latitude' },
                { field: 'longitude', headerName: 'Longitude' },
                { field: 'product_name', headerName: 'Product'},
                { field: 'product_price', headerName: 'Price'}]}
      rows= {preorders}
      slots={{ toolbar: QuickSearchToolbar }}
      // initialState={{filter: {
      //   filterModel: {
      //     items: [],
      //     quickFilterValues: [''],
      //   },
      // }}}
      // slots={{ toolbar: GridToolbar }}
      //   slotProps={{
      //     toolbar: {
      //       showQuickFilter: true,
      //       quickFilterProps: { debounceMs: 500 },
      //     },
      //   }}
      //   disableColumnFilter
      //   disableColumnSelector
      //   disableDensitySelector
    />
    <Button onClick={()=>{navigate('/')}} variant="contained" endIcon={<SendIcon />}>
      Creat Order
    </Button>
   
  </div>
  );

  
}