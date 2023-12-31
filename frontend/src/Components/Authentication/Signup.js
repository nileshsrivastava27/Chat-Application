import { FormControl, FormLabel, VStack , Input, InputGroup, InputRightElement, Button} from '@chakra-ui/react'
import React, {useState} from 'react'
import { useToast } from "@chakra-ui/toast";
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import { set } from 'mongoose';

const Signup = () => {
    const [show, setShow] = useState(false);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [loading, setloading] = useState(false);
    const toast = useToast();
    const history = useHistory();

    const handleClick = () => setShow(!show);


    const submitHandler = async () => {
        setloading(true);
        if (!name || !email || !password || !confirmPassword) {
            toast({
              title: "Please Fill all the Feilds",
              status: "warning",
              duration: 5000,
              isClosable: true,
              position: "bottom",
            });
        setloading(false);
        return;
        }
        if (password !== confirmPassword) {
            toast({
              title: "Passwords Do Not Match",
              status: "warning",
              duration: 5000,
              isClosable: true,
              position: "bottom",
            });
            return;
          }

          try {
            const config ={
                headers: {
                    "Content-type" : "application/json",
                },
            };
            const {data} = await axios.post("/api/user",
             {name, email, password}, 
            config);
            
            toast({
                title: "Registration Successful",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "bottom",
              });

            localStorage.setItem("userInfo", JSON.stringify(data));
            setloading(false);
            history.push("/chats");

            } catch (error) {
            toast({
                title: "Error Occured!",
                description: error.response.data.message,
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "bottom",
              });
              setloading(false);
            }
    };

  return (
    <VStack spacing="5px" color = "black">
        <FormControl id = "first-name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input
                placeholder="Enter Name"
                onChange={(e) => setName(e.target.value)}
            />
        </FormControl>
        <FormControl id = "email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
                placeholder="Enter Email"

                onChange={(e) => setEmail(e.target.value)}
            />
        </FormControl>
        <FormControl id = "password" isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
            <Input
                type={show ? "text" : "password"}
                placeholder="Enter Password"

                onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement width = "4.5rem">
                <Button h = "1.5rem" size ="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
                </Button>
            </InputRightElement>
            </InputGroup>
        </FormControl>
        <FormControl id = "confirmpassword" isRequired>
            <FormLabel>Confirm Password</FormLabel>
            <InputGroup>
            <Input
                type={show ? "text" : "password"}
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <InputRightElement width = "4.5rem">
                <Button h = "1.5rem" size ="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
                </Button>
            </InputRightElement>
            </InputGroup>
        </FormControl>
        <Button
        colorScheme='blue'
        width = "100%"
        style={{marginTop: 15}}
        onClick = {submitHandler}
        >
        Sign Up
        </Button>
    </VStack>
  );
};

export default Signup;