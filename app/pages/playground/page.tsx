import './pgp-base.scss';
import './pgp-root.scss';
import MainHeading from '../../components/headings/main-heading/MainHeading';
import TextButton from '../../components/buttons/text-button/TextButton';
import SubHeading from '../../components/headings/sub-heading/SubHeading';

export default function PlayGroundPage() {
  return (
    <div className="playground-page pgp-root">
      <MainHeading
        className="pgp-root-heading rra-mb-16"
        title={'Playground Navigation'}
      />
      <SubHeading
        className="pgp-root-sub-heading rra-mb-25"
        title={'Here they are Playground Pages'}
        size={'default-size'}
      />

      <div className="playground-page-content">
        <div className="pgp-root-nav-element">
          <SubHeading
            title={'playground for css clip-path property'}
            size={'xs'}
            className="pgp-root-nav-element-sub-heading rra-mb-10"
          />
          <TextButton
            className="pgp-root-action-button rra-mb-25"
            title={'Look here'}
            mode="link"
            linkHref="/pages/playground/clip-path"
            placeOnBg="light"
          />
        </div>

        <div className="pgp-root-nav-element">
          <SubHeading
            title={'playground for css key-frame'}
            size={'xs'}
            className="pgp-root-nav-element-sub-heading rra-mb-10"
          />
          <TextButton
            className="pgp-root-action-button rra-mb-25"
            title={'Look here'}
            mode="link"
            linkHref="/pages/playground/clip-path"
            placeOnBg="light"
          />
        </div>

        <div className="pgp-root-nav-element">
          <SubHeading
            title={'playground for css grid'}
            size={'xs'}
            className="pgp-root-nav-element-sub-heading rra-mb-10"
          />
          <TextButton
            className="pgp-root-action-button rra-mb-25"
            title={'Look here'}
            mode="link"
            linkHref="/pages/playground/clip-path"
            placeOnBg="light"
          />
        </div>

        <div className="pgp-root-nav-element">
          <SubHeading
            title={'playground for css background-set function'}
            size={'xs'}
            className="pgp-root-nav-element-sub-heading rra-mb-10"
          />
          <TextButton
            className="pgp-root-action-button rra-mb-25"
            title={'Look here'}
            mode="link"
            linkHref="/pages/playground/clip-path"
            placeOnBg="light"
          />
        </div>
      </div>
    </div>
  );
}
