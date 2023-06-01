import { FC } from "react";
import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

const Navbar: FC = () => {
  const [user] = useAuthState(auth);
  const signUserOut = async () => {
    await signOut(auth);
  };
  return (
    <div className="navbar">
      <div className="links">
        <Link to="">Home</Link>
        <Link to="/login">Login</Link>
      </div>
      <div className="user">
        {auth.currentUser && (
          <>
            <p>{user?.displayName}</p>
            <img
              src={user?.photoURL || ""}
              width="50"
              height="50"
            />
            <button onClick={signUserOut}>Log out</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
