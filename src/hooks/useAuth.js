import { useSelector } from "react-redux";

export default function useAuth() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const username = useSelector((state) => state.auth.username);
  return {
    isAuthenticated,
    username,
  };
}
