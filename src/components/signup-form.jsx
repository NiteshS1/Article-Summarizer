import { useState } from "react"
import { Link } from "react-router-dom"
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react"

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const togglePasswordVisibility = () => setShowPassword(!showPassword)
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword)

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md rounded-lg border border-gray-200 bg-white shadow-md">
        {/* Header */}
        <div className="space-y-1 p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">Create an account</h2>
          <p className="text-sm text-gray-500">Enter your information to create an account</p>
        </div>

        {/* Form */}
        <div className="space-y-4 p-6 pt-0">
          {/* Name */}
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                id="name"
                placeholder="John Doe"
                className="w-full rounded-md border border-gray-300 pl-10 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring-1"
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                id="email"
                type="email"
                placeholder="m@example.com"
                className="w-full rounded-md border border-gray-300 pl-10 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring-1"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                className="w-full rounded-md border border-gray-300 pl-10 pr-10 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring-1"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-0 top-0 h-10 w-10 text-gray-400 hover:text-gray-600 focus:outline-none"
              >
                {showPassword ? <EyeOff className="h-4 w-4 mx-auto" /> : <Eye className="h-4 w-4 mx-auto" />}
                <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="space-y-2">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                className="w-full rounded-md border border-gray-300 pl-10 pr-10 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring-1"
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute right-0 top-0 h-10 w-10 text-gray-400 hover:text-gray-600 focus:outline-none"
              >
                {showConfirmPassword ? <EyeOff className="h-4 w-4 mx-auto" /> : <Eye className="h-4 w-4 mx-auto" />}
                <span className="sr-only">{showConfirmPassword ? "Hide password" : "Show password"}</span>
              </button>
            </div>
          </div>

          {/* Terms */}
          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              id="terms"
              className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="terms" className="text-sm text-gray-700">
              I agree to the{" "}
              <Link to="#" className="text-blue-600 hover:underline">terms of service</Link> and{" "}
              <Link to="#" className="text-blue-600 hover:underline">privacy policy</Link>
            </label>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col space-y-4 p-6 pt-0">
          <button className="w-full rounded-md bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Create account
          </button>
          <div className="text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link to="/login" className="font-medium text-blue-600 hover:underline">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
