
import { ScreenContextType } from '@/types/screenContextType';
import { createContext } from 'react';

export const ScreenContext = createContext<ScreenContextType | null>(null);
