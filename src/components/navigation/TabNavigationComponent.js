import React, { useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import './TabNavigationComponent.css'

import { FaHome } from "react-icons/fa";
import { TbMessageReport } from "react-icons/tb";
import { IoIosSettings } from "react-icons/io";
import NavLinkComponent from './NavLinkComponent';

function TabNavigationComponent() {
    const [selectedRoute, setSelectedRoute] = useState("/app/home");
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // Redirect to home if at the root /app
        if (location.pathname === '/app') {
            navigate('/app/home');
        }
    }, [location, navigate]);

    const handleNavigation = (route) => {
        setSelectedRoute(route);
        navigate(route);
    };

    return (
        <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
            <div style={{flex: 1}}>
                <Outlet />
            </div>
            <div
                className='navBar'
                style={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    backgroundColor:'#dfe0e6',
                    position: 'fixed',
                    bottom: 0,
                    width: '100%'
            }}>
                <NavLinkComponent icon={<FaHome size={28} />} route={'/app/home'} onClick={() => handleNavigation('/app/home')} isSelected={selectedRoute === '/app/home'} />
                <NavLinkComponent icon={<TbMessageReport size={28} />} route={'/app/report'} onClick={() => handleNavigation('/app/report')} isSelected={selectedRoute === '/app/report'} />
                <NavLinkComponent icon={<IoIosSettings size={28} />} route={'/app/settings'} onClick={() => handleNavigation('/app/settings')} isSelected={selectedRoute === '/app/settings'} />
            </div>
        </div>
    )
}

export default TabNavigationComponent