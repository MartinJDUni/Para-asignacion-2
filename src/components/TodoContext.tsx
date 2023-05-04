import React, { createContext, useState } from 'react';

export interface All {
    title: string;
    active: boolean;
}

interface AllContextProps {
    alls: All[];
    addAll: (title: string) => void;
    updateAll: (index: number, all: All) => void;
    children?: React.ReactNode;
}

export const AllContext = createContext<AllContextProps>({
    alls: [],
    addAll: () => { },
    updateAll: () => { },
});

export const AllProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [alls, setAlls] = useState<All[]>([]);

    const addAll = (title: string) => {
        setAlls([...alls, { title, active: true }]);
    };

    const updateAll = (index: number, all: All) => {
        const newAlls = [...alls];
        newAlls[index] = all;
        setAlls(newAlls);
    };

    return (
        <AllContext.Provider value={{ alls, addAll, updateAll, children }}>
            {children}
        </AllContext.Provider>
    );
};