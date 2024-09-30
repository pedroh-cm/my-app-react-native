import React from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Screen, Text, Icon, Button } from '@components';
import { RootStackParamList } from '@routes';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SuccessScreen'>

export function SuccessScreen({ route, navigation }: ScreenProps) {
    function goBackToBegin() {
        // implementar
        navigation.goBack();
    }

    return (
        <Screen>
            <Icon {...route.params.icon} />
            <Text marginTop="s24" preset="headingLarge">{route.params.title}</Text>
            <Text mt="s16" preset="paragraphLarge">{route.params.description}</Text>
            <Button marginTop="s40" title="Voltar ao início" onPress={goBackToBegin} />
        </Screen>
    );
}
