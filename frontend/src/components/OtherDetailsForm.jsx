import React from 'react'
import PropTypes from "prop-types";
import { Typography, Grid, TextField, Box,Button } from "@mui/material";

const OtherDetailsForm = () => {
  return (
    <>
        <TextField
          
          sx={{ width: "100%", margin: "1rem 0", bgcolor: "#fff" }}
          variant="outlined"
          label="Social links"
          type="email"
          required
          name="social"
        />
        <TextField
          sx={{ width: "100%", margin: "1rem 0", bgcolor: "#fff" }}
          variant="outlined"
          label="Profile Photo"
          type="file"
          required
          name="profile"
        />
    </>
  )
}

export default OtherDetailsForm