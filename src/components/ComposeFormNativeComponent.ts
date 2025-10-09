import type { HostComponent, ViewProps } from 'react-native';
import { codegenNativeComponent } from 'react-native';
import type { DirectEventHandler } from 'react-native/Libraries/Types/CodegenTypes';

export interface OnButtonPressEvent {
  value: string;
}

export interface OnTextChangeEvent {
  value: string;
}

export interface NativeProps extends ViewProps {
  title?: string;
  placeholder?: string;
  buttonText?: string;
  initialValue?: string;
  onButtonPress?: DirectEventHandler<OnButtonPressEvent>;
  onTextChange?: DirectEventHandler<OnTextChangeEvent>;
}

export default codegenNativeComponent<NativeProps>(
  'ComposeForm',
) as HostComponent<NativeProps>;
