import {
  Box, Input, Button, Field, VStack,
  Container
} from "@chakra-ui/react";
import { Toaster } from "../ui/toaster"
import { PasswordInput } from "../ui/password-input"
import { useAuth } from '../../hooks/useAuth';
import { useForm } from "react-hook-form"
import type { SubmitHandler } from "react-hook-form";
import type { AdminContextType } from '../../interface';
import { Link } from "react-router-dom";


//  added the react hook forms 
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

    const {
    register,
    handleSubmit
  } = useForm<AdminContextType>()

  const onSubmit: SubmitHandler<AdminContextType> = (data) => {
    console.log(data);
    handleLogin();
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
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
            <Input 
              {...register("username", { required: true })}
              type="text"
              value={username} 
              onChange={(e) => setUsername(e.target.value)} />
          </Field.Root>
          <Field.Root>
            <Field.Label>Password</Field.Label>
              <PasswordInput 
                {...register("password", { required: true })}
                type="password" 
                value={password} 
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
          </Field.Root>
          <Container 
            display='flex' 
            flexDirection='row' 
            alignItems='flex-start' 
            justifyContent='space-between'
            padding={0}>
            <Button 
                type='submit' 
                width='50%' 
                marginTop='10px' 
                bgColor="black">Login
            </Button>
            <Container display='flex' flexDirection='row' alignItems='flex-start' justifyContent='space-envenly'>
              <Link to='/create-admin'><Button 
                  bgColor='dodgerblue' 
                  marginTop='10px' 
                  fontSize='sm'>Register here</Button>
              </Link>
            </Container>
          </Container>
        </VStack>
        <Toaster />
      </Box>
    </form>
    </>
  );
}
