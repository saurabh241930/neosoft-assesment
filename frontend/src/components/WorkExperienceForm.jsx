import React from "react";
import PropTypes from "prop-types";
import { Typography, Grid, TextField, Box, Button, Input } from "@mui/material";

const WorkExperienceForm = ({ handleChange, experiences }) => {
  const [showAddImage, setShowImage] = React.useState(false);
  const [image, setImage] = React.useState("");
  const [imageUrl, setUrl] = React.useState("");

  const uploadImage = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "upload");
    data.append("cloud_name", "dxotafsfa");
    fetch("  https://api.cloudinary.com/v1_1/dxotafsfa/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setUrl(data.url);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Grid container>
        <Grid item xs={1}></Grid>
        <Grid item xs={5}>
          <TextField
            sx={{ width: "100%", margin: "1rem 0", bgcolor: "#fff" }}
            variant="outlined"
            label="Company Name"
            type="text"
            name="company"
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={1}></Grid>

        <Grid item xs={4}>
          <TextField
            sx={{ width: "100%", margin: "1rem 0", bgcolor: "#fff" }}
            variant="outlined"
            label="Designation"
            type="text"
            name="designation"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={1}></Grid>

        <Grid item xs={1}></Grid>
        <Grid item xs={5}>
          <TextField
            sx={{ width: "100%", margin: "1rem 0", bgcolor: "#fff" }}
            variant="outlined"
            label="Total Exp"
            type="text"
            name="experience"
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={1}></Grid>

        <Grid item xs={4}>
          <TextField
            sx={{ width: "100%", margin: "1rem 0", bgcolor: "#fff" }}
            variant="outlined"
            label="Location"
            type="text"
            name="designation"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={12}>
          <Input
            onChange={handleChange}
            multiline
            rows="10"
            disableUnderline
            name="description"
            type="text"
            placeholder="Description...."
            sx={{ width: "80%", border: "solid 1px black" }}
          />
        </Grid>

        {imageUrl === "" ? (
          <Grid item xs={12}>
            {!showAddImage && (
              <Button
                variant="contained"
                onClick={() => setShowImage(true)}
                sx={{ marginTop: "20px", width: "80%", height: "100px" }}
                fullWidth
              >
                + Add Profile Image
              </Button>
            )}
            {showAddImage && (
              <>
                {" "}
                <Input
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                />
                <Button onClick={uploadImage}>Upload</Button>{" "}
              </>
            )}
          </Grid>
        ) : (
          <Grid item xs={12}>
            {" "}
            <img
              style={{ maxHeight: "100%", maxWidth: "100%" }}
              src={imageUrl}
              alt="ss"
            />{" "}
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default WorkExperienceForm;
