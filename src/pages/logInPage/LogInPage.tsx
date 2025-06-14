import React, { useState } from "react";
import { useAppSelector } from "../../store/hooks";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../components/api/firebaseConfig";
import LoadingBar from "../../components/loadingBar/LoadingBar";
import { Button } from "../../components/button/Button";
import "./loginPage.css";

const LogInPage: React.FC = () => {
  const user = useAppSelector((state) => state.auth.user);
  const isAuthLoading = useAppSelector((state) => state.auth.loading);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      alert("Logout successful!");
    } catch (err) {
      setError("Logout failed");
    }
  };

  if (isAuthLoading) {
    return (
      <div className="menu-cards-loading login-page">
        <LoadingBar />
      </div>
    );
  }

  return (
    <div>
      {user ? (
        <div className="login-page">
          <h2>Welcome, {user.email}!</h2>
        </div>
      ) : (
        <div className="login-page">
          <h2>Log In</h2>
          <form onSubmit={handleSubmit}>
            <div className="login-form-group">
              <label>User Name:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="test@gmail.com"
              />
            </div>
            <div className="login-form-group">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
                required
              />
            </div>
            {error && <p>{error}</p>}
            <Button type="submit">
              Submit
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default LogInPage;