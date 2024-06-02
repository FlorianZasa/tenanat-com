import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation hook
import supabaseConfig from '../../supabaseConfig';

import { Styles } from '../../constants/Styles'
import CardButton from '../../components/CardButton';
import { GoReport } from 'react-icons/go';
import { RiExchange2Line, RiExchangeBoxFill } from 'react-icons/ri';
import { TbArrowsExchange } from 'react-icons/tb';

function HomeScreen() {
    const location = useLocation(); // Get the current location
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userData = await supabaseConfig.auth.getUser();
                setUser(userData);
            } catch (error) {
                console.error('Error fetching user data:', error.message);
            }
        };

        fetchUser();
    }, [location]); // Fetch user data when location changes (e.g., tab switch)

    if (!user) {
        return <div style={Styles.screen}>Loading...</div>;
    }

    if (!user?.data?.user?.user_metadata?.tenantId) {
        return <div>Please log in to view this page</div>;
    }

    return (
        <div style={Styles.screen}>
            <h1>Willkommen zurück, <span style={{fontSize: 20, fontWeight: '200'}}>{user.data.user.user_metadata.tenantId}</span></h1>
            <div style={{display: 'flex', flexDirection:' column', gap: '1rem'}}>
                <h3>Was möchtest du tun?</h3>
                <div style={{display: 'flex', flexDirection:' column', gap: '2rem'}}>
                    <div style={{display: 'flex', flexDirection: 'row', gap: '2em', justifyContent: 'space-evenly'}}>
                        <CardButton text="Fehler melden" icon={<GoReport size={40}/>} theme={Styles.primaryButton}/>
                        <CardButton text="Miete ändern" icon={<TbArrowsExchange size={40} />} theme={Styles.primaryButton} />
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', gap: '2rem', justifyContent: 'space-evenly'}}>
                        <CardButton text="Fehler melden" icon={<GoReport size={40} />} theme={Styles.primaryButton} />
                        <CardButton text="Fehler melden" icon={<GoReport size={40} />} theme={Styles.primaryButton} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeScreen;
