import { Heading, Button } from '@chakra-ui/react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth';

export const NavBar = () => {
    const context = useAuth();
    if (!context) {
        throw new Error("useAuth must be used within AuthProvider");
    }
    const { isAdmin, logout } = context;
    const styling: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#f5f5f5',
    }
    const navStyling: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'space-evenly',
        padding: '10px 20px',
        backgroundColor: '#f5f5f5',
    }
    const location = useLocation();
    const isBibleStudiesPage = location.pathname === "/admin/bible-studies";
    const adminButtonText = isAdmin ? 'Logout' : 'Admin Login';
    const homeButtonText = isBibleStudiesPage ? 'Dashboard' : 'Bible Studies';
    
  return (
    <>
    <ul style={styling}>
        <li>
            <Link to='/'><Heading size={'2xl'} color={'black'}>Study The Text</Heading></Link>
        </li>
    
        <ul style={navStyling}>
            <li>
            { isAdmin ? (
                <ul style={{ display: 'flex', gap: '10px', flexDirection: 'row' }}>
                    <li>
                        {
                        isBibleStudiesPage ? (
                            <Link to='/admin/dashboard'>
                                <Button 
                                    size={'md'} 
                                    rounded='full'
                                    >
                                    { homeButtonText }
                                </Button>
                            </Link>
                        ) : (
                            <Link to="/admin/bible-studies">
                                <Button 
                                    size={'md'} 
                                    rounded='full'
                                    >
                                    { homeButtonText }
                                </Button>
                            </Link>
                        )
                        }
                    </li>
                    <li>
                         <Link to='/'>
                            <Button 
                                size={'md'} 
                                rounded='full'
                                onClick={isAdmin && logout}>
                                { adminButtonText }
                            </Button>
                        </Link>
                    </li>
                </ul>
            ) : (
                <Link to='/login'>
                    <Button size={'md'} rounded='full'>{ adminButtonText }</Button>
                </Link>
            )}
            </li>
        </ul>
        
    </ul>
    </>
  )
}
