import './sign-in-page.scss';
import MainHeading from '../../components/headings/main-heading/MainHeading';
import TextButton from '../../components/buttons/text-button/TextButton';
import GlassCard from '@/app/components/glass-card/GlassCard';
import SubHeading from '@/app/components/headings/sub-heading/SubHeading';
import TextInput from '@/app/components/text-input/TextInput';

export default function SignInPage() {
  return (
    <div className="rra-sign-in-page">
      <GlassCard className="rra-sign-in-page-glass-card">
        <MainHeading className="rra-sign-in-page-heading" title={'Sign in'} />

        <TextInput
          className="rra-sign-in-page-input-email"
          type="email"
          fieldId="rra-sign-in-page-input-email"
          placeholder="E-mail"
        />

        <TextInput
          className="rra-sign-in-page-input-password"
          type="password"
          fieldId="rra-sign-in-page-input-password"
          placeholder="Password"
        />

        <TextButton
          className="rra-sign-in-page-sign-in-button"
          title={'Sign in'}
        />
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
          />
        </div>
      </GlassCard>
    </div>
  );
}
