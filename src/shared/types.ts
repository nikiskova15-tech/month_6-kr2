type Role = "admin" | "user";

interface User {
  id: number;
  name: string;
  email: string;
  role: Role;
  avatarUrl?: string;
}

interface Admin extends User {
  permissions: string[];
}
