import { useEffect } from "react";
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

          const userWithoutPassword = { ...user };
          delete userWithoutPassword.password;

          setData({ user: userWithoutPassword, token });

          localStorage.setItem(
            "@explorer:user",
            JSON.stringify(userWithoutPassword)
          );
          localStorage.setItem("@explorer:token", token);
        });
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      } else {
        alert("Erro ao fazer login");
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@explorer:token");
    const user = localStorage.getItem("@explorer:user");

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      setData({ user: JSON.parse(user), token });
    }
  }, []);

  async function signOut() {
    localStorage.removeItem("@explorer:user");
    localStorage.removeItem("@explorer:token");
    setData({});
  }

  return (
    <AuthContext.Provider value={{ signIn, user: data.user, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
