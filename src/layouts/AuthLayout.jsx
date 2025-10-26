import React from "react";
import { Link, Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/bg-auth.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Logo */}
      <div className="absolute top-8 left-8">
        <Link to="/">
          <img src="/images/logo.svg" alt="Rally Typer" className="h-12" />
        </Link>
      </div>

      {/* Auth Content */}
      <Outlet />
    </div>
  );
};

export default AuthLayout;
