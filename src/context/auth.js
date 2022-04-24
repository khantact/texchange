import React from 'react'
import { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext();

const AuthProvider = ({children}) =>{
    return <AuthContext.Provider>{children}</AuthContext.Provider>
}

export default AuthProvider;