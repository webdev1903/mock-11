import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../redux/auth/auth.actions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [input, setInput] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input);
  };

  const handleSubmit = (e) => {
    if (input.email == "" || input.password == "") {
      alert("please enter email and password");
      return;
    }
    let x = dispatch(login(input));
    x.then((res) => {
      // console.log(res.payload.response.data);
      if (res.payload.message == "Login Successful") {
        alert(res.payload.message);
        return navigate("/dashboard");
      } else {
        alert(res.payload.response.data.message);
      }
    });
    // console.log(r, input);
  };

  return (
    <FormControl
      width="30%"
      margin="auto"
      border="2px solid black"
      padding="50px 20px"
      marginTop="50px"
      borderRadius="15px"
    >
      <FormLabel>Email</FormLabel>
      <Input
        type="email"
        name="email"
        value={input.email}
        onChange={handleInputChange}
        isRequired
      />

      <FormLabel>Password</FormLabel>
      <Input
        type="text"
        name="password"
        value={input.password}
        onChange={handleInputChange}
        isRequired
      />

      <Button
        // mt={4}
        colorScheme="teal"
        // type="submit"
        margin="auto"
        marginTop="20px"
        onClick={handleSubmit}
      >
        Sign In
      </Button>
    </FormControl>
  );
}
