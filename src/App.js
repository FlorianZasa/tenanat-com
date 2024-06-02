import React, { useEffect, useState } from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TabNavigationComponent from './components/navigation/TabNavigationComponent';
import HomeScreen from './screens/Tabs/HomeScreen';
import MeldenScreen from './screens/Tabs/MeldenScreen';
import NoPage from './screens/NoPage';
import SettingsScreen from './screens/Tabs/SettingsScreen';
import supabaseClient from './supabaseConfig';
import LoginScreen from './screens/LoginScreen';

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

    if (!session) {
      return (
        <div>
          <LoginScreen />
        </div>
      );
    }

    return (
        // Tabbed Screen
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TabNavigationComponent />}>
                    <Route index element={<HomeScreen />} />
                    <Route path="report" element={<MeldenScreen />} />
                    <Route path="settings" element={<SettingsScreen />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
