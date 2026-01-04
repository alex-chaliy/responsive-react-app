import { PASSWORD_MAX_LENGTH, PASSWORD_MIN_LENGTH } from './validation-values';


// export const passwordRegExpWithLength =
//   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w\d\s])(?!.*\s).{8,12}$/;

export const passwordRegExpWithLength = new RegExp(
  String.raw`^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w\d\s])(?!.*\s).{${PASSWORD_MIN_LENGTH},${PASSWORD_MAX_LENGTH}}$`
);

// (?=.*\d) - at least 1 digit character
// (?=.*[a-z]) - at least 1 lowerCase character
// (?=.*[A-Z]) - at least 1 upperCase character
// (?=.*[^\w\d\s]) - at least 1 special character, like @, ! or *
// (?!.*\s) - Ensures no whitespace characters (\s) are anywhere in the string.

// If it's needed to __validate__a__string__length__ too, inside the passwordRegExpWithLength, add the next rule:
// .{6,15} - at least 6 characters and maximum 15 characters
// (example with min-max variables will be in the end)

// so, instead of the source passwordRegExpWithLength
//     /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w\d\s])(?!.*\s)$/
// we will get the next passwordRegExpWithLength
//     /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w\d\s])(?!.*\s).{6,15}$/


// If we need to __use__MIN__and__MAX__variables__ inside the passwordRegExpWithLength:
//
// 1) we should replace 6 and 15 values to variables with the template variable syntax like that:
//    6 - replace to ${MIN_VARIABLE}
//    15 - replace to ${MAX_VARIABLE}
//
// 2) remove wrapping slashes from the regExp
//    /regExpHere/ -> regExpHere
//
// 3) Wrap the regExp into back-quoted string `` and String.raw method by the next way
//    (remember: String.raw method is a __Javascript Tag Function__, that's why its call has a strange unusual syntax)
//    regExpHere -> String.raw`regExpHere`
//
// 4) Wrap the result creating a new RegExp object
//    String.raw`regExpHere` -> new RegExp( String.raw`regExpHere` )
//
// So, in the result we will have such expression as:
//  new RegExp(
//    String.raw`^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w\d\s])(?!.*\s).{${MIN_VARIABLE},${MAX_VARIABLE}}$`
//  )
//
// @reference - How do you use a variable in a regular expression?
// https://stackoverflow.com/a/494046/7455192


// However, in our case we use yup.min() and yup.max() functions to validate a password length,
// so the final regExp will be pretty simple
// and without validation on min and max string length:
//    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w\d\s])(?!.*\s)$/
//
// But also, IMPORTANT thing, password regExp does not work without length limitation,
// so we need manually switch off the string length limitation, just by adding .* in the end of the regExp
//    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w\d\s])(?!.*\s).*$/

export const passwordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w\d\s])(?!.*\s).*$/;

