import React, { useState } from 'react'
import supabaseConfig from '../supabaseConfig'
import { Styles } from '../constants/Styles';
import InputComponent from '../components/InputComponent';
import ButtonComponent from '../components/ButtonComponent';
import { Colors } from '../constants/Colors';
import SeperatorComponent from '../components/SeperatorComponent';
import { IoQrCodeOutline } from 'react-icons/io5';
import { CgLogIn } from 'react-icons/cg';

function LoginScreen() {
    const [tenantId, setTenantId] = useState("");
    const [tenantPassword, setTenantPassword] = useState("");

    async function login(event) {
        event.preventDefault();
        try {
            const { data, error } = await supabaseConfig.auth.signInWithPassword({
                email: tenantId+"@tenant.com",
                password: tenantPassword
            });
            
            if (error) {
                console.error('Error signing in:', error.message);
            } else {
                console.log('User logged in successfully:', data.user);
            }
        } catch (error) {
            console.error('Error signing in:', error.message);
        }
    }


    return (
        <div style={{...Styles.screen, display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center', aligntItems: 'center', textAlign: 'center', gap: '1rem'}}>
          <h1>Login bei TenantCom</h1>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem'}}>
                <span style={{color: Colors.unimportantFG}}>Jetzt mit deinen Login Daten einloggen und los geht's!</span>
                <form style={{...Styles.form, textAlign: 'left'}} onSubmit={login}>
                    <InputComponent name="tenantId" label="Tenant ID" type="text" onChange={(e) => setTenantId(e.target.value)} value={tenantId} required={true}/>
                    <InputComponent name="tenantPassword" label="Tenant Passwort" type="password" onChange={(e) => setTenantPassword(e.target.value)} value={tenantPassword} required={true}/>
                    <ButtonComponent onClick={login} theme={Styles.primaryButton} text={"Login"} icon={<CgLogIn size={24} />}/>
                </form>
                <SeperatorComponent text={"oder"} />
                <ButtonComponent onClick={() => {}} theme={Styles.secondaryButton} text={"Mit Code anmelden"} icon={<IoQrCodeOutline size={24} />} />
            </div>
        </div>
    )
}

export default LoginScreen