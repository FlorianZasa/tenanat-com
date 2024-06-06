import { createContext, useContext, useState, useEffect } from 'react';
import supabaseConfig from '../supabaseConfig';

const UserContext = createContext();

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            const { data: { session }, error } = await supabaseConfig.auth.getSession();
            if (error) {
                console.error('Error getting session:', error.message);
                setLoading(false);
                return;
            }
            if (session) {
                setUser(session.user);
                checkAdminStatus(session.user);
            }
            setLoading(false);
        };

        fetchUser();

        const { data: authListener } = supabaseConfig.auth.onAuthStateChange((_event, session) => {
            if (session) {
                setUser(session.user);
                checkAdminStatus(session.user);
            } else {
                setUser(null);
                setIsAdmin(false);
            }
        });

        return () => {
            authListener?.subscription.unsubscribe();
        };
    }, []);

    const checkAdminStatus = async (user) => {
        const { data, error } = await supabaseConfig
            .from('user_roles')
            .select('role')
            .eq('user_id', user.id)
            .single();

        if (error) {
            console.error('Error checking user role:', error.message);
            setIsAdmin(false);
            return;
        }

        setIsAdmin(data && data.role === 'admin');
    };

    const logout = async () => {
        console.log("Logging out user");
        const { error } = await supabaseConfig.auth.signOut();
        if (error) {
            console.error('Error logging out:', error.message);
        }
        setUser(null);
        setIsAdmin(false);
    };

    return (
        <UserContext.Provider value={{ user, isAdmin, loading, logout }}>
            {children}
        </UserContext.Provider>
    );
}

export const useUser = () => {
    return useContext(UserContext);
};
