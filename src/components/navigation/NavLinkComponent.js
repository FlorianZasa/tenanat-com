import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Colors } from '../../constants/Colors'

function NavLinkComponent({ route, icon }) {
    const location = useLocation();
    return (
        <Link 
            className='navLink'
            to={route}
            style={{
                background: location.pathname === route ? Colors.primaryBG : 'none',
                padding: '1rem',
                color: location.pathname === route ? Colors.primaryFG : Colors.primaryBG,
                borderRadius: 20
            }}>
                {icon}
        </Link>
    )
}

export default NavLinkComponent