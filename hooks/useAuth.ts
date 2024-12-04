import { useState, useEffect } from 'react';
import { authService, LoginData, RegisterData } from '../src/services/auth';

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const userData = await authService.getCurrentUser();
        setUser(userData);
      }
    } catch (err) {
      setError('Authentication failed');
    } finally {
      setLoading(false);
    }
  };

  const login = async (data: LoginData) => {
    try {
      const response = await authService.login(data);
      setUser(response.user);
      setError(null);
      return response;
    } catch (err) {
      setError('Login failed');
      throw err;
    }
  };

  const register = async (data: RegisterData) => {
    try {
      const response = await authService.register(data);
      setUser(response.user);
      setError(null);
      return response;
    } catch (err) {
      setError('Registration failed');
      throw err;
    }
  };

  const logout = async () => {
    try {
      await authService.logout();
      setUser(null);
      setError(null);
    } catch (err) {
      setError('Logout failed');
      throw err;
    }
  };

  return {
    user,
    loading,
    error,
    login,
    register,
    logout
  };
}