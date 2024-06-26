import React, { useEffect, useState } from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import TabNavigationComponent from './components/navigation/TabNavigationComponent';
import HomeScreen from './screens/Tabs/HomeScreen';
import MeldenScreen from './screens/Tabs/MeldenScreen';
import NoPage from './screens/NoPage';
import SettingsScreen from './screens/Tabs/SettingsScreen';
import supabaseClient from './supabaseConfig';
import LoginScreen from './screens/LoginScreen';
import { UserProvider } from './utils/UserProvider';

function App() {
    const [session, setSession] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getSession = async () => {
            const { data: { session } } = await supabaseClient.auth.getSession();
            setSession(session);
            setLoading(false);
        };

        getSession();

        const { data: authListener } = supabaseClient.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });

        return () => {
            authListener?.subscription.unsubscribe();
        };
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <UserProvider>
            <BrowserRouter>
                <Routes>
                    {!session ? (
                        <>
                            <Route path="/app/login" element={<LoginScreen />} />
                            <Route path="*" element={<Navigate to="/app/login" replace />} />
                        </>
                    ) : (
                        <>
                            <Route path="/app" element={<Navigate to="/app/home" replace />} />
                            <Route path="/app" element={<TabNavigationComponent />}>
                                <Route index element={<Navigate to="home" replace />} />
                                <Route path="home" element={<HomeScreen />} />
                                <Route path="report" element={<MeldenScreen />} />
                                <Route path="settings" element={<SettingsScreen />} />
                                <Route path="*" element={<NoPage />} />
                            </Route>
                        </>
                    )}
                </Routes>
            </BrowserRouter>
        </UserProvider>
    );
}

export default App;
