import React, { useState } from 'react'
import supabaseConfig from '../supabaseConfig'
import { Styles } from '../constants/Styles';
import ButtonComponent from '../components/ButtonComponent';

function SignUpScreen() {
    const [user, setUser] = useState(null);
    const [tenantId, setTenantId] = useState(null);

    function signUp() {
        const credentials = {
            email: `${tenantId}@tenant.com`, // Provide a dummy email
            password: 'StartMiete1234',
            options: {
                emailRedirectTo: null,
                data: {
                    tenantId: tenantId,
                }
            }
        };
    
        const { user, error } = supabaseConfig.auth.signUp(credentials);
        if (user) { setUser(user) }
    }

    function prepareUser() {
        setTenantId(generateRandomId())
    }

    function generateRandomId() {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let randomLetters = '';
        for (let i = 0; i < 3; i++) {
            randomLetters += letters.charAt(Math.floor(Math.random() * letters.length));
        }
        const randomNumber = Math.floor(100000000 + Math.random() * 900000000); // Generates a random 9-digit number
        return randomLetters + randomNumber;
    }



    return (
        <div style={Styles.screen}>
            <ButtonComponent onClick={prepareUser} text={"Neuen Mieter erstellen"} theme={Styles.secondaryButton} />
            {tenantId && (
                <div>
                    <p>Mieter ID: {tenantId}</p>
                    <p>Mieter Startpasswort: {"StartMiete1234"}</p>
                    <button onClick={signUp}>Jetzt anlegen</button>
                </div>
            )}
            
        </div>
    )
}

export default SignUpScreen