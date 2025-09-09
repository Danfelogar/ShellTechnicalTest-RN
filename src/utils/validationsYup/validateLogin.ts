import * as yup from 'yup';

export const validateLogin = yup.object().shape({
  userEmail: yup
    .string()
    .email('Please enter a valid email address.')
    .required('Email is required.'),
  password: yup
    .string()
    .min(5, 'Password must be at least 5 characters long.')
    .required('Password is required.'),
  selectGender: yup.string().required('Gender selection is required.'),
});
