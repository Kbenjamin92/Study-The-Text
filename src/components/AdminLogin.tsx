// AdminLogin.tsx
import { useState } from "react";
import {
  Box, Input, Button, Text, FormControl, FormLabel, VStack, useToast
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ADMIN_CREDENTIALS } from "../auth";

export const AdminLogin = () =>{
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (
      username === ADMIN_CREDENTIALS.username &&
      password === ADMIN_CREDENTIALS.password
    ) {
      localStorage.setItem("isAdmin", "true"); // Store login status
      navigate("/admin");
    } else {
      toast({
        title: "Login failed",
        description: "Incorrect username or password",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box maxW="md" mx="auto" mt={10} p={6} boxShadow="md" borderRadius="md">
      <VStack spacing={4}>
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input value={username} onChange={(e) => setUsername(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </FormControl>
        <Button onClick={handleLogin} colorScheme="brown">Login</Button>
      </VStack>
    </Box>
  );
}
