import { GestureResponderEvent, StyleProp } from 'react-native';
import { ReactNode } from 'react';

export interface ButtonGenericProps {
  buttonStyle: StyleProp<any>;
  activeOpacity?: number;
  onPress: (event: GestureResponderEvent) => void;
  firstIcon?: ReactNode;
  textContent?: ReactNode;
  lastIcon?: ReactNode;
  isLoading?: boolean;
  colorSpinierLoading?: string;
}
