import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { loginSchema } from "@/validators/authSchemas";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = (data) => {
    console.log("Login data:", data);
    // API integration will go here
  };

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
    // Google OAuth integration will go here
  };

  return (
    <div
      style={{ fontFamily: "Lato, sans-serif" }}
      className="w-full max-w-lg bg-brand-cream border-white rounded-xl shadow-xl p-8"
    >
      {/* Header */}
      <div className="text-center mb-6 mt-4">
        <h1
          className="text-3xl md:text-4xl font-bold text-brand-dark-1 mb-2"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Welcome Back!
        </h1>
        <p className="text-gray-500 text-sm">
          Enter Your Email And Password To Access Your Account
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Email Field */}
        <div>
          <div className="relative">
            <Mail
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10"
              size={20}
            />
            <Input
              type="email"
              placeholder="Username or Email Address"
              {...register("email")}
              className="pl-11"
              aria-invalid={errors.email ? "true" : "false"}
            />
          </div>
          {errors.email && (
            <p className="text-destructive text-xs mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password Field */}
        <div>
          <div className="relative">
            <Lock
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10"
              size={20}
            />
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              {...register("password")}
              className="pl-11 pr-11"
              aria-invalid={errors.password ? "true" : "false"}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors z-10"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between">
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              {...register("rememberMe")}
              className="w-4 h-4 text-brand bg-gray-100 border-gray-300 rounded focus:ring-brand focus:ring-2"
              style={{ accentColor: "#f25a06" }}
            />
            <span className="ml-2 text-sm text-gray-800 font-medium">
              Remember Me
            </span>
          </label>
          <Link
            to="/auth/forgot-password"
            className="text-sm text-brand hover:text-brand/80 font-medium transition-colors"
          >
            Forgot Password
          </Link>
        </div>

        {/* Login Button */}
        <Button type="submit" variant="brand" size="xl" className="w-full mb-4">
          Login
        </Button>

        {/* Google Login Button */}
        <Button
          type="button"
          onClick={handleGoogleLogin}
          variant="outline"
          size="lg"
          className="w-full bg-transparent border-neutral-400 text-neutral-500 font-medium"
        >
          <img
            src="/images/google.svg"
            alt="Google"
            className="w-5 h-5 bg-none"
          />
          Login with Google
        </Button>

        {/* Register Link */}
        <p className="text-center text-md text-gray-400">
          Don't have an account?{" "}
          <Link
            to="/auth/register"
            className="text-brand hover:text-brand/80 font-semibold transition-colors ml-0.5"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
