
import { UserContextType } from '@/types/userContextType';
import { createContext } from 'react';

export const UserContext = createContext<UserContextType | null>(null);
