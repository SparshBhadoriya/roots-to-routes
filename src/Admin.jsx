import { useState } from "react";
import { supabase } from "./lib/supabase";
import { Lock, LogIn } from "lucide-react";
import "./Admin.css";

function Admin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);
    setErrorMessage("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMessage(error.message);
      setLoading(false);
      return;
    }

    window.location.href = "/admin/dashboard";
  };

  return (
    <div className="admin-page">
      <div className="admin-login-card">

        <div className="admin-logo">
          <img
            src="/images/roots-to-routes-logo.png"
            alt="Roots to Routes"
          />
        </div>

        <p className="admin-eyebrow">
          ROOTS TO ROUTES
        </p>

        <h1>Admin Login</h1>

        <p className="admin-subtitle">
          Manage tours, enquiries and your travel website.
        </p>

        <form onSubmit={handleLogin}>

          <div className="admin-input-group">
            <label>Email</label>

            <input
              type="email"
              placeholder="Enter admin email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="admin-input-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {errorMessage && (
            <div className="admin-error">
              {errorMessage}
            </div>
          )}

          <button
            type="submit"
            className="admin-login-button"
            disabled={loading}
          >
            {loading ? (
              "Signing in..."
            ) : (
              <>
                Login
                <LogIn size={18} />
              </>
            )}
          </button>

        </form>

        <div className="admin-security">
          <Lock size={14} />
          <span>Authorized administrators only</span>
        </div>

      </div>
    </div>
  );
}

export default Admin;