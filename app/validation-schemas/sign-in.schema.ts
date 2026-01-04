import * as yup from 'yup';

import { passwordRegExp } from './constants/validation-reg-exp';

import {
  MESSAGE_EMAIL_INVALID,
  MESSAGE_PASSWORD_INVALID,
  MESSAGE_PASSWORD_MAX,
  MESSAGE_PASSWORD_MIN,
  MESSAGE_REQUIRED,
} from './constants/validation-messages';

import {
  PASSWORD_MIN_LENGTH,
  PASSWORD_MAX_LENGTH,
} from './constants/validation-values';

export const signInSchema = yup.object().shape({
  email: yup.string().email(MESSAGE_EMAIL_INVALID).required(MESSAGE_REQUIRED),
  password: yup
    .string()
    .min(PASSWORD_MIN_LENGTH, MESSAGE_PASSWORD_MIN)
    .max(PASSWORD_MAX_LENGTH, MESSAGE_PASSWORD_MAX)
    .matches(passwordRegExp, { message: MESSAGE_PASSWORD_INVALID })
    .required(MESSAGE_REQUIRED),
});
