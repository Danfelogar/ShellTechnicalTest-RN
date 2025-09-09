import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { validateLogin } from '../utils';
import { useState } from 'react';

export interface ILoginCredentials {
  userEmail: string;
  password: string;
  selectGender: string;
}

export const useValidationForm = () => {
  const [isPasswordSecret, setIsPasswordSecret] = useState<boolean>(true);

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginCredentials>({
    resolver: yupResolver(validateLogin),
  });

  const changePasswordSecret = () => {
    setIsPasswordSecret(!isPasswordSecret);
  };

  const validateCredentialsLogin = async (data: ILoginCredentials) => {
    console.log('data', data);
  };

  return {
    // state
    isPasswordSecret,
    errors,
    // methods
    control,
    reset,
    handleSubmit,
    // action
    changePasswordSecret,
    validateCredentialsLogin,
  };
};
