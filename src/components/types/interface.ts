import { User } from "firebase/auth";
import { MouseEventHandler, ReactNode } from "react";

export interface FetchLog {
  url: string;
  method: string;
  payload: any;
  status: number | string;
  error?: string;
  timestamp: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  instructions: string;
  meal: string;
  img: string;
  quantity?: number;
  [key: string]: any;
}

export interface OrderCardsProps {
  productList: Product[];
  addToCart: (product: Product & { quantity: number }) => void;
}

export type CartItem = {
    quantity: number;
};

export interface MenuPageProps {
  productList: Product[];
  categories: string[];
  addToCart: (product: Product & { quantity: number }) => void;
  isLoading: boolean;
  error?: string | null;
}

export interface AppRoutesProps {
  productList: Product[] | null;
  categories: string[];
  addToCart: (product: Product & { quantity?: number }) => void;
  loading: boolean;
  error: string | null;
  user: User | null;
  isAuthLoading: boolean;
}

export interface ButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  variant?: 'primary' | 'secondary' | string;
  size?: 'medium' | 'small' | 'large' | string;
  type?: 'regular' | 'button' | 'submit' | 'reset';
  className?: string;
}

export interface LoadingBarProps {
  variant?: 'loaderSpinner' | 'loaderDots'; 
}

export interface TooltipProps {
  children: ReactNode;
  text: string;
  position?: "top" | "bottom" | "left" | "right";
}

export interface FooterLinksProps {
    title: string;
    links: FooterLink[];
}

export interface FooterLink {
  name: string;
  href: string;
}

export interface HeaderLink {
  name: string;
  href: string;
  authOnly?: boolean;
}

export interface HeaderLinksProps {
  links: HeaderLink[];
  user?: any;
}

export interface HeaderProps {
  cart: Record<string, CartItem>;
  user: User | null;
  isAuthLoading: boolean;
}

export interface LogInPageProps {
  user: User | null;
  isAuthLoading: boolean;
}