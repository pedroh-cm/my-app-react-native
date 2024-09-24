import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack"; 

import { useForm, Controller } from "react-hook-form";

import { Text } from "../../../components/Text/Text";
import { TextInput } from "../../../components/TextInput/TextInput";
import { Button } from "../../../components/Button/Button";
import { Screen } from "../../../components/Screen/Screen";
import { PasswordInput } from "../../../components/PasswordInput/PasswordInput";

import { RootStackParamList } from "../../../routes/Routes";

type LoginFormType = {
  email: string
  password: string
}

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>

export function LoginScreen({ navigation }: ScreenProps) {
  const {control, formState, handleSubmit} = useForm<LoginFormType>({
    defaultValues: {
      email: '',
      password: ''
    },
    mode: 'onChange'
  })

  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen')
  }

  function navigateToForgotPasswordScreen() {
    navigation.navigate('ForgotPasswordScreen')
  }

  function submitForm({ email, password }: LoginFormType) {
    console.log(email, password)
    // implementar
  }

    return (
    <Screen scrollable>
        <Text preset='headingLarge' marginBottom='s8'>Olá</Text>
        <Text preset='paragraphLarge' marginBottom='s40'>Digite seu e-mail e senha para entrar</Text>

        <Controller 
          control={control}
          name="email"
          rules={
            {
              required: 'E-mail obrigatório',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'E-mail inválido'
              }
            }
          }
          render={({ field, fieldState }) => (
            <TextInput 
              boxProps={{ marginBottom: 's20' }} 
              label='E-mail' 
              placeholder='Digite seu e-mail'
              value={field.value}
              onChangeText={field.onChange}
              errorMessage={fieldState.error?.message}
              keyboardType="email-address" 
            />
          )}
        />

        <Controller 
          control={control}
          name="password"
          rules={
            {
              required: 'Senha obrigatória',
              minLength: {
                value: 6,
                message: 'Senha deve ter pelo menos 6 caracteres'
              }
            }
          }
          render={({ field, fieldState }) => (
          <PasswordInput 
              boxProps={{ marginBottom: 's20' }} 
              label='Senha' 
              placeholder='Digite sua senha'
              value={field.value}
              onChangeText={field.onChange}
              errorMessage={fieldState.error?.message} 
            />
          )}
        />
        
        <Text onPress={navigateToForgotPasswordScreen} color='primary' preset='paragraphSmall' bold>Esqueci minha senha</Text>

        <Button onPress={handleSubmit(submitForm)} disabled={!formState.isValid} title='Entrar' marginTop='s48' />
        <Button onPress={navigateToSignUpScreen} title='Criar uma conta' marginTop='s12' preset='outline' />
      </Screen>
    )
}