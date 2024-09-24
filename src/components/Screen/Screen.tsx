import React from "react";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAvoidingView, Platform } from "react-native";
import { useAppSafeArea } from "../../hooks/useAppSafeArea";
import { useAppTheme } from "../../hooks/useAppTheme";

import { Box, TouchableBox } from "../Box/Box";
import { Icon } from "../Icon/Icon";
import { Text } from "../Text/Text";
import { ScrollViewContainer, ViewContainer } from "./components/ScreenContainer";


interface ScreenProps {
    children: React.ReactNode
    canGoBack?: boolean
    scrollable?: boolean
}

export function Screen({ children, canGoBack = false, scrollable = false }: ScreenProps) {
    const {top, bottom} = useAppSafeArea();
    const {colors} = useAppTheme();
    const navigation = useNavigation()

    const Container = scrollable ? ScrollViewContainer : ViewContainer

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
            <Container backgroundColor={colors.background}>
                <Box paddingHorizontal="s24" style={{ paddingTop: top, paddingBottom: bottom }}>
                    {canGoBack && (
                        <TouchableBox onPress={navigation.goBack} marginBottom="s24" flexDirection="row" alignItems="center">
                            <Icon name="arrowLeft" color="primary" />
                            <Text preset="paragraphMedium" marginLeft="s8" semiBold>Voltar</Text>
                        </TouchableBox>
                    )}
                    {children}
                </Box>
            </Container>
        </KeyboardAvoidingView>
    )
}