import { View, Text } from "react-native";
import React from 'react'
import { LoginForm } from "../components/Auth/LoginForm";
import { UserData } from "../components/Auth/UserData";
import useAuth from "../hooks/useAuth";

function Account() {
  const { auth } = useAuth();

  return (
    <View>
        {auth ? <UserData /> : <LoginForm />}
      <Text>Account</Text>
    </View>
  );
}

export { Account };