import {
  Box, Input, Button, Field, VStack,
} from "@chakra-ui/react";
import { Toaster } from "../components/ui/toaster"
import { PasswordInput } from "../components/ui/password-input"
import { useAuth } from "../hooks/useAuth";

export const AdminLogin = () => {

const context = useAuth();
  if (!context) {
    throw new Error("useAdminContext must be used within AdminProvider");
  }
  const { username, 
    setUsername, 
    password, 
    setPassword, 
    handleLogin } = context;

  return (
    <Box maxW="md" mx="auto" mt={10} p={6} boxShadow="md" borderRadius="md">
        <VStack align="stretch">
            <Field.Root>
                <Field.Label fontSize='lg' paddingBottom='15px'>Admin Login</Field.Label>
                <Field.Label paddingBottom='10px' fontWeight='light'>Login to access the dashboard and upload files.</Field.Label>
            </Field.Root>
         </VStack>
      <VStack>
        <Field.Root>
          <Field.Label>Username</Field.Label>
          <Input value={username} onChange={(e) => setUsername(e.target.value)} />
        </Field.Root>
        <Field.Root>
          <Field.Label>Password</Field.Label>
            <PasswordInput type="password" value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
        </Field.Root>
        <Button onClick={handleLogin} colorScheme="brown">Login</Button>
      </VStack>
      <Toaster />
    </Box>
  );
}
