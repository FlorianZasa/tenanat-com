import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

import './TabNavigationComponent.css'
import { Colors } from '../../constants/Colors';

import { FaHome } from "react-icons/fa";
import { TbMessageReport } from "react-icons/tb";
import { IoIosSettings } from "react-icons/io";
import NavLinkComponent from './NavLinkComponent';

function TabNavigationComponent() {
    const location = useLocation();

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
                <NavLinkComponent icon={<FaHome size={28} />}  route={'/'} />
                <NavLinkComponent icon={<TbMessageReport size={28} />}  route={'/report'} />
                <NavLinkComponent icon={<IoIosSettings size={28} />}  route={'/settings'} />
            </div>
        </div>
    )
}

export default TabNavigationComponent