'use client';

import './sign-in-page.scss';
import MainHeading from '../../components/headings/main-heading/MainHeading';
import TextButton from '../../components/buttons/text-button/TextButton';
import GlassCard from '@/app/components/glass-card/GlassCard';
import SubHeading from '@/app/components/headings/sub-heading/SubHeading';
import TextInput from '@/app/components/text-input/TextInput';

import { Formik, Form, FormikProps } from 'formik';
import { signInSchema } from '@/app/validation-schemas/sign-in.schema';

interface SignInFormValues {
  email: string;
  password: string;
}

export default function SignInPage() {
  const onSubmit = (values: SignInFormValues) => {
    console.log('sign in values : ', values);
  };

  const initialValues: SignInFormValues = {
    email: '',
    password: '',
  };

  return (
    <div className="rra-sign-in-page">
      <GlassCard className="rra-sign-in-page-glass-card">
        <MainHeading className="rra-sign-in-page-heading" title={'Sign in'} />

        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={signInSchema}>
          {(props: FormikProps<SignInFormValues>) => (
            <Form>
              <TextInput
                className="rra-sign-in-page-input-email"
                type="email"
                id="rra-sign-in-page-input-email-id"
                // name="rra-sign-in-page-input-email-name"
                name="email"
                placeholder="E-mail"
              />

              <TextInput
                className="rra-sign-in-page-input-password"
                type="password"
                id="rra-sign-in-page-input-password-id"
                // name="rra-sign-in-page-input-password-name"
                name="password"
                placeholder="Password"
              />

              <TextButton
                className="rra-sign-in-page-sign-in-button"
                title={'Sign in'}
                type={'submit'}
              />
            </Form>
          )}
        </Formik>

        <div className="rra-flex-between-center">
          <SubHeading
            className="rra-sign-in-page-sub-heading"
            title={"Don't have account?"}
            size={'xs'}
          />
          <TextButton
            className="rra-sign-in-page-sign-up-button"
            title={'Sign up'}
            size={'sm'}
            mode="link"
            linkHref="/pages/sign-up"
          />
        </div>
      </GlassCard>
    </div>
  );
}
