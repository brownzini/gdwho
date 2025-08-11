import { ScreenContextType } from '@/types/ScreenType';
import { createContext } from 'react';

export const ScreenContext = createContext<ScreenContextType | null>(null);
