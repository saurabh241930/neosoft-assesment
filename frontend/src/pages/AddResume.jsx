import React from "react";
import PropTypes from "prop-types";
import { Typography, Grid, TextField, Box, Button } from "@mui/material";
import BasicDetailForm from "../components/BasicDetailForm";
import WorkExperienceForm from "../components/WorkExperienceForm";
import OtherDetailsForm from "../components/OtherDetailsForm";
import { useEffect } from "react";


const AddResume = (props) => {
  const stages = ["basic details", "work experience", "other details"];
  const [curr_stage, setCurrStage] = React.useState(1);
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [designation, setDesignation] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [social, setSocial] = React.useState("");
  const [profile, setProfile] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [dob, setDob] = React.useState("");
  const [yourself, setYourself] = React.useState("");
  const [experience,setExperience] = React.useState("")
  const [profile_img,setProfileImage] = React.useState("")

  const name_mapping = {
    email: setEmail,
    name: setName,
    designation: setDesignation,
    company: setCompany,
    social: setSocial,
    profile: setProfile,
    gender: setGender,
    phone: setPhone,
    location: setLocation,
    dob: setDob,
    yourself: setYourself,
    experience: setExperience,
    profile_img:setProfileImage
  };

  const pagewise_value = {
    "1": [name, email, gender, phone, location, dob, yourself],
    "2":[company,designation,experience,profile_img]
  };

  function bindInput(e) {
    if(e.target) name_mapping[e.target.name](e.target.value);
  }


  function isFormFilled(pageno) {
    if (pageno && pagewise_value[pageno])
      return pagewise_value[pageno].indexOf("") !== -1;
  }

  function handleStage(e){
    e.preventDefault()
    setCurrStage((prev) => prev + 1)


  }

  return (
    <>
      <Box
        sx={{
          margin: "0 auto",
        }}
      >
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h6">{stages[curr_stage - 1]}</Typography>
            <form style={{ textAlign: "center" }}>
              {curr_stage === 1 && <BasicDetailForm handleChange={bindInput} />}
              {curr_stage === 2 && (
                <WorkExperienceForm handleChange={bindInput}/>
              )}
              {curr_stage === 3 && (
                <OtherDetailsForm handleChange={bindInput} />
              )}

              {curr_stage === stages.length ? (
                <Button
                  sx={{
                    width: "90%",
                    margin: "1.5rem 0",
                    padding: "12px 0",
                    borderRadius: "28px",
                  }}
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Create Resume
                </Button>
              ) : (
                <Button
                  sx={{
                    width: "90%",
                    margin: "1.5rem 0",
                    padding: "12px 0",
                    borderRadius: "28px",
                  }}
                  onClick={handleStage}
                  variant="text"
                  color="primary"
                  // disabled={isFormFilled(curr_stage.toString())}
                  type="submit"
                >
                  Next
                </Button>
              )}
            </form>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

AddResume.propTypes = {};

export default AddResume;