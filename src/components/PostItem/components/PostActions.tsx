import React from 'react';

import {Post} from '@domain';

import {Box, Icon, IconProps, Text, TouchableOpacityBox} from '@components';

type Props = Pick<Post, 'reactionCount' | 'commentCount' | 'favoriteCount'>;

export function PostActions({
  reactionCount,
  commentCount,
  favoriteCount,
}: Props) {
  function likePost() {
    // TODO: Implement like post
  }

  function navigateToComments() {
    // TODO: Implement navigate to comments
  }

  function favoritePost() {
    // TODO: Implement favorite post
  }

  return (
    <Box flexDirection="row" mt="s16">
      <Item
        marked
        label={reactionCount}
        onPress={likePost}
        iconName={{
          default: 'heart',
          marked: 'heartFill',
        }}
      />
      <Item
        label={commentCount}
        onPress={navigateToComments}
        iconName={{
          default: 'comment',
          marked: 'comment',
        }}
      />
      <Item
        label={favoriteCount}
        onPress={favoritePost}
        iconName={{
          default: 'bookmark',
          marked: 'bookmarkFill',
        }}
      />
    </Box>
  );
}

interface ItemProps {
  onPress: () => void;
  marked?: boolean;
  iconName: {
    default: IconProps['name'];
    marked: IconProps['name'];
  };
  label: number;
}

function Item({onPress, iconName, label, marked = false}: ItemProps) {
  return (
    <TouchableOpacityBox
      onPress={onPress}
      flexDirection="row"
      alignItems="center"
      mr="s24">
      <Icon
        color={marked ? 'market' : undefined}
        name={iconName[marked ? 'marked' : 'default']}
      />
      {label !== 0 && (
        <Text bold ml="s4" preset="paragraphSmall">
          {label}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
