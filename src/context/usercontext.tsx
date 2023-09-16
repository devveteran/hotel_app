import { UserInfoType, defaultUserInfo } from '@constants/types';
import React, { createContext, useState } from 'react';

interface ContexdtWrapper {
    userInfo: UserInfoType,
    setUserInfo: (v: UserInfoType) => void,
}
const defaultValue: ContexdtWrapper = {
    userInfo: defaultUserInfo,
    setUserInfo: () => {},
};

export const GlobalContext = createContext<ContexdtWrapper>(defaultValue);

interface ProviderProps{
    children: React.ReactNode
}

export const ContextProvider = ({children}: ProviderProps) => {
    const [userInfo, setUserInfo] = useState<UserInfoType>(defaultUserInfo);

    return (
        <GlobalContext.Provider value={{
            userInfo: userInfo,
            setUserInfo: setUserInfo
        }}>
            {children}
        </GlobalContext.Provider>
    )
}