import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import stiLogo from "../../imports/images__10_.png";
import campusImage from "../../imports/Gemini_Generated_Image_bfcnjcbfcnjcbfcn.png";

interface SignInProps {
  onSignIn: (
    role: "admin" | "program-head" | "faculty",
  ) => void;
}

export function SignIn({ onSignIn }: SignInProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<
    "admin" | "program-head" | "faculty" | ""
  >("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (role) {
      onSignIn(role);
    }
  };

  const getRoleLabel = () => {
    if (role === "admin") return "Administrator Login";
    if (role === "program-head") return "Program Head Login";
    if (role === "faculty") return "Faculty Login";
    return "Enter your credentials to access the scheduling platform";
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Building Image */}
      <div
        className="w-1/2 flex flex-col justify-end relative overflow-hidden"
        style={{
          backgroundImage: `url(${campusImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#002B7F]/90 via-[#002B7F]/50 to-transparent"></div>
        <div className="relative z-10 p-12">
          <h1
            className="text-3xl mb-4 leading-tight"
            style={{
              color: "white",
              fontWeight: 700,
              textShadow: "2px 2px 8px rgba(0,0,0,0.8)",
            }}
          >
            ScheduLogic: An Intelligent Scheduling System with
            AI Assistant for STI College Balagtas
          </h1>
          <p
            className="text-sm"
            style={{
              color: "rgba(255, 255, 255, 0.9)",
              textShadow: "1px 1px 4px rgba(0,0,0,0.8)",
            }}
          >
            © 2026 STI Academic Systems Inc.
          </p>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-1/2 flex items-center justify-center bg-white">
        <div className="w-full max-w-sm px-8">
          {/* STI Logo */}
          <div className="flex justify-center mb-6">
            <img
              src={stiLogo}
              alt="STI"
              className="w-24 h-24 object-contain rounded"
            />
          </div>

          {/* ScheduLogic Title */}
          <div className="text-center mb-8">
            <h2
              className="text-2xl mb-2"
              style={{ color: "#002B7F", fontWeight: 700 }}
            >
              ScheduLogic
            </h2>
            <p
              className="text-sm mb-6"
              style={{ color: "#666666", fontWeight: 500 }}
            >
              {getRoleLabel()}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label
                htmlFor="role"
                className="text-xs"
                style={{ color: "#666666", fontWeight: 600 }}
              >
                Login As
              </Label>
              <Select
                value={role}
                onValueChange={(value: any) => setRole(value)}
                required
              >
                <SelectTrigger className="h-11 border-gray-300">
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">
                    Administrator
                  </SelectItem>
                  <SelectItem value="program-head">
                    Program Head
                  </SelectItem>
                  <SelectItem value="faculty">
                    Faculty
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-xs"
                style={{ color: "#666666", fontWeight: 600 }}
              >
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="h-11 border-gray-300 focus:border-[#002B7F] focus:ring-[#002B7F]"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label
                  htmlFor="password"
                  className="text-xs"
                  style={{ color: "#666666", fontWeight: 600 }}
                >
                  Password
                </Label>
                <a
                  href="#"
                  className="text-xs"
                  style={{ color: "#002B7F" }}
                >
                  Forgot Password?
                </a>
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="h-11 border-gray-300 focus:border-[#002B7F] focus:ring-[#002B7F]"
              />
            </div>

            <div className="pt-2">
              <Button
                type="submit"
                className="w-full h-11 text-base"
                style={{
                  backgroundColor: "#FFD400",
                  color: "#002B7F",
                  fontWeight: 600,
                }}
              >
                Sign In
              </Button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs" style={{ color: "#999999" }}>
              Having trouble signing in? Contact admin
            </p>
          </div>

          <div
            className="mt-8 text-center text-xs"
            style={{ color: "#999999" }}
          >
            © 2026 STI Education Systems Inc.
          </div>
        </div>
      </div>
    </div>
  );
}