import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {LevelOneStack, AuthStacks, AppStack} from './Stack';

export const Navigator = () => {
  return (
    <NavigationContainer>
      <AuthStacks />
    </NavigationContainer>
  );
};
