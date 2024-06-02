import React, { useEffect, useState } from 'react';
import { useUser } from '../../utils/UserProvider';

import { Styles } from '../../constants/Styles'
import CardButton from '../../components/CardButton';
import { GoReport } from 'react-icons/go';
import { TbArrowsExchange } from 'react-icons/tb';

function HomeScreen() {
    const { user, isAdmin, loading } = useUser();

    if (!user) {
        return <div style={Styles.screen}>Loading...</div>;
    }

    if (!user?.email) {
        return <div>Please log in to view this page</div>;
    }

    return (
        <div style={Styles.screen}>
            <h1>Willkommen zurück, <span style={{fontSize: 20, fontWeight: '200'}}>{user?.email.replace("@tenant.com", "")} {isAdmin && "(Admin)"}</span></h1>
            <div style={{display: 'flex', flexDirection:' column', gap: '1rem'}}>
                <h3>Was möchtest du tun?</h3>
                <div style={{display: 'flex', flexDirection:' column', gap: '2rem'}}>
                    <div style={{display: 'flex', flexDirection: 'row', gap: '2em', justifyContent: 'space-evenly'}}>
                        <CardButton text="Fehler melden" icon={<GoReport size={40}/>} theme={Styles.primaryButton} />
                        <CardButton text="Miete ändern" icon={<TbArrowsExchange size={40} />} theme={Styles.primaryButton} />
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', gap: '2rem', justifyContent: 'space-evenly'}}>
                        {isAdmin && <CardButton text="Neuer Mieter" icon={<GoReport size={40} />} theme={Styles.secondaryButton} /> }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeScreen;
