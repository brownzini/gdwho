"use client"

import { useMessageBox } from "@/contexts/messageBox/useMessageBox";
import AuthScreen from "@/screens/AuthScreen";
import MessageBox from "@/shared/MessageBox";

export default function Login() {
  const { isOpenMB } = useMessageBox();
  return (
    <>
    {isOpenMB && <MessageBox />}
    <AuthScreen />
    </>
  );
}
