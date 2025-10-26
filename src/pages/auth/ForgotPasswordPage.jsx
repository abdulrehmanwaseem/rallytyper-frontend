import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, ArrowLeft } from "lucide-react";
import { forgotPasswordSchema } from "@/validators/authSchemas";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ForgotPasswordPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Forgot password data:", data);
    // API integration will go here
  };

  return (
    <div
      style={{ fontFamily: "Lato, sans-serif" }}
      className="w-full max-w-lg bg-brand-white-1 border-white rounded-xl shadow-xl p-8"
    >
      {/* Header */}
      <div className="text-center mb-6 mt-4">
        <h1
          className="text-3xl md:text-4xl font-bold text-brand-dark-1 mb-2"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Forgot Password?
        </h1>
        <p className="text-gray-500 text-sm">
          Enter your email address and we'll send you a link to reset your
          password
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
              placeholder="Email Address"
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

        {/* Submit Button */}
        <Button type="submit" variant="brand" size="xl" className="w-full mb-4">
          Send Reset Link
        </Button>

        {/* Back to Login */}
        <Link
          to="/auth/login"
          className="flex items-center justify-center gap-2 text-md text-gray-400 hover:text-brand transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Back to Login</span>
        </Link>
      </form>
    </div>
  );
};

export default ForgotPasswordPage;
