import { ReactNode } from 'react';
import { Control, FieldValues } from 'react-hook-form';
import {
  KeyboardTypeOptions,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

//Input
export interface CustomInputGeneric<T extends FieldValues> {
  borderColor?: string;
  inputStyle?: StyleProp<any>;
  keyboardType?: KeyboardTypeOptions;
  firstIcon?: ReactNode;
  placeholder: string;
  placeholderTextColor: string;
  autoCorrect: boolean;
  isSecretText?: boolean;
  inputColor: string;
  lastIcon?: ReactNode;
  multiline?: boolean;
  multilineStyle?: StyleProp<any>;
  heightMultiline?: number;
  onChangeCallback?: (value: any) => void;

  //control
  name: string;
  control: Control<T, any>;
}

//Input Selector
export interface InputSelectProps<T extends FieldValues> {
  borderColor?: string;
  inputStyle?: StyleProp<ViewStyle>;
  containerOptionsStyle?: StyleProp<ViewStyle>;
  firstIcon?: ReactNode;
  placeholderTextColor?: string;

  inputValueStyle?: StyleProp<TextStyle>;
  inputColor?: string;

  typeSelector?: 'single' | 'multiple';
  iconCheckSize?: number;
  iconCheckColor?: string;
  iconCheck?: ReactNode;
  textOptionStyle?: StyleProp<TextStyle>;

  placeHolder: string;
  items: Array<{ label: string; value: string }>;
  onChangeCallback?: (value: any) => void;
  //control
  name: string;
  control: Control<T, any>;
}
