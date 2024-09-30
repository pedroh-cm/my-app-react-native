import React from 'react';

import { ActivityIndicator, TouchableBox, TouchableBoxProps, Text } from '@components';

import { buttonPresets } from './buttonPresets';

export type ButtonPreset = 'primary' | 'outline';

interface ButtonProps extends TouchableBoxProps {
    title: string
    loading?: boolean
    preset?: ButtonPreset
    disabled?: boolean
}

export function Button({ title, loading, preset = 'primary', disabled, ...touchableBoxProps }: ButtonProps) {
    const buttonPreset = buttonPresets[preset][disabled ? 'disabled' : 'default'];
    return (
        <TouchableBox disabled={disabled || loading} paddingHorizontal="s20" height={50} alignItems="center" justifyContent="center" borderRadius="s16" {...touchableBoxProps} {...buttonPreset.container}>
            {loading ? <ActivityIndicator color={buttonPreset.content} /> : <Text preset="paragraphMedium" color={buttonPreset.content}>{title}</Text>}
        </TouchableBox>
    );
}
