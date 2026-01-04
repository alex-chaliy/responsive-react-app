'use client';

import './sign-up-page.scss';
import MainHeading from '../../components/headings/main-heading/MainHeading';
import TextButton from '../../components/buttons/text-button/TextButton';
import GlassCard from '@/app/components/glass-card/GlassCard';
import SubHeading from '@/app/components/headings/sub-heading/SubHeading';
import TextInput from '@/app/components/text-input/TextInput';

import { Formik, Form, FormikProps } from 'formik';
import { signUpSchema } from '@/app/validation-schemas/sign-up.schema';

interface SignUpFormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

export default function SignUpPage() {
  const onSubmit = (values: SignUpFormValues) => {
    console.log('sign up values : ', values);
  };

  const initialValues: SignUpFormValues = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  return (
    <div className="rra-sign-up-page">
      <GlassCard className="rra-sign-up-page-glass-card">
        <MainHeading className="rra-sign-up-page-heading" title={'Sign up'} />

        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={signUpSchema}
        >
          {(props: FormikProps<SignUpFormValues>) => (
            <Form>
              <TextInput
                className="rra-sign-up-page-input-email"
                type="email"
                id="rra-sign-up-page-input-email-id"
                name="email"
                placeholder="E-mail"
              />

              <TextInput
                className="rra-sign-up-page-input-password"
                type="password"
                id="rra-sign-up-page-input-password-id"
                name="password"
                placeholder="Password"
              />

              <TextInput
                className="rra-sign-up-page-input-confirm-password"
                type="password"
                id="rra-sign-up-page-input-confirm-password-id"
                name="confirmPassword"
                placeholder="Confirm Password"
              />

              <TextButton
                className="rra-sign-up-page-sign-up-button"
                title={'Sign up'}
                type={'submit'}
              />
            </Form>
          )}
        </Formik>

        <div className="rra-flex-between-center">
          <SubHeading
            className="rra-sign-up-page-sub-heading"
            title={'Already have account?'}
            size={'xs'}
          />
          <TextButton
            className="rra-sign-up-page-sign-in-button"
            title={'Sign in'}
            size={'sm'}
            mode="link"
            linkHref="/pages/sign-in"
          />
        </div>
      </GlassCard>
    </div>
  );
}
