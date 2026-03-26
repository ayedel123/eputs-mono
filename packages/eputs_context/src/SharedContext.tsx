// packages/shared-configs/src/context/SharedContext.tsx
import React, { createContext, ReactNode, useContext, useState } from "react";

export interface SharedContextType {
    count: number;
    increment: () => void;
    decrement: () => void;
    setCount: (count: number) => void;
}

const SharedContext = createContext<SharedContextType | undefined>(undefined);

export const SharedContextProvider = ({
    children,
}: {
    children: ReactNode;
}) => {
    const [count, setCount] = useState(0);

    const increment = () => setCount((prev) => prev + 1);
    const decrement = () => setCount((prev) => prev - 1);

    return (
        <SharedContext.Provider
            value={{ count, increment, decrement, setCount }}
        >
            {children}
        </SharedContext.Provider>
    );
};

export const useCounter = () => {
    const context = useContext(SharedContext);
    if (!context) {
        throw new Error("useCounter must be used within SharedContextProvider");
    }
    return context;
};
