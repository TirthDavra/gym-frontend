import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

import { loginApi } from "../../api/authApi";
import { useAuth } from "../../context/AuthContext";

import Card from "../../components/common/Card";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

const LoginPage = () => {
  const navigate = useNavigate();

  const { login, user } = useAuth();

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
    });

  useEffect(() => {
    const token =
      localStorage.getItem("token");

    if (token || user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (
    e
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response =
        await loginApi(formData);

      login(response.data);

      toast.success(
        "Login successful"
      );

      navigate("/dashboard");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
        "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <Card className="w-full p-4 max-w-md bg-red-400">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-900">
            Gym Management
          </h1>

          <p className="text-slate-500 mt-2">
            Login to continue
          </p>
        </div>

        <div className="mb-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
          <p className="text-sm font-semibold text-slate-700 mb-2">
            Admin Credentials:
          </p>
          <p className="text-sm text-slate-600">
            <span className="font-medium">Email:</span> admin@gmail.com
          </p>
          <p className="text-sm text-slate-600">
            <span className="font-medium">Password:</span> admin123
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <Input
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
          />

          <Input
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
          />

          <Button
            type="submit"
            loading={loading}
          >
            Login
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default LoginPage;