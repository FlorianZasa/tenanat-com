import React, { useState } from 'react'
import supabaseConfig from '../supabaseConfig'
import SignUpScreen from './SignUpScreen';
import { Styles } from '../constants/Styles';

function LoginScreen() {
    const [tenantId, setTenantId] = useState("");
    const [tenantPassword, setTenantPassword] = useState("");

    async function login() {  
        try {
            const { user, error } = await supabaseConfig.auth.signInWithPassword({
                email: tenantId+"@tenant.com",
                password: tenantPassword
            });
            
            if (error) {
                console.error('Error signing in:', error.message);
            } else {
                console.log('User logged in successfully:', user);
            }
        } catch (error) {
            console.error('Error signing in:', error.message);
        }
    }


    return (
        <div style={{...Styles.screen, display: 'flex', flexDirection: 'column', flex: 1}}>
          <h1>Willkommen bei TenantCom</h1>

            <form>
                <input name="tenantId" style={{width: '100%'}} onChange={(e) => setTenantId(e.target.value)} value={tenantId} />
                <input name="tenantPassword" style={{width: '100%'}} onChange={(e) => setTenantPassword(e.target.value)} value={tenantPassword} />
            </form>
            <button onClick={login}>Login</button>


            <SignUpScreen />
        </div>
    )
}

export default LoginScreen