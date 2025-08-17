
import { HistoryContextType } from '@/types/historyContextType';
import { createContext } from 'react';

export const HistoryContext = createContext<HistoryContextType | null>(null);
