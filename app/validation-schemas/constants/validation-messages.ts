import { PASSWORD_MAX_LENGTH, PASSWORD_MIN_LENGTH } from './validation-values';

export const MESSAGE_EMAIL_INVALID = 'Please, enter a valid e-mail';
export const MESSAGE_PASSWORD_INVALID = `Password should contain
  at least 1 digit,
  1 lowercase letter,
  1 capital letter, 
  1 special sign like @, ! or %.
  And also, no whitespace characters allowed.`;

export const MESSAGE_PASSWORD_MIN = `Password should contain at least ${PASSWORD_MIN_LENGTH} characters`;
export const MESSAGE_PASSWORD_MAX = `Password should contain maximum ${PASSWORD_MAX_LENGTH} characters`;

export const MESSAGE_PASSWORDS_DONT_MATCH =
  'Confirmation password should match the password';

export const MESSAGE_REQUIRED = 'The field must not be empty';
