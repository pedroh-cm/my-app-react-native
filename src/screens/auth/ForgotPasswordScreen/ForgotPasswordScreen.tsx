import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useResetNavigationSuccess } from '@hooks';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Text, Button, Screen, FormTextInput } from '@components';
import { RootStackParamList } from '@routes';

import { ForgotPasswordFormTypeSchema, forgotPasswordSchema } from './forgotPasswordSchema';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'ForgotPasswordScreen'>

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function ForgotPasswordScreen({ navigation }: ScreenProps) {
    const { reset } = useResetNavigationSuccess();

    const {control, formState, handleSubmit} = useForm<ForgotPasswordFormTypeSchema>({
        resolver: zodResolver(forgotPasswordSchema),
        defaultValues: {
            email: '',
        },
        mode: 'onChange',
    });

    function submitForm() {
        reset(
            {
                title: `Enviamos as instruções ${'\n'} para seu e-mail`,
                description: 'Clique no link enviado no seu e-mail para recuperar sua senha',
                icon: {
                    name: 'messageRound',
                    color: 'primary',
                },
            }
        );
    }


    return (
        <Screen canGoBack>
            <Text preset="headingLarge" bold marginBottom="s16">Esqueci minha senha</Text>
            <Text preset="paragraphLarge" marginBottom="s32">Digite seu e-mail e enviaremos as instruções para redefinição de senha</Text>
            <FormTextInput
                control={control}
                name="email"
                boxProps={{ marginBottom: 's40' }}
                label="E-mail"
                placeholder="Digite seu e-mail"
            />
            <Button title="Recuperar senha" onPress={handleSubmit(submitForm)} disabled={!formState.isValid} />
        </Screen>
    );
}
