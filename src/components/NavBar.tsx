import { Heading, Button } from '@chakra-ui/react'

export const NavBar = () => {

    const styling = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#f5f5f5',
    }
  return (
    <>
    <ul style={styling}>
        <li>
            <Heading size={'2xl'} color={'black'}>Study The Text</Heading>
        </li>
        <li>
            <Button size={'md'}>Admin Login</Button>
        </li>
    </ul>
        

    </>
  )
}
