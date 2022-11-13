import React from "react";
import PropTypes from "prop-types";
import {
  Typography,
  Grid,
  TextField,
  Box,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Input,
} from "@mui/material";

const BasicDetailForm = ({ handleChange }) => {
  return (
    <>
      <Grid container>
        <Grid item xs={6}>
          <TextField
            sx={{ width: "90%", margin: "1rem 0", bgcolor: "#fff" }}
            variant="standard"
            label="Full Name"
            type="text"
            name="name"
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            sx={{ width: "90%", margin: "1rem 0", bgcolor: "#fff" }}
            variant="standard"
            label="Email"
            type="email"
            name="email"
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={6}>
          <FormControl fullWidth sx={{ width: "90%", margin: "1rem 0", bgcolor: "#fff" }}>
            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              variant="standard"
              label="Select gender"
              name="gender"
              onChange={handleChange}
            >
              <MenuItem value={"male"}>male</MenuItem>
              <MenuItem value={"female"}>female</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={6}>
          <TextField
            sx={{ width: "90%", margin: "1rem 0", bgcolor: "#fff" }}
            variant="standard"
            label="Phone"
            type="number"
            name="phone"
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            sx={{ width: "90%", margin: "1rem 0", bgcolor: "#fff" }}
            variant="standard"
            label="Location"
            type="text"
            name="location"
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            sx={{ width: "90%", margin: "1rem 0", bgcolor: "#fff" }}
            variant="standard"
            label="Date of birth"
            type="text"
            name="dob"
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12}>
          <Input
            onChange={handleChange}
            name="yourself"
            multiline
            rows="15"
            disableUnderline
            type="text"
            placeholder="About yourself...."
            sx={{ width: "90%", border: "solid 1px black" }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default BasicDetailForm;
