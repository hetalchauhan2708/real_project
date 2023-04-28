import React from 'react';
import {Box, Button, Checkbox, FormControlLabel,TextField } from '@mui/material';

const Vender = () => {
  return (
    <div>
        
        <Box  
        sx={{border:1,height:'625px',width:'600px',marginLeft:40,borderRadius:3,marginBottom:10,marginTop:10 }}>
        <div>
        <h3>Single Vender Details</h3>
        <TextField id="company_name" label="Company Name" variant="standard" style={{float:'left',marginLeft:15}}/>
        
        <TextField id="email" label="Email" variant='standard' style={{float:'right',marginRight:15}} />
        <br/><br/>
        <TextField id="phone" label="Phone" variant='standard' style={{float:'left',marginLeft:15}}/>

        <TextField id="billing_add" label="Billing Address" variant='standard' style={{float:'right',marginRight:15}}/>
        <br/><br/>
        <TextField id="shipping_Add" label="Shipping Address" variant='standard' style={{float:'left',marginLeft:15}}/>

        <TextField id="gstin" label="GSTIN" variant='standard' style={{float:'right',marginRight:15}}/>
        <br/><br/>
        <TextField id="website_url" label="Website URL" variant='standard' style={{float:'left',marginLeft:15}}/>

        <TextField id="email" label="Email" variant='standard' style={{float:'right',marginRight:15}}/>
        <br/><br/><br/>
        <h3>Point of Contact</h3>
         <TextField id="first_name" label="First Name" variant='standard' style={{float:'left',marginLeft:15}}/>
      
        <TextField id="last_name" label="Last Name" variant='standard' style={{float:'right',marginRight:15}}/>
        <br/><br/>
        <TextField id="email" label="Email" variant='standard' style={{float:'left',marginLeft:15}}/>
        
        <TextField id="phone" label="Phone" variant='standard' style={{float:'right',marginRight:15}}/> 
       <br/><br/><br/>
        <h3>Additional Details</h3>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Enable TDS" style={{float:'left',marginLeft:5}}/>
        <br/><br/>
        <TextField id="TDS_Percantage" label="TDS Percantage" variant='standard' style={{float:'left',marginLeft:15}} /> 
        <br/><br/>
        <Button variant='outlined'sx={{marginRight:1,marginTop:2}}>CANCEL</Button>&nbsp;&nbsp;&nbsp;
        <Button variant='contained' sx={{marginRight:-20,marginTop:2}}>CREATE</Button>
      </div>

    </Box>
    </div>
    
  )
}

export default Vender;