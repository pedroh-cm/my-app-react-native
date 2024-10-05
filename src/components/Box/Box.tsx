import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

import {
  createBox,
  createRestyleComponent,
  BackgroundColorProps,
  backgroundColor,
  SpacingProps,
  spacing,
  spacingShorthand,
  SpacingShorthandProps,
  LayoutProps,
  layout,
  BorderProps,
  border,
} from '@shopify/restyle';

import {Theme} from '@theme';

export const Box = createBox<Theme>();
export type BoxProps = React.ComponentProps<typeof Box>;

export type TouchableBoxProps = BackgroundColorProps<Theme> &
  SpacingProps<Theme> &
  LayoutProps<Theme> &
  BorderProps<Theme> &
  SpacingShorthandProps<Theme> &
  TouchableOpacityProps;
export const TouchableOpacityBox = createRestyleComponent<
  TouchableBoxProps,
  Theme
>(
  [backgroundColor, spacing, layout, border, spacingShorthand],
  TouchableOpacity,
);
