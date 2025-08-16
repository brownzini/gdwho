
import { MessageBoxContextType } from '@/types/messageBoxContextType';
import { createContext } from 'react';

export const MessageBoxContext = createContext<MessageBoxContextType | null>(null);
