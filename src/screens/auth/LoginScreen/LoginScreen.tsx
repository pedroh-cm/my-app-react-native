import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Text } from '../../../components/Text/Text';
import { Button } from '../../../components/Button/Button';
import { Screen } from '../../../components/Screen/Screen';

import { RootStackParamList } from '../../../routes/Routes';
import { LoginFormTypeSchema, loginSchema } from './loginSchema';
import { FormTextInput } from '../../../components/Form/FormTextInput';
import { FormPasswordInput } from '../../../components/Form/FormPasswordInput';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>

export function LoginScreen({ navigation }: ScreenProps) {
  const {control, formState, handleSubmit} = useForm<LoginFormTypeSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  function navigateToForgotPasswordScreen() {
    navigation.navigate('ForgotPasswordScreen');
  }

  function submitForm({ email, password }: LoginFormTypeSchema) {
    // implementar
  }

    return (
    <Screen scrollable>
        <Text preset="headingLarge" marginBottom="s8">Olá</Text>
        <Text preset="paragraphLarge" marginBottom="s40">Digite seu e-mail e senha para entrar</Text>
        <FormTextInput
          control={control}
          name="email"
          boxProps={{ marginBottom: 's20' }}
          label="E-mail"
          placeholder="Digite seu e-mail"
          keyboardType="email-address"
        />
        <FormPasswordInput
          control={control}
          name="password"
          boxProps={{ marginBottom: 's20' }}
          label="Senha"
          placeholder="Digite sua senha"
        />
        <Text onPress={navigateToForgotPasswordScreen} color="primary" preset="paragraphSmall" bold>Esqueci minha senha</Text>
        <Button onPress={handleSubmit(submitForm)} disabled={!formState.isValid} title="Entrar" marginTop="s48" />
        <Button onPress={navigateToSignUpScreen} title="Criar uma conta" marginTop="s12" preset="outline" />
      </Screen>
    );
}
