import Login from "./pages/Login";

import Layout from "./components/Layout";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute";
import { Route, Switch } from "react-router";
import Home from "./pages/Home";
import PostDetails from "./pages/PostDetails";
import Messages from "./pages/Messages";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { setAuth } from "./redux/authSlice";
import Conversation from "./pages/Conversation";
import AddResume from "./pages/AddResume";


function App() {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    if ("login" in localStorage) {
      const login = JSON.parse(localStorage.getItem("login"));
      axios.defaults.headers.common["authorization"] = `Bearer ${login.token}`;
    }
  }, [isLoggedIn]);

  useEffect(() => {
    const { isLoggedIn } = JSON.parse(localStorage.getItem("login")) || {};
    if (isLoggedIn) {
      dispatch(setAuth({ isLoggedIn }));
    }
  }, [dispatch, isLoggedIn]);
  return (
    <Switch>
      <PrivateRoute exact path="/profile/:id">
        <Layout>
          <Profile />
        </Layout>
      </PrivateRoute>
      <PrivateRoute exact path="/posts/:id">
        <Layout>
          <PostDetails />
        </Layout>
      </PrivateRoute>
      <PrivateRoute exact path="/">
        <Layout>
          <Home />
        </Layout>
      </PrivateRoute>
      <PrivateRoute exact path="/add">
        <Layout>
          <AddResume />
        </Layout>
      </PrivateRoute>
      <PrivateRoute exact path="/messages/:id">
        <Layout>
          <Conversation />
        </Layout>
      </PrivateRoute>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  );
}

export default App;
