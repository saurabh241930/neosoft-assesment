import { CircularProgress, Grid, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect,useMemo } from "react";
import AssistantIcon from "@mui/icons-material/Assistant";
import Post from "../components/Post";
import {  useSelector } from "react-redux";
import { getPosts } from "../redux/postSlice";
import AddPost from "../components/AddPost";
import useLazyFetch from "../hooks/useLazyFetch";
import Avatar from '@mui/material/Avatar';


export default function Home() {
  const { status, posts } = useSelector((state) => state.post);
  const {loading,loadMoreRef} = useLazyFetch(getPosts)


const renderedPostList = useMemo(() => (
  posts.map((post) => {
    return( <Post key={post._id.toString()} post={post} />)
  })
), [posts]) 

  
  return (
    <Box>
      <Box borderBottom="1px solid #ccc" padding="8px 20px">
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h6">Home</Typography>
          </Grid>
          <Grid item>
            <IconButton>
              <AssistantIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
      <Box height="92vh" sx={{ overflowY: "scroll" }}>
        <AddPost />
        <Box textAlign="center" marginTop="1rem">
          {status === "loading" && (
            <CircularProgress size={20} color="primary" />
          )}
        </Box>
        {renderedPostList}
        <div  ref={loadMoreRef}>{loading && <p>loading...</p>}</div>
      </Box>
    </Box>
  );
}
