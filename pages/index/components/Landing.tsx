import { useState, useEffect } from "react";
import {
  Card,
  Text,
  useModal,
  Modal,
  Button,
  Form,
  Input,
  Box,
} from "bushido-strap";

import { useLoginMutation } from "../../../lib/graphql/mutations/login.graphql";
import { useForm } from "react-hook-form";
// import jwt from "jsonwebtoken";

const Landing = ({ user }: any) => {
  const { handleSubmit, register } = useForm();
  const [login, { data }] = useLoginMutation();
  const [isActive, toggle] = useModal();
  const [isLogin, setIsLogin] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  function LoginButton() {
    toggle();
    setIsSignUp(false);
    setIsLogin(true);
  }

  function SignUpButton() {
    toggle();
    setIsLogin(false);
    setIsSignUp(true);
  }

  function onSubmit({ username, password }: any) {
    login({
      variables: {
        data: {
          username: username,
          password: password,
        },
      },
    });
    // console.log("LOGIN DATA", String(data?.login.token));
  }

  useEffect(() => {
    if (String(data?.login.token)) {
      localStorage.setItem("token", String(data?.login.token));
      console.log("GET TOKEN", localStorage.getItem("token"));
      // setToken(jwt.decode(String(data?.login.token)));
    }
  }, [data?.login.token]);

  return (
    <>
      <Card>
        <Text bold xlf>
          Welcome {user?.username}!
        </Text>
        <Button onClick={LoginButton}>Login!</Button>
        <Button onClick={SignUpButton}>Sign Up!</Button>
        <Modal isActive={isActive} toggle={toggle}>
          {isLogin ? (
            <>
              <Text>Login</Text>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Input
                  type="text"
                  name="username"
                  ref={register}
                  placeholder="Username"
                />
                <Box h="2rem" />
                <Input
                  type="password"
                  name="password"
                  ref={register}
                  placeholder="Password"
                />
                <Button>Submit</Button>
              </Form>
            </>
          ) : isSignUp ? (
            <>
              <Text>Sign Up</Text>
              <Form>
                <Input type="text" name="username" placeholder="Username" />
                <Box h="2rem" />
                <Input type="password" name="password" placeholder="Password" />
                <Button>Submit</Button>
              </Form>
            </>
          ) : (
            <Text>Loading...</Text>
          )}
        </Modal>
      </Card>
    </>
  );
};

export default Landing;
