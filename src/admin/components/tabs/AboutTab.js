import { createInterpolateElement } from '@wordpress/element';
import {
  Panel,
  PanelBody,
  PanelRow,
  Flex,
  FlexItem,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import {
  info as InfoIcon,
  help as HelpIcon,
  people as PeopleIcon,
} from '@wordpress/icons';

import styled from 'styled-components';

import Emoji from '../Emoji';

import {
  wps as WpsIcon,
} from '../icons';

const StyledHeading = styled.h2`
    font-size: 13px;
`;

function AboutTab() {
  const { promo } = wpsCCAdminDetails.assets;

  const emojis = {
    gear: <>&#x2699;&#xFE0F;</>,
    feather: <>&#129718;</>,
    wheelchair: <>&#9855;</>,
    globeWithMeridians: <>&#127760;</>,
    mobilePhone: <>&#128241;</>,
    personGesturingNo: <>&#128581;</>,
    broom: <>&#x1F9F9;</>,
    raisedHand: <>&#9995;</>,
    repeatButton: <>&#128257;</>,
    memo: <>&#128221;</>,
    controlKnobs: <>&#127899;&#65039;</>,
    robot: <>&#129302;</>,
    puzzlePiece: <>&#x1F9E9;</>,
    keyboard: <>&#x2328;&#xFE0F;</>,
  };

  const urls = {
    credits: {
      cookieConsent: 'https://github.com/orestbida/cookieconsent',
      orestBida: 'https://github.com/orestbida',
      bladeFlags: 'https://github.com/MohmmedAshraf/blade-flags/',
      twemoji: 'https://github.com/twitter/twemoji',
    },
    support: {
      github: 'https://github.com/drimlon/wps-cookie-consent/issues/new',
      forum: 'https://wordpress.org/support/plugin/wps-cookie-consent/',
    },
    wps: {
      home: 'https://wps.sk/?utm_source=pccplugin&utm_medium=about&utm_campaign=wpplugins',
      technology: 'https://wps.sk/technology/?utm_source=pccplugin&utm_medium=about&utm_campaign=wpplugins',
      dashboard: 'https://wps.sk/dashboard/?utm_source=pccplugin&utm_medium=about&utm_campaign=wpplugins',
      features: 'https://wps.sk/features/?utm_source=pccplugin&utm_medium=about&utm_campaign=wpplugins',
      trial: 'https://wps.sk/free-trial/?utm_source=pccplugin&utm_medium=about&utm_campaign=wpplugins',
    },
  };

  return (
    <Panel>
      <PanelBody
        title={__('About Wps Cookie Consent', 'wps-cookie-consent')}
        icon={InfoIcon}
        initialOpen
      >
        <PanelRow>
          <Flex
            direction="column"
            gap={0}
            style={{ maxWidth: '800px' }}
          >
            <FlexItem>
              <p>
                {__('Wps Cookie Consent makes it easy to add a stylish, customizable cookie consent banner to your website and conditionally load third-party scripts (analytics, performance, targeting, etc.) based on the user-selected preferences to help you comply with EU GDPR cookie law, CCPA, and similar regulations.', 'wps-cookie-consent')}
              </p>
            </FlexItem>
            <FlexItem>
              <StyledHeading>
                <Emoji symbol={emojis.gear} style={{ marginRight: '0.3em' }} />
                {__('Fully customizable', 'wps-cookie-consent')}
              </StyledHeading>
              <p>
                {__('Easily modify the cookie consent banner and settings modal text. Pick one of the built-in color presets to match your website’s aesthetic, or adjust the color of individual components via our convenient color picker. Choose from a variety of layouts, positions, and transitions directly from the WordPress dashboard.', 'wps-cookie-consent')}
              </p>
            </FlexItem>
            <FlexItem>
              <StyledHeading>
                <Emoji symbol={emojis.feather} style={{ marginRight: '0.3em' }} />
                {__('Lightweight', 'wps-cookie-consent')}
              </StyledHeading>
              <p>
                {__('The plugin is built on top of the Cookie Consent JS library by Orest Bida, a standalone vanilla JavaScript library with no third-party dependencies, that loads blazingly fast and won’t slow down your website.', 'wps-cookie-consent')}
              </p>
            </FlexItem>
            <FlexItem>
              <StyledHeading>
                <Emoji symbol={emojis.wheelchair} style={{ marginRight: '0.3em' }} />
                {__('Accessible', 'wps-cookie-consent')}
              </StyledHeading>
              <p>
                {__('An a11y friendly plugin — fully accessible and WAI-ARIA compliant.', 'wps-cookie-consent')}
              </p>
            </FlexItem>
            <FlexItem>
              <StyledHeading>
                <Emoji symbol={emojis.globeWithMeridians} style={{ marginRight: '0.3em' }} />
                {__('Translatable', 'wps-cookie-consent')}
              </StyledHeading>
              <p>
                {__('Modify any text in the cookie consent banner and settings modal, and provide translations. Choose the language auto-detection strategy you prefer — either read the user’s browser language or read the markup of the current page to identify its primary language.', 'wps-cookie-consent')}
              </p>
            </FlexItem>
            <FlexItem>
              <StyledHeading>
                <Emoji symbol={emojis.mobilePhone} style={{ marginRight: '0.3em' }} />
                {__('Responsive', 'wps-cookie-consent')}
              </StyledHeading>
              <p>
                {__('Fully responsive and mobile-friendly cookie consent banner and settings modal.', 'wps-cookie-consent')}
              </p>
            </FlexItem>
            <FlexItem>
              <StyledHeading>
                <Emoji symbol={emojis.personGesturingNo} style={{ marginRight: '0.3em' }} />
                {__('Block scripts', 'wps-cookie-consent')}
              </StyledHeading>
              <p>
                {__('Control which scripts are loaded based on the user’s preferences. List the URLs of the scripts you’d like to block (both exact matches and regular expressions are supported) and prevent them from running until the user has given consent.', 'wps-cookie-consent')}
              </p>
            </FlexItem>
            <FlexItem>
              <StyledHeading>
                <Emoji symbol={emojis.broom} style={{ marginRight: '0.3em' }} />
                {__('Auto-clear cookies', 'wps-cookie-consent')}
              </StyledHeading>
              <p>
                {__('Automatically delete cookies when a user opts-out of a specific category inside cookie settings.', 'wps-cookie-consent')}
              </p>
            </FlexItem>
            <FlexItem>
              <StyledHeading>
                <Emoji symbol={emojis.raisedHand} style={{ marginRight: '0.3em' }} />
                {__('Force consent', 'wps-cookie-consent')}
              </StyledHeading>
              <p>
                {__('Block the user from interacting with the page until they consent to your cookie policy.', 'wps-cookie-consent')}
              </p>
            </FlexItem>
            <FlexItem>
              <StyledHeading>
                <Emoji symbol={emojis.repeatButton} style={{ marginRight: '0.3em' }} />
                {__('Re-consent', 'wps-cookie-consent')}
              </StyledHeading>
              <p>
                {__('Ask users to consent again when you update your cookie policy.', 'wps-cookie-consent')}
              </p>
            </FlexItem>
            <FlexItem>
              <StyledHeading>
                <Emoji symbol={emojis.memo} style={{ marginRight: '0.3em' }} />
                {__('Consent records', 'wps-cookie-consent')}
              </StyledHeading>
              <p>
                {__('Record user consents to be able to provide proof of consent for auditing purposes.', 'wps-cookie-consent')}
              </p>
            </FlexItem>
            <FlexItem>
              <StyledHeading>
                <Emoji symbol={emojis.controlKnobs} style={{ marginRight: '0.3em' }} />
                {__('Floating settings button', 'wps-cookie-consent')}
              </StyledHeading>
              <p>
                {__('Add a floating settings button to your website that allows users to change their cookie preferences at any time.', 'wps-cookie-consent')}
              </p>
            </FlexItem>
            <FlexItem>
              <StyledHeading>
                <Emoji symbol={emojis.robot} style={{ marginRight: '0.3em' }} />
                {__('Hide from bots', 'wps-cookie-consent')}
              </StyledHeading>
              <p>
                {__('Automatically parse the user agent to detect bots, crawlers, and webdrivers. If one is detected, you have the option to hide the cookie consent banner from them.', 'wps-cookie-consent')}
              </p>
            </FlexItem>
            <FlexItem>
              <StyledHeading>
                <Emoji symbol={emojis.puzzlePiece} style={{ marginRight: '0.3em' }} />
                {__('Google Consent Mode (GCM) integration', 'wps-cookie-consent')}
              </StyledHeading>
              <p>
                {__('Integrate with Google Consent Mode (GCM) to adjust how Google tags behave based on the user’s consent preferences. Supports both Google tag (gtag.js) and Google Tag Manager (GTM) implementations.', 'wps-cookie-consent')}
              </p>
            </FlexItem>
            <FlexItem>
              <StyledHeading>
                <Emoji symbol={emojis.keyboard} style={{ marginRight: '0.3em' }} />
                {__('Control it programmatically', 'wps-cookie-consent')}
              </StyledHeading>
              <p>
                {__('Programmatically control the plugin. Conditionally show/hide the cookie consent banner and/or the settings modal, accept one (or more) cookie categories, erase cookies, load previously blocked scripts, etc.', 'wps-cookie-consent')}
              </p>
            </FlexItem>
          </Flex>
        </PanelRow>
      </PanelBody>
      <PanelBody
        title={__('Credits', 'wps-cookie-consent')}
        icon={PeopleIcon}
        initialOpen
      >
        <PanelRow>
          <Flex
            direction="column"
            gap={0}
            style={{ maxWidth: '800px' }}
          >
            <FlexItem>
              <p>
                <ul
                  style={{
                    listStyle: 'square',
                    paddingLeft: '1em',
                  }}
                >
                  <li>
                    {
                      createInterpolateElement(
                        __('Developed and maintained by <a>Wps®</a>', 'wps-cookie-consent'),
                        {
                          a: (
                            // eslint-disable-next-line max-len
                            // eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/control-has-associated-label
                            <a
                              href={urls.wps.home}
                              target="_blank"
                              rel="noreferrer noopener"
                            />
                          ),
                        },
                      )
                    }
                  </li>
                  <li>
                    {
                      createInterpolateElement(
                        __('Built on top of the amazing <a1>Cookie Consent</a1> JS library by <a2>Orest Bida</a2> (licensed under MIT)', 'wps-cookie-consent'),
                        {
                          a1: (
                            // eslint-disable-next-line max-len
                            // eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/control-has-associated-label
                            <a
                              href={urls.credits.cookieConsent}
                              target="_blank"
                              rel="noreferrer noopener"
                            />
                          ),
                          a2: (
                            // eslint-disable-next-line max-len
                            // eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/control-has-associated-label
                            <a
                              href={urls.credits.orestBida}
                              target="_blank"
                              rel="noreferrer noopener"
                            />
                          ),
                        },
                      )
                    }
                  </li>
                  <li>
                    {
                      createInterpolateElement(
                        __('Flag SVGs by <a1>blade-flags</a1>, which uses <a2>twemoji</a2> (licensed under MIT)', 'wps-cookie-consent'),
                        {
                          a1: (
                            // eslint-disable-next-line max-len
                            // eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/control-has-associated-label
                            <a
                              href={urls.credits.bladeFlags}
                              target="_blank"
                              rel="noreferrer noopener"
                            />
                          ),
                          a2: (
                            // eslint-disable-next-line max-len
                            // eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/control-has-associated-label
                            <a
                              href={urls.credits.twemoji}
                              target="_blank"
                              rel="noreferrer noopener"
                            />
                          ),
                        },
                      )
                    }
                  </li>
                </ul>
              </p>
            </FlexItem>
          </Flex>
        </PanelRow>
      </PanelBody>
      <PanelBody
        title={__('Support', 'wps-cookie-consent')}
        icon={HelpIcon}
        initialOpen
      >
        <PanelRow>
          <Flex
            direction="column"
            gap={0}
            style={{ maxWidth: '800px' }}
          >
            <FlexItem>
              <p>
                {__('To ensure that your issue is addressed efficiently, please use one of the following support channels:', 'wps-cookie-consent')}
              </p>
              <p>
                <ul
                  style={{
                    listStyle: 'square',
                    paddingLeft: '1em',
                  }}
                >
                  <li>
                    {
                      createInterpolateElement(
                        __('WordPress.org support forum: You can open a topic in the <a>Wps Cookie Consent support forum</a>.', 'wps-cookie-consent'),
                        {
                          a: (
                            // eslint-disable-next-line max-len
                            // eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/control-has-associated-label
                            <a
                              href={urls.support.forum}
                              target="_blank"
                              rel="noreferrer noopener"
                            />
                          ),
                        },
                      )
                    }
                  </li>
                  <li>
                    {
                      createInterpolateElement(
                        __('GitHub issue: You can <a>open an issue on the plugin’s GitHub repository</a> to report a bug or request additional features.', 'wps-cookie-consent'),
                        {
                          a: (
                            // eslint-disable-next-line max-len
                            // eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/control-has-associated-label
                            <a
                              href={urls.support.github}
                              target="_blank"
                              rel="noreferrer noopener"
                            />
                          ),
                        },
                      )
                    }
                  </li>
                </ul>
              </p>
              <p>
                {__('Using these channels helps us keep track of all issues and benefits other users who might have similar questions.', 'wps-cookie-consent')}
              </p>
            </FlexItem>
          </Flex>
        </PanelRow>
      </PanelBody>
      <PanelBody
        title={__('About Wps', 'wps-cookie-consent')}
        icon={WpsIcon}
        initialOpen
      >
        <PanelRow>
          <Flex
            direction="column"
            gap={0}
            style={{ maxWidth: '800px' }}
          >
            <FlexItem>
              <p>
                {
                  createInterpolateElement(
                    __('Since 2014, <a>Wps</a> has been providing the ultimate in high availability, enterprise-class hosting which is trusted by small businesses through to Fortune 500’s.', 'wps-cookie-consent'),
                    {
                      a: (
                        // eslint-disable-next-line max-len
                        // eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/control-has-associated-label
                        <a
                          href={urls.wps.home}
                          target="_blank"
                          rel="noreferrer noopener"
                        />
                      ),
                    },
                  )
                }
              </p>
              <p>
                {
                  createInterpolateElement(
                    __('<a>Wps N-Tier architecture</a> ensures reliability and security, setting new standards in WordPress hosting.', 'wps-cookie-consent'),
                    {
                      a: (
                        // eslint-disable-next-line max-len
                        // eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/control-has-associated-label
                        <a
                          href={urls.wps.technology}
                          target="_blank"
                          rel="noreferrer noopener"
                        />
                      ),
                    },
                  )
                }
              </p>
              <p>
                {
                  createInterpolateElement(
                    __('The <a>innovative Dashboard</a>, couples with advanced features included in all plans without extra cost, consolidates and streamlines management for agencies, businesses, and individual site owners.', 'wps-cookie-consent'),
                    {
                      a: (
                        // eslint-disable-next-line max-len
                        // eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/control-has-associated-label
                        <a
                          href={urls.wps.dashboard}
                          target="_blank"
                          rel="noreferrer noopener"
                        />
                      ),
                    },
                  )
                }
              </p>
              <p>
                {__('With a dedicated support team of WordPress experts and DevOps engineers who work tirelessly 24x7x365, your site is in the best hands, allowing you to focus on your content and business goals.', 'wps-cookie-consent')}
              </p>
            </FlexItem>
            <FlexItem>
              <a
                href={urls.wps.trial}
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  src={promo}
                  alt={__('Wps. Enjoy 14-days of superior WordPress hosting for free! Learn more.', 'wps-cookie-consent')}
                  style={{ width: '100%', maxWidth: '930px', marginTop: '1em' }}
                />
              </a>
            </FlexItem>
          </Flex>
        </PanelRow>
      </PanelBody>
    </Panel>
  );
}

export default AboutTab;
