import React from 'react';

import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

import {
  Box,
  BoxProps,
  Icon,
  Text,
  TextProps,
  TouchableBox,
  TouchableBoxProps,
} from '@components';
import {useAppSafeArea} from '@hooks';
import {AppTabBottomTabParamList} from '@routes';
import {$shadowProps} from '@theme';

import {mapScreenToProps} from './mapScreenToProps';

export function AppTabBar({state, descriptors, navigation}: BottomTabBarProps) {
  const {bottom} = useAppSafeArea();

  return (
    <Box {...$boxWrapper} style={{paddingBottom: bottom, ...$shadowProps}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const isFocused = state.index === index;

        const tabItem =
          mapScreenToProps[route.name as keyof AppTabBottomTabParamList];

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableBox
            {...$itemWrapper}
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1}}>
            <Icon
              name={tabItem.icon[isFocused ? 'focused' : 'unfocused']}
              color={isFocused ? 'primary' : 'backgroundContrast'}
            />
            <Text
              color={isFocused ? 'primary' : 'backgroundContrast'}
              {...$label}>
              {tabItem.label}
            </Text>
          </TouchableBox>
        );
      })}
    </Box>
  );
}

const $label: TextProps = {
  marginTop: 's4',
  semiBold: true,
  preset: 'paragraphCaption',
};

const $itemWrapper: TouchableBoxProps = {
  activeOpacity: 1,
  alignItems: 'center',
  accessibilityRole: 'button',
};

const $boxWrapper: BoxProps = {
  flexDirection: 'row',
  paddingTop: 's12',
  backgroundColor: 'background',
};
