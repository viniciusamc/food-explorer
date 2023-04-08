import { createContext, useContext, useState } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = api
        .post("/sessions", { email, password })
        .then((response) => {
          const { user, token } = response.data;
          api.defaults.headers.authorization = `Bearer ${token}`;
          setData({ user, token });
        });
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      } else {
        alert("Erro ao fazer login");
      }
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, user: data.user }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
