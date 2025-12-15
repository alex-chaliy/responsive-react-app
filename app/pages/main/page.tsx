import './main-page.scss';
import MainHeading from '../../components/headings/main-heading/MainHeading';
import SubHeading from '../../components/headings/sub-heading/SubHeading';

export default function MainPage() {
  return (
    <div className="rra-main-page">
      <MainHeading
        className="rra-main-page-heading"
        title={'Test Task: Mobile Header & Text Block'}
      />
      <SubHeading
        className="rra-main-page-sub-heading"
        title={'Acceptance Criteria (AC)'}
      />
      <div className="rra-main-page-text">
        We want to evaluate your attention to UI details, component structure,
        and CSS skills. We are not testing complex global state management here.
        <ol className="rra-common-list rra-common-list-layer-first">
          <li>
            Layout & Responsiveness
            <ul className="rra-common-list-layer-second">
              <li>
                Design Compliance: Implement the Header and the main content
                block (text) strictly according to the design{' '}
              </li>
              <li>
                Adaptability: The layout must be fully responsive. It should
                look perfect on mobile (320px+) and desktop without horizontal
                scrolling or broken elements.
              </li>
              <li>
                Header: visually implement the header structure. Note: You do
                NOT need to implement the functional opening/closing logic of
                the burger menu (the drawer/modal). Just the visual icon and its
                positioning
              </li>
            </ul>
          </li>

          <li>
            Interactions & Animations
            <ul className="rra-common-list-layer-second">
              <li>
                Theme Switcher Component:
                <ul className="rra-common-list-layer-third">
                  <li>Implement the custom UI for the Theme Switcher.</li>
                  <li>
                    Requirement: The switcher must be interactive and feature a
                    smooth animation when toggled.
                  </li>
                  <li>
                    Clarification: You do not need (But if you want, feel free
                    to do it) to implement the actual global color change for
                    the whole page (Dark/Light mode logic). We only want to see
                    a perfectly working, animated Switcher component.
                  </li>
                </ul>
              </li>

              <li>
                States: All buttons and links must have hover and active states
                as specified in the design.
              </li>
            </ul>
          </li>

          <li>
            Technical Stack
            <ul className="rra-common-list-layer-second">
              <li>Core: React, TypeScript.</li>
              <li>
                Styling: Your preferred modern approach (CSS Modules, SCSS,
                Styled Components, or Tailwind).
              </li>
              <li>Quality: Clean component structure and readable code.</li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
}
