import { supabase } from '@supabase/auth-ui-shared'
import React from 'react'

import supabaseConfig from '../../supabaseConfig'
import { Styles } from '../../constants/Styles';
import SignUpScreen from '../SignUpScreen';
import ButtonComponent from '../../components/ButtonComponent';

function SettingsScreen() {

    async function logout() {
        const { error } = await supabaseConfig.auth.signOut();
    }

    return (
        <div style={Styles.screen}>
            {true && <SignUpScreen />}
            <ButtonComponent onClick={logout} text={"Logout"} theme={Styles.primaryButton} />
        </div>
    )
}

export default SettingsScreen