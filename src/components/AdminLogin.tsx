import { useState } from "react";
import {
  Box, Input, Button, Field, VStack
} from "@chakra-ui/react";
import { toaster } from "../components/ui/toaster"
import { useNavigate } from "react-router-dom";
import { ADMIN_CREDENTIALS } from "../auth";

export const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (
      username === ADMIN_CREDENTIALS.username &&
      password === ADMIN_CREDENTIALS.password
    ) {
      localStorage.setItem("isAdmin", "true"); // Store login status
      navigate("/admin");
    } else {
        toaster.create({
            title: "Login failed",
            description: "Incorrect username or password",
            type: "info",
    })
  }
}

  return (
    <Box maxW="md" mx="auto" mt={10} p={6} boxShadow="md" borderRadius="md">
      <VStack >
        <Field.Root>
          <Field.Label>Username</Field.Label>
          <Input value={username} onChange={(e) => setUsername(e.target.value)} />
        </Field.Root>
        <Field.Root>
          <Field.Label>Password</Field.Label>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Field.Root>
        <Button onClick={handleLogin} colorScheme="brown">Login</Button>
      </VStack>
    </Box>
  );
}
