import { FormControl, FormLabel, VStack , Input, InputGroup, InputRightElement, Button} from '@chakra-ui/react'
import React, {useState} from 'react'

const Signup = () => {
    const [show, setShow] = useState(false);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const handleClick = () => setShow(!show);


    const submitHandler = () => {};

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