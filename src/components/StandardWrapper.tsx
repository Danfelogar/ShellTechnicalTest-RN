import { JSX, ReactNode } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export const StandardWrapper = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? '#0000' : '#FFFF',
  };

  return (
    <SafeAreaProvider style={backgroundStyle}>
      <StatusBar
        backgroundColor={isDarkMode ? '#0000' : '#FFFF'}
        showHideTransition="slide"
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      {children}
    </SafeAreaProvider>
  );
};
