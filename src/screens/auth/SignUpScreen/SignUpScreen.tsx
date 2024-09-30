import React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useForm } from 'react-hook-form';


import { Screen, Text, Button, FormTextInput, FormPasswordInput } from '@components';
import { useResetNavigationSuccess } from '@hooks';
import { RootStackParamList } from '@routes';

import { signUpSchema, signUpSchemaType } from './signUpSchema';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SignUpScreen({ navigation }: ScreenProps) {
    const { reset } = useResetNavigationSuccess();
    const {control, handleSubmit, formState} = useForm<signUpSchemaType>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            username: '',
            fullName: '',
            email: '',
            password: '',
        },
        mode: 'onChange',
    });


    function submitForm(formValues: signUpSchemaType) {
        console.log(formValues);
        // implementar
        // reset({
        //     title: 'Sua conta foi criada com sucesso !',
        //     description: 'Agora é só fazer login na nossa plataforma.',
        //     icon: {
        //         name: 'checkRoundIcon',
        //         color: 'success'
        //     }
        // })
    }

    return (
        <Screen canGoBack scrollable>
             <Text preset="headingLarge" marginBottom="s32" bold>Criar uma conta</Text>
            <FormTextInput
                control={control}
                name="username"
                label="Seu username"
                placeholder="@"
                boxProps={{ marginBottom: 's20' }}
            />
            <FormTextInput
                control={control}
                name="fullName"
                autoCapitalize="words"
                label="Nome completo"
                placeholder="Digite seu nome completo"
                boxProps={{ marginBottom: 's20' }}
            />
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
                boxProps={{ marginBottom: 's48' }}
                label="Senha"
                placeholder="Digite sua senha"
            />
            <Button title="Criar conta" onPress={handleSubmit(submitForm)} disabled={!formState.isValid} />
        </Screen>
    );
}
