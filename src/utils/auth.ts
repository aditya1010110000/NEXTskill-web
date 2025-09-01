import credentials from "../assets/data/credentials.json";

export const login = (email: string, password: string): boolean => {
  const user = credentials.find(
    (cred) => cred.email === email && cred.password === password
  );
  return !!user; // Returns true if user exists, false otherwise
};

export const signup = (email: string, password: string): boolean => {
  const userExists = credentials.some((cred) => cred.email === email);
  if (userExists) {
    return false; // User already exists
  }

  // Add new user to the credentials (mocking the process)
  credentials.push({ email, password });
  return true;
};