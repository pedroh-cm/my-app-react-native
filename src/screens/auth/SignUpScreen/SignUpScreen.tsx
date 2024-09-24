import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack"; 
import { useResetNavigationSuccess } from "../../../hooks/useResetNavigationSuccess";

import { Screen } from "../../../components/Screen/Screen";
import { Text } from "../../../components/Text/Text";
import { TextInput } from "../../../components/TextInput/TextInput";
import { Button } from "../../../components/Button/Button";
import { PasswordInput } from "../../../components/PasswordInput/PasswordInput";

import { RootStackParamList } from "../../../routes/Routes";

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SignUpScreen({ navigation }: ScreenProps) {
    const { reset } = useResetNavigationSuccess()

    function submitForm() {
        // implementar
        reset({
            title: 'Sua conta foi criada com sucesso !',
            description: 'Agora é só fazer login na nossa plataforma.',
            icon: {
                name: 'checkRoundIcon',
                color: 'success'
            }
        })
    }

    return (
        <Screen canGoBack scrollable>
            <Text preset="headingLarge" marginBottom="s32" bold>Criar uma conta</Text>
            <TextInput label="Seu username" placeholder="@" boxProps={{ marginBottom: 's20' }} />
            <TextInput label="Nome completo" placeholder="Digite seu nome completo" boxProps={{ marginBottom: 's20' }} />

            <TextInput label='E-mail' placeholder='Digite seu e-mail' boxProps={{ marginBottom: 's20' }} />
            <PasswordInput label='Senha'  placeholder='Digite sua senha' boxProps={{ marginBottom: 's48' }} />

            <Button title='Criar conta' onPress={submitForm} />
        </Screen>
    )
}