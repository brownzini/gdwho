
import { createContext } from 'react';
import { GameContextType } from '@/types/GameContextType';

export const GameContext = createContext<GameContextType | null>(null);
