import { Heading, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

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
            <Link to='/'><Heading size={'2xl'} color={'black'}>Study The Text</Heading></Link>
        </li>
        <li>
            <Link to='/login'><Button size={'md'}>Admin Login</Button></Link>
        </li>
    </ul>
    </>
  )
}
