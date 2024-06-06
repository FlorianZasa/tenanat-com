import React from 'react';

function NavLinkComponent({ icon, route, onClick, isSelected }) {
    return (
        <div onClick={onClick} style={{ color: isSelected ? 'blue' : 'black' }}>
            {icon}
        </div>
    );
}

export default NavLinkComponent;
