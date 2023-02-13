import React from "react";
import PropTypes from "prop-types";
import { Typography, Grid, TextField, Box, Button } from "@mui/material";


const OtherDetailsForm = ({ handleSubmit}) => {
  return (
    <>
      <Grid className="container">
        <Button onClick={handleSubmit}>SUBMIT</Button>
      </Grid>
    </>
  );
};

export default OtherDetailsForm;
