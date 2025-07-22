import { createContext } from "react";
import type { AdminContextType } from "../interface";

export const AdminContext = createContext<AdminContextType | undefined>(undefined);
