// Domain Entity Types
export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Settings {
  id: string;
  userId: string;
  theme: 'light' | 'dark';
  language: string;
  notifications: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Page {
  id: string;
  url: string;
  title: string;
  content: string;
  analyzedAt: Date;
  userId: string;
}

// Value Objects
export interface Email {
  value: string;
  isValid(): boolean;
  toString(): string;
}

export interface URL {
  value: string;
  isValid(): boolean;
  getDomain(): string;
  getPath(): string;
}
