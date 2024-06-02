import React, { useState } from 'react'
import supabaseConfig from '../supabaseConfig'
import SignUpScreen from './SignUpScreen';
import { Styles } from '../constants/Styles';
import InputComponent from '../components/InputComponent';
import ButtonComponent from '../components/ButtonComponent';

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

            <form style={Styles.form}>
                <InputComponent name="tenantId" type="text" onChange={(e) => setTenantId(e.target.value)} value={tenantId} required={true}/>
                <InputComponent name="tenantPassword" type="text" onChange={(e) => setTenantPassword(e.target.value)} value={tenantPassword} required={true}/>
                <ButtonComponent onClick={login} theme={Styles.primaryButton} text={"Login"} />
            </form>
        </div>
    )
}

export default LoginScreen