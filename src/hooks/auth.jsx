import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [data, setData] = useState({});

  const signIn = async ({email, password}) => {
    try {
      if (!email || !password) {
        alert("error")
        return
      }
  
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;
  
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      localStorage.setItem("@portfolio:user", JSON.stringify(user));
      localStorage.setItem("@portfolio:token", token);
  
      setData({ token, user });
    } catch (error) {
      alert("error")
      console.log(error)
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, user: data.user }}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth }