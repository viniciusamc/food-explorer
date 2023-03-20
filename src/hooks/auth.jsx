import { useEffect } from "react";
import { api } from "../services/api";

function authProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { token, user } = response.data;
      setData({ token, user });
      localStorage.setItem("@FoodExplorer:token", token);
      localStorage.setItem("@FoodExplorer:user", JSON.stringify(user));
      api.defaults.headers.authorization = `Bearer ${token}`;
    } catch (error) {
      console.log(error);
    }
  }

  async function signUp() {
    localStorage.removeItem("@FoodExplorer:token");
    localStorage.removeItem("@FoodExplorer:user");

    setData({});
  }

  useEffect(() => {
    const token = localStorage.getItem("@FoodExplorer:token");
    const user = localStorage.getItem("@FoodExplorer:user");

    if (token && user) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setData({ token, user: JSON.parse(user) });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ signIn, user: data.user, signOut, updateProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { authProvider, useAuth };
