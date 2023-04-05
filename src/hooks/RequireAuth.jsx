import AuthConsumer from "./auth";
import { Navigate, useLocation } from "react-router-dom";

export function RequireAuth({ children }) {
  const [authed] = AuthConsumer();
  const location = useLocation();
  return authed.auth === true ? (
    children
  ) : (
    <Navigate
      to={"/login"}
      replace //this is belong to the useLocation of React Route.
      state={{ path: location.pathname }}
    ></Navigate>
  );
}
