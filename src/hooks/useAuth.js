import { useSelector } from "react-redux";

export default function useAuth() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const username = useSelector((state) => state.auth.username);
  const userid = useSelector((state) => state.auth.userid);
  const token = useSelector((state) => state.auth.token)
  return {
    isAuthenticated,
    username,
    userid,
    token,
  };
}
