import { supabase } from '@supabase/auth-ui-shared'
import React from 'react'

import supabaseConfig from '../../supabaseConfig'
import { Styles } from '../../constants/Styles';

function SettingsScreen() {

    async function logout() {
        const { error } = await supabaseConfig.auth.signOut();
    }

    return (
        <div style={Styles.screen}>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default SettingsScreen