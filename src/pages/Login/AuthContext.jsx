import React, {createContext} from 'react'

export const AuthContext = createContext()

function AuthContextProvider({children}) {

  const userData = [
    {
      'username': 'user1',
      'password': 'user1'
    }
  ]

  return (
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
