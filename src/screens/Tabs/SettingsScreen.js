import React from 'react';
import { useUser } from '../../utils/UserProvider';
import { Styles } from '../../constants/Styles';
import SignUpScreen from '../SignUpScreen';
import ButtonComponent from '../../components/ButtonComponent';

function SettingsScreen() {
    const { isAdmin, loading, logout } = useUser();

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div style={Styles.screen}>
            {isAdmin && <SignUpScreen />}
            <ButtonComponent onClick={logout} text={"Logout"} theme={Styles.primaryButton} />
        </div>
    );
}

export default SettingsScreen;
