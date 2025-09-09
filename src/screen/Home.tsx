import { StyleSheet, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@react-native-vector-icons/feather';

import { ButtonGeneric, StandardWrapper } from '../components';
import { RootStackMainParams } from '../types';

type NavigationProp = StackScreenProps<RootStackMainParams, 'Home'>;

export const Home = () => {
  const { container } = styles;
  const navigation = useNavigation<NavigationProp['navigation']>();

  const handlePress = () => {
    navigation.navigate('Details', {
      id: '123',
    });
  };

  return (
    <StandardWrapper>
      <View style={container}>
        <Text style={styles.title}>Home</Text>
        <ButtonGeneric
          buttonStyle={styles.button}
          onPress={handlePress}
          firstIcon={<Feather name="navigation" size={25} color={'#fff'} />}
          textContent={<Text style={styles.buttonText}>Go to the Details</Text>}
        />
      </View>
    </StandardWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 32,
    color: '#222',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginTop: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 10,
  },
});
