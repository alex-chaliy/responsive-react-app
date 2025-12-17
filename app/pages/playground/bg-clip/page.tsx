import '../pgp-base.scss';
import './bg-clip.scss';
import MainHeading from '../../../components/headings/main-heading/MainHeading';
import TextButton from '../../../components/buttons/text-button/TextButton';
import SubHeading from '@/app/components/headings/sub-heading/SubHeading';
import LogoSVG from '../../../components/svg/LogoSVG';

// PG -playground
export default function BgClip_PG() {
  return (
    <div className="playground-page pgp-bg-clip">
      <MainHeading
        className="pgp-bg-clip__heading rra-mb-16"
        title={'CSS - Background Clip'}
      />
      <SubHeading
        className="pgp-bg-clip__sub-heading rra-mb-25"
        title={'playground for css background property'}
        size={'default-size'}
      />

      <div className="playground-page-content rra-mb-16">
        <SubHeading
          title={'a layer clipped by the next layer'}
          size={'xs'}
        />
        <br />

        <div className="pgp-bg-clip__logo-wrap">
          <LogoSVG className="pgp-bg-clip__logo" />
          <div className="pgp-bg-clip__clip-block"></div>
        </div>
      </div>

      <SubHeading
        className="pgp-bg-clip__sub-heading rra-mb-16 rra-mt-50"
        title={'Look other css clipping propeties'}
        size={'default-size'}
      />

      <TextButton
        className="pgp-bg-clip__action-button"
        title={'clip-path'}
        placeOnBg="light"
        mode="link"
        linkHref="/pages/playground/clip-path"
      />
    </div>
  );
}
