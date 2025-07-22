import { Heading, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth';

export const NavBar = () => {
    const context = useAuth();
    if (!context) {
        throw new Error("useAuth must be used within AuthProvider");
    }
    const { isAdmin, setIsAdmin } = context;
    const styling = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#f5f5f5',
    }
    const adminButtonText = isAdmin === true ? 'Logout' : 'Admin Login';
    console.log("Admin Access:", adminButtonText);

    const logout = () => {
        setIsAdmin(false);
        localStorage.removeItem("isAdmin");
    }

  return (
    <>
    <ul style={styling}>
        <li>
            <Link to='/'><Heading size={'2xl'} color={'black'}>Study The Text</Heading></Link>
        </li>
        <li>
            { isAdmin ? (
                <Link to='/'>
                    <Button 
                        size={'md'} 
                        onClick={() => logout()}>
                        { adminButtonText }
                    </Button>
                </Link>
            ) : (
                <Link to='/login'>
                    <Button size={'md'}>{ adminButtonText }</Button>
                </Link>
            )}
        </li>
    </ul>
    </>
  )
}
