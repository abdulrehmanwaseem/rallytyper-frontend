import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { User, Mail, Lock, Eye, EyeOff, Upload } from "lucide-react";
import { registerSchema } from "@/validators/authSchemas";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CountryDropdown } from "@/components/ui/country-dropdown";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [profileImage, setProfileImage] = useState(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      username: "",
      email: "",
      country: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Register data:", data, "Profile image:", profileImage);

    // Store user data in localStorage for game access
    localStorage.setItem("username", data.username);
    localStorage.setItem("fullName", data.fullName);
    localStorage.setItem("country", data.country);

    // Get country code from countries data
    import("@/data/countries.json").then((countriesModule) => {
      const countries = countriesModule.default;
      const selectedCountry = countries.find((c) => c.name === data.country);
      if (selectedCountry) {
        localStorage.setItem("countryCode", selectedCountry.code);
      }
    });

    if (profileImage) {
      localStorage.setItem("avatar", profileImage);
    }

    console.log("✅ User data saved to localStorage for game");

    // API integration will go here
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      style={{ fontFamily: "Lato, sans-serif" }}
      className="w-full max-w-2xl bg-brand-cream border-white rounded-2xl shadow-2xl p-8"
    >
      {/* Header */}
      <div className="text-center mb-6 mt-4">
        <h1
          className="text-3xl md:text-4xl font-bold text-brand-dark-1 mb-2"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Create Your Account
        </h1>
        <p className="text-gray-500 text-sm">
          Enter Your Details To Create Account
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Profile Image Upload */}
        <div className="flex flex-col items-start">
          <label className="text-sm text-gray-600 mb-2">Profile Img</label>
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-brand/10 flex items-center justify-center overflow-hidden">
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <User className="text-brand" size={32} />
                )}
              </div>
            </div>
            <label className="flex items-center gap-2 text-brand hover:text-brand/80 cursor-pointer font-medium transition-colors">
              <Upload size={18} />
              <span>Upload</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
          </div>
        </div>

        {/* Full Name & Username */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="relative">
              <User
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10"
                size={20}
              />
              <Input
                type="text"
                placeholder="Full Name"
                {...register("fullName")}
                className="pl-11"
                aria-invalid={errors.fullName ? "true" : "false"}
              />
            </div>
            {errors.fullName && (
              <p className="text-destructive text-xs mt-1">
                {errors.fullName.message}
              </p>
            )}
          </div>

          <div>
            <div className="relative">
              <User
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10"
                size={20}
              />
              <Input
                type="text"
                placeholder="Username"
                {...register("username")}
                className="pl-11"
                aria-invalid={errors.username ? "true" : "false"}
              />
            </div>
            {errors.username && (
              <p className="text-destructive text-xs mt-1">
                {errors.username.message}
              </p>
            )}
          </div>
        </div>

        {/* Email & Country */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

          <div>
            <Controller
              name="country"
              control={control}
              render={({ field }) => (
                <CountryDropdown
                  value={field.value}
                  onChange={field.onChange}
                  placeholder="Select Country"
                />
              )}
            />
            {errors.country && (
              <p className="text-destructive text-xs mt-1">
                {errors.country.message}
              </p>
            )}
          </div>
        </div>

        {/* Password & Confirm Password */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              <p className="text-destructive text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div>
            <div className="relative">
              <Lock
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10"
                size={20}
              />
              <Input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                {...register("confirmPassword")}
                className="pl-11 pr-11"
                aria-invalid={errors.confirmPassword ? "true" : "false"}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors z-10"
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-destructive text-xs mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
        </div>

        {/* Register Button */}
        <Button type="submit" variant="brand" size="xl" className="w-full mb-4">
          Register
        </Button>

        {/* Login Link */}
        <p className="text-center text-md text-gray-400">
          Already have an account?{" "}
          <Link
            to="/auth/login"
            className="text-brand hover:text-brand/80 font-semibold transition-colors ml-0.5"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
