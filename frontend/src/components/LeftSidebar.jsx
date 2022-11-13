import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import { TextareaAutosize, Typography } from "@mui/material";
import {
  Button,
  Grid,
  Hidden,
  IconButton,
  Input,
  useTheme,
} from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { logout } from "../redux/authSlice";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import Modal from "./Modal";
import { getPosts } from "../redux/postSlice";
import { addPost } from "../api";
import {Work} from "@mui/icons-material"
import { useTranslation } from 'react-i18next'


export default function LeftSidebar() {
  const theme = useTheme();

  const languages = [
    { value: '', text: "Options" },
    { value: 'en', text: "English" },
    { value: 'hi', text: "Hindi" },
    { value: 'mr', text: "Marathi" }
    
]

const { t } = useTranslation();
const [lang, setLang] = React.useState('en');

const handleChange = e => { 
  setLang(e.target.value);
  let loc = "http://localhost:3000/";
  window.location.replace(loc + "?lng=" + e.target.value);
}


  

  const dispatch = useDispatch();
  const { _id } = JSON.parse(localStorage.getItem("login"));

  const [openModal, setOpenModal] = React.useState(false);
  const [showAddImage, setShowImage] = React.useState(false);
  const [image, setImage] = React.useState("");
  const [imageUrl, setUrl] = React.useState("");
  const handleModalClose = () => {
    setOpenModal(false);
    setImage("")
    setShowImage(false)
  };

  const handleModalOpen = () => {
    setOpenModal(true);
  };

  const [postText, setPostText] = React.useState("");
  const handleAddPost = async () => {
    const data = await addPost({ text: postText , imageUrl});
    if (data) {
      dispatch(getPosts());
      setPostText("");
    }
  };

  const uploadImage = () => {
    const data = new FormData()
    data.append("file", image)
    data.append("upload_preset", "upload")
    data.append("cloud_name", "dxotafsfa")
    fetch("  https://api.cloudinary.com/v1_1/dxotafsfa/image/upload", {
      method: "post",
      body: data
    })
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        setUrl(data.url)
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <Box sx={{ height: "100vh", maxWidth: "100%" }}>
      {/* <select value={lang} onChange={handleChange}>
                {languages.map(item => {
                    return (<option key={item.value} 
                    value={item.value}>{item.text}</option>);
                })}
          </select> */}
        <Box textAlign="center">
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "inherit",
              backgroundColor: "inherit",
            }}
          >
            <Typography variant="h4">Neosoft</Typography>
          </Link>
        </Box>
        <List>
          <NavLink
            to="/"
            style={{
              textDecoration: "none",
              color: "inherit",
              backgroundColor: "inherit",
            }}
          >
            <ListItem
              button
              sx={{
                borderRadius: "28px",
                margin: ".5rem 0",
              }}
            >
              <ListItemIcon>
                <HomeIcon fontSize="medium" style={{color:"white"}} />
              </ListItemIcon>
              <Hidden lgDown>
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: "18px",
                    color: "white",
                  }}
                  primary="HOME"
                />
              </Hidden>
            </ListItem>
          </NavLink>
          <NavLink
            to="/add"
            style={{
              textDecoration: "none",
              color: "inherit",
              backgroundColor: "inherit",
            }}
          >

            <ListItem
              button
              sx={{
                borderRadius: "28px",
                margin: ".5rem 0",
              }}
            >
              <ListItemIcon>
                <ChatBubbleOutlineIcon fontSize="medium" style={{color:"white"}} />
              </ListItemIcon>
              <Hidden lgDown>
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: "18px",
                    color: "white",
                  }}
                  primary="ADD CV"
                />
              </Hidden>
            </ListItem>

          </NavLink>
          <NavLink
            to={`/profile/${_id}`}
            style={{
              textDecoration: "none",
              color: "inherit",
              backgroundColor: "inherit",
            }}
          >
            <ListItem
              button
              sx={{
                borderRadius: "28px",
                margin: ".5rem 0",
              }}
            >
              <ListItemIcon>
                <PersonOutlineIcon fontSize="medium" style={{color:"white"}} />
              </ListItemIcon>
              <Hidden lgDown>
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: "18px",
                    color: "white",
                  }}
                  primary="PROFILE"
                />
              </Hidden>
            </ListItem>
          </NavLink>
          <ListItem
            id="basic-button"
            button
            sx={{
              borderRadius: "28px",
              margin: ".5rem 0",
            }}
            onClick={() => {
              dispatch(logout());
            }}
          >
            <ListItemIcon>
              <LogoutIcon fontSize="medium" style={{color:"white"}} />
            </ListItemIcon>
            <Hidden lgDown>
              <ListItemText
                primaryTypographyProps={{
                  fontSize: "18px",
                  color: "white",
                }}
                primary="LOGOUT"
              />
            </Hidden>
          </ListItem>
        </List>
      </Box>

    </>
  );
}
