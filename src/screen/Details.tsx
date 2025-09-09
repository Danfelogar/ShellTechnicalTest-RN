import { StyleSheet, Text, View } from 'react-native';
import EvilIcons from '@react-native-vector-icons/evil-icons';
import Ionicons from '@react-native-vector-icons/ionicons';
import { Feather } from '@react-native-vector-icons/feather';
import FontAwesome from '@react-native-vector-icons/fontawesome';

import {
  ButtonGeneric,
  InputGeneric,
  InputSelect,
  StandardWrapper,
} from '../components';
import { useValidationForm } from '../hooks/useValidationForm';
import { heightFullScreen } from '../utils';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackMainParams } from '../types';

interface Props extends StackScreenProps<RootStackMainParams, 'Details'> {}

export const Details = ({ route, navigation }: Props) => {
  const { container, button, buttonText, contentInput } = styles;

  const {
    // state
    isPasswordSecret,
    // methods
    control,
    reset,
    handleSubmit,
    // action
    changePasswordSecret,
    validateCredentialsLogin,
  } = useValidationForm();

  return (
    <StandardWrapper>
      <View style={container}>
        <Text>Details</Text>
        <View style={contentInput}>
          <InputGeneric
            control={control}
            name={'userEmail'}
            borderColor={'#ccc'}
            firstIcon={
              <Feather
                name="user"
                size={heightFullScreen / 34}
                color={'#ccc'}
              />
            }
            placeholder="User"
            keyboardType="default"
            placeholderTextColor={'#ccc'}
            inputColor={'#000'}
            autoCorrect
          />
        </View>
        <View style={contentInput}>
          <InputGeneric
            control={control}
            name={'password'}
            borderColor={'#ccc'}
            lastIcon={
              <Ionicons
                onPress={changePasswordSecret}
                name={isPasswordSecret ? 'eye' : 'eye-off'}
                size={heightFullScreen / 34}
                color={'#ccc'}
              />
            }
            placeholder="Password"
            isSecretText={isPasswordSecret}
            placeholderTextColor={'#ccc'}
            inputColor={'#000'}
            autoCorrect
          />
        </View>
        <View style={contentInput}>
          <InputSelect
            control={control}
            name="selectGender"
            placeHolder="Select Gender"
            borderColor={'#ccc'}
            firstIcon={
              <Feather
                name="user"
                size={heightFullScreen / 34}
                color={'#ccc'}
              />
            }
            placeholderTextColor={'#ccc'}
            inputColor={'#000'}
            items={[
              { label: 'Male', value: 'male' },
              { label: 'Female', value: 'female' },
              { label: 'Non-binary', value: 'non_binary' },
              { label: 'Transgender Male', value: 'trans_male' },
              { label: 'Transgender Female', value: 'trans_female' },
              { label: 'Genderqueer', value: 'genderqueer' },
              { label: 'Agender', value: 'agender' },
              { label: 'Two-Spirit', value: 'two_spirit' },
              { label: 'Intersex', value: 'intersex' },
              { label: 'Prefer not to say', value: 'prefer_not_say' },
              { label: 'Other', value: 'other' },
            ]}
          />
        </View>

        <ButtonGeneric
          buttonStyle={button}
          onPress={() => {
            reset();
          }}
          firstIcon={<EvilIcons name="trash" size={25} color={'#fff'} />}
          textContent={<Text style={buttonText}>Reset Form</Text>}
        />
        <ButtonGeneric
          buttonStyle={button}
          onPress={handleSubmit(validateCredentialsLogin)}
          firstIcon={<FontAwesome name="wpforms" size={25} color={'#fff'} />}
          textContent={<Text style={buttonText}>Validate Form</Text>}
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
    paddingHorizontal: 20,
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
  contentInput: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    maxHeight: heightFullScreen * 0.5,
    marginBottom: 22,
  },
});
