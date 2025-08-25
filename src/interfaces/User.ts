export interface User {
  id: string; // UUID del usuario
  email: string; // Correo del usuario
  name: string;
  createdAt: string; // Fecha de creación
  updatedAt?: string; // Última fecha de actualización
}

export type UserSession=Pick<User, 'email'>&{
  id: string;
  role: string;
  lastSignInAt: string;
  createdAt: string;
  emailVerified: boolean;

}


export interface LoginUserCurrently {
  email: string;
  password: string;
}
