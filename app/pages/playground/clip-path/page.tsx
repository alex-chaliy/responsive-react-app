import '../pgp-base.scss';
import './clip-path.scss';
import MainHeading from '../../../components/headings/main-heading/MainHeading';
import TextButton from '../../../components/buttons/text-button/TextButton';
import SubHeading from '@/app/components/headings/sub-heading/SubHeading';
import LogoSVG from '../../../components/svg/LogoSVG';

// PG -playground
export default function ClipPath_PG() {
  return (
    <div className="playground-page pgp-clip-path">
      <MainHeading
        className="pgp-clip-path__heading rra-mb-16"
        title={'CSS - Clip Path'}
      />
      <SubHeading
        className="pgp-clip-path__sub-heading rra-mb-25"
        title={'playground for css clip-path property'}
        size={'default-size'}
      />

      <div className="playground-page-content rra-mb-16">
        <SubHeading title={'a layer clipped by the next layer'} size={'xs'} />
        <br />

        <div className="pgp-clip-path__logo-wrap rra-mb-25">
          <LogoSVG className="pgp-clip-path__logo" />

          <div className="pgp-clip-path__clip-block">
            {/* <h3>Text a text 1</h3>
          <h3>111111</h3> */}
          </div>
        </div>

        <div className="pgp-clip-path__logo-wrap mb-25">
          <LogoSVG className="pgp-clip-path__logo" />

          <div className="pgp-clip-path__clip-block-2">
            {/* <h3>Text a text 2www</h3> */}
          </div>
        </div>
      </div>

      <SubHeading
        className="pgp-clip-path__sub-heading rra-mb-16 rra-mt-50"
        title={'Look other css clipping propeties'}
        size={'default-size'}
      />

      <TextButton
        className="pgp-clip-path__action-button rra-mb-10"
        title={'background-clip'}
        placeOnBg="light"
        mode="link"
        linkHref="/pages/playground/bg-clip"
      />

      <TextButton
        className="pgp-clip-path__action-button rra-mb-10"
        title={'filter'}
        placeOnBg="light"
        mode="link"
        linkHref="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/filter"
        linkTarget="_blank"
      />

      <TextButton
        className="pgp-clip-path__action-button rra-mb-10"
        title={'clip-rule'}
        placeOnBg="light"
        mode="link"
        linkHref="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/clip-rule"
        linkTarget="_blank"
      />

      <TextButton
        className="pgp-clip-path__action-button rra-mb-10"
        title={'mask'}
        placeOnBg="light"
        mode="link"
        linkHref="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/mask"
        linkTarget="_blank"
      />

      <TextButton
        className="pgp-clip-path__action-button rra-mb-10"
        title={'mask-image'}
        placeOnBg="light"
        mode="link"
        linkHref="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/mask-image"
        linkTarget="_blank"
      />

      <TextButton
        className="pgp-clip-path__action-button"
        title={'mask-image: make SVG-icon as mask'}
        placeOnBg="light"
        mode="link"
        linkHref="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/mask-image#masking_with_svg_mask"
        linkTarget="_blank"
      />
    </div>
  );
}
