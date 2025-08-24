export interface User {
  id: string; // UUID del usuario
  email: string; // Correo del usuario
  name: string;
  createdAt: string; // Fecha de creación
  updatedAt?: string; // Última fecha de actualización
}

export interface LoginUserCurrently {
  email: string;
  password: string;
}
