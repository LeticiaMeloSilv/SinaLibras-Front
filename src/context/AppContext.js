import { createContext, useState } from 'react';

export const AppContext = createContext();

export function AppProvider({ children }) {
    const [dados, setDados] = useState(null);
    
    console.log('entrei aq');
    return (
        <AppContext.Provider value={{ dados, setDados }}>
            {children}
        </AppContext.Provider>
        
    );
    
}
