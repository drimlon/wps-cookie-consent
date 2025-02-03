import { createInterpolateElement } from '@wordpress/element';
import {
  Panel,
  PanelBody,
  PanelRow,
  Flex,
  FlexItem,
  Button,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { file as FileIcon, link as LinkIcon } from '@wordpress/icons';

import Table, { Header, Row, Column } from './Table';

function TagManagerGuide() {
  const repoUrl = 'https://github.com/drimlon/wps-cookie-consent-gtm-template/';
  const communityTemplateGalleryUrl = 'https://tagmanager.google.com/gallery/#/owners/wps/templates/wps-cookie-consent-gtm-template';

  const {
    screenshots = {},
    gtm_template_url: templateUrl = repoUrl,
  } = wpsCCAdminDetails.assets;

  return (
    <Panel>
      <PanelBody
        title={__('Adding the Google Tag Manager template', 'wps-cookie-consent')}
        initialOpen
      >
        <PanelRow>
          <Button
            icon={LinkIcon}
            href={communityTemplateGalleryUrl}
            target="_blank"
            isPrimary
          >
            {__('Community Template Gallery', 'wps-cookie-consent')}
          </Button>
        </PanelRow>
        <PanelRow>
          <img
            src={screenshots.gallery}
            alt={__('Adding a template via the Community Template Gallery screenshot', 'wps-cookie-consent')}
            style={{ width: '100%' }}
          />
        </PanelRow>
        <PanelRow>
          <ol>
            <li>
              {
                createInterpolateElement(
                  __('Navigate to <a>Google Tag Manager</a>', 'wps-cookie-consent'),
                  {
                    a: (
                      // eslint-disable-next-line max-len
                      // eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/control-has-associated-label
                      <a
                        href="https://tagmanager.google.com/"
                        target="_blank"
                        rel="noreferrer noopener"
                      />
                    ),
                  },
                )
              }
            </li>
            <li>
              {__('Select your workspace', 'wps-cookie-consent')}
            </li>
            <li>
              {
                createInterpolateElement(
                  __('Navigate to the <strong>Templates</strong> tab', 'wps-cookie-consent'),
                  {
                    strong: <strong />,
                  },
                )
              }
            </li>
            <li>
              {
                createInterpolateElement(
                  __('Click <strong>Search Gallery</strong>, under the Tag Templates section', 'wps-cookie-consent'),
                  {
                    strong: <strong />,
                  },
                )
              }
            </li>
            <li>
              {
                createInterpolateElement(
                  __('Search for <strong>Wps Cookie Consent</strong>', 'wps-cookie-consent'),
                  {
                    strong: <strong />,
                  },
                )
              }
            </li>
            <li>
              {
                createInterpolateElement(
                  __('Select it and click <strong>Add to workspace</strong>', 'wps-cookie-consent'),
                  {
                    strong: <strong />,
                  },
                )
              }
            </li>
          </ol>
        </PanelRow>
      </PanelBody>
      <PanelBody
        title={__('Manually importing the Google Tag Manager template', 'wps-cookie-consent')}
        initialOpen={false}
      >
        <PanelRow>
          <Flex justify="flex-start">
            <FlexItem>
              <Button
                icon={FileIcon}
                href={templateUrl}
                isPrimary
              >
                {__('GTM custom template', 'wps-cookie-consent')}
              </Button>
            </FlexItem>
            <FlexItem>
              <Button
                icon={LinkIcon}
                href={repoUrl}
                target="_blank"
                isSecondary
              >
                {__('Template GitHub repository', 'wps-cookie-consent')}
              </Button>
            </FlexItem>
          </Flex>
        </PanelRow>
        <PanelRow>
          <img
            src={screenshots.import}
            alt={__('Google Tag Manager importing a template screenshot', 'wps-cookie-consent')}
            style={{ width: '100%' }}
          />
        </PanelRow>
        <PanelRow>
          <Flex
            direction="column"
            gap={0}
          >
            <FlexItem>
              <p>
                {__('Alternatively, to manually import the template, follow these steps:', 'wps-cookie-consent')}
              </p>
            </FlexItem>
            <FlexItem>
              <ol>
                <li>
                  {
                    createInterpolateElement(
                      __('Download the GTM <a>custom template</a>', 'wps-cookie-consent'),
                      {
                        a: (
                          // eslint-disable-next-line max-len
                          // eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/control-has-associated-label
                          <a
                            href={templateUrl}
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
                      __('Navigate to <a>Google Tag Manager</a>', 'wps-cookie-consent'),
                      {
                        a: (
                          // eslint-disable-next-line max-len
                          // eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/control-has-associated-label
                          <a
                            href="https://tagmanager.google.com/"
                            target="_blank"
                            rel="noreferrer noopener"
                          />
                        ),
                      },
                    )
                  }
                </li>
                <li>
                  {__('Select your workspace', 'wps-cookie-consent')}
                </li>
                <li>
                  {
                    createInterpolateElement(
                      __('Navigate to the <strong>Templates</strong> tab', 'wps-cookie-consent'),
                      {
                        strong: <strong/>,
                      },
                    )
                  }
                </li>
                <li>
                  {
                    createInterpolateElement(
                      __('Click <strong>New</strong>, under the Tag Templates section', 'wps-cookie-consent'),
                      {
                        strong: <strong/>,
                      },
                    )
                  }
                </li>
                <li>
                  {__('Select the kebab menu (three dots) located at the top-right corner of the Template Editor', 'wps-cookie-consent')}
                </li>
                <li>
                  {
                    createInterpolateElement(
                      __('Click <strong>Import</strong>', 'wps-cookie-consent'),
                      {
                        strong: <strong/>,
                      },
                    )
                  }
                </li>
                <li>
                  {
                    createInterpolateElement(
                      __('Select the previously downloaded <code>template.tpl</code> file', 'wps-cookie-consent'),
                      {
                        code: <code/>,
                      },
                    )
                  }
                </li>
                <li>
                  {
                    createInterpolateElement(
                      __('Click <strong>Save</strong>', 'wps-cookie-consent'),
                      {
                        strong: <strong/>,
                      },
                    )
                  }
                </li>
                <li>
                  {__('Close the Template Editor', 'wps-cookie-consent')}
                </li>
              </ol>
            </FlexItem>
          </Flex>
        </PanelRow>
      </PanelBody>
      <PanelBody
        title={__('Creating a new tag', 'wps-cookie-consent')}
        initialOpen={false}
      >
        <PanelRow>
          <img
            src={screenshots.tag}
            alt={__('Google Tag Manager creating a tag screenshot', 'wps-cookie-consent')}
            style={{ width: '100%' }}
          />
        </PanelRow>
        <PanelRow>
          <ol>
            <li>
              {
                createInterpolateElement(
                  __('Navigate to <a>Google Tag Manager</a>', 'wps-cookie-consent'),
                  {
                    a: (
                      // eslint-disable-next-line max-len
                      // eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/control-has-associated-label
                      <a
                        href="https://tagmanager.google.com/"
                        target="_blank"
                        rel="noreferrer noopener"
                      />
                    ),
                  },
                )
              }
            </li>
            <li>
              {__('Select your workspace', 'wps-cookie-consent')}
            </li>
            <li>
              {
                createInterpolateElement(
                  __('Navigate to the <strong>Tags</strong> tab', 'wps-cookie-consent'),
                  {
                    strong: <strong/>,
                  },
                )
              }
            </li>
            <li>
              {
                createInterpolateElement(
                  __('Click <strong>New</strong> to create a new tag', 'wps-cookie-consent'),
                  {
                    strong: <strong/>,
                  },
                )
              }
            </li>
            <li>
              {__('Give the tag a name (e.g. Cookie Consent)', 'wps-cookie-consent')}
            </li>
            <li>
              {
                createInterpolateElement(
                  __('Click <strong>Choose a tag type to begin setup</strong>, under Tag Configuration', 'wps-cookie-consent'),
                  {
                    strong: <strong/>,
                  },
                )
              }
            </li>
            <li>
              {
                createInterpolateElement(
                  __('Select the <strong>Wps Cookie Consent</strong> template, under the Custom section', 'wps-cookie-consent'),
                  {
                    strong: <strong/>,
                  },
                )
              }
            </li>
            <li>
              {__('Configure the tag as needed', 'wps-cookie-consent')}
            </li>
            <li>
              {
                createInterpolateElement(
                  __('Click <strong>Choose a trigger to make this tag fire</strong>, under the Triggering section', 'wps-cookie-consent'),
                  {
                    strong: <strong/>,
                  },
                )
              }
            </li>
            <li>
              {
                createInterpolateElement(
                  __('Select <strong>Consent Initialization - All Pages</strong>', 'wps-cookie-consent'),
                  {
                    strong: <strong />,
                  },
                )
              }
            </li>
            <li>
              {
                createInterpolateElement(
                  __('Click <strong>New</strong> to create a new trigger', 'wps-cookie-consent'),
                  {
                    strong: <strong />,
                  },
                )
              }
            </li>
            <li>
              {
                createInterpolateElement(
                  __('Click <strong>Save</strong>', 'wps-cookie-consent'),
                  {
                    strong: <strong />,
                  },
                )
              }
            </li>
            <li>
              {
                createInterpolateElement(
                  __('Click <strong>Submit</strong> to submit your changes', 'wps-cookie-consent'),
                  {
                    strong: <strong />,
                  },
                )
              }
            </li>
          </ol>
        </PanelRow>
      </PanelBody>
      <PanelBody
        title={__('Configuring the Wps Cookie Consent tag', 'wps-cookie-consent')}
        initialOpen={false}
      >
        <PanelRow>
          <img
            src={screenshots.config}
            alt={__('Google Tag Manager configuring a tag screenshot', 'wps-cookie-consent')}
            style={{ width: '100%' }}
          />
        </PanelRow>
        <PanelRow>
          <ol style={{ width: 'calc(100% - 2em)' }}>
            <li>
              {
                createInterpolateElement(
                  __('Navigate to <a>Google Tag Manager</a>', 'wps-cookie-consent'),
                  {
                    a: (
                      // eslint-disable-next-line max-len
                      // eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/control-has-associated-label
                      <a
                        href="https://tagmanager.google.com/"
                        target="_blank"
                        rel="noreferrer noopener"
                      />
                    ),
                  },
                )
              }
            </li>
            <li>
              {__('Select your workspace', 'wps-cookie-consent')}
            </li>
            <li>
              {
                createInterpolateElement(
                  __('Navigate to the <strong>Tags</strong> tab', 'wps-cookie-consent'),
                  {
                    strong: <strong />,
                  },
                )
              }
            </li>
            <li>
              {__('Select the previously created Cookie Consent tag', 'wps-cookie-consent')}
            </li>
            <li>
              <p>
                {__('Under the Tag Configuration section, you can configure the following settings:', 'wps-cookie-consent')}
              </p>
              <p>
                <ul style={{ listStyleType: 'square', marginLeft: '2em' }}>
                  <li>
                    {__('Default consent states', 'wps-cookie-consent')}
                  </li>
                  <li>
                    {__('Ads data redaction', 'wps-cookie-consent')}
                  </li>
                  <li>
                    {__('URL passthrough', 'wps-cookie-consent')}
                  </li>
                </ul>
              </p>
              <p>
                {
                  createInterpolateElement(
                    __('Under Default consent states, click <strong>Add Row</strong> to add a new row for each region. For each row, you can set the regions as a comma-separated list of <a>ISO 3166-2</a> codes (leave blank to have your selection apply to all regions) and the default consent state for each consent type', 'wps-cookie-consent'),
                    {
                      strong: <strong />,
                      a: (
                        // eslint-disable-next-line max-len
                        // eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/control-has-associated-label
                        <a
                          href="https://en.wikipedia.org/wiki/ISO_3166-2"
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
                    __('If two rows are set with values for a region and subregion, the one with a more specific region will take effect. For example, if you have <code>ad_storage</code> set to <code>true</code> for <code>US</code>, and <code>ad_storage</code> set to <code>false</code> for <code>US-CA</code>, a visitor from California will have the more specific <code>US-CA</code> setting take effect. For this example, that would mean a visitor from California would have <code>ad_storage</code> set to <code>false</code>.', 'wps-cookie-consent'),
                    {
                      code: <code />,
                    },
                  )
                }
              </p>
              <p style={{ overflowX: 'scroll' }}>
                <Table style={{ width: '600px' }}>
                  <Header>
                    <Column style={{ maxWidth: '120px' }}>
                      {__('Region', 'wps-cookie-consent')}
                    </Column>
                    <Column style={{ maxWidth: '120px' }}>
                      {__('Ad storage', 'wps-cookie-consent')}
                    </Column>
                    <Column>
                      {__('Behavior', 'wps-cookie-consent')}
                    </Column>
                  </Header>
                  <Row>
                    <Column style={{ maxWidth: '120px' }}>
                      <code>{__('US', 'wps-cookie-consent')}</code>
                    </Column>
                    <Column style={{ maxWidth: '120px' }}>
                      <code>{__('true', 'wps-cookie-consent')}</code>
                    </Column>
                    <Column>
                      {__('Applies to all US states except California', 'wps-cookie-consent')}
                    </Column>
                  </Row>
                  <Row>
                    <Column style={{ maxWidth: '120px' }}>
                      <code>{__('US-CA', 'wps-cookie-consent')}</code>
                    </Column>
                    <Column style={{ maxWidth: '120px' }}>
                      <code>{__('false', 'wps-cookie-consent')}</code>
                    </Column>
                    <Column>
                      {__('Applies to California', 'wps-cookie-consent')}
                    </Column>
                  </Row>
                  <Row>
                    <Column style={{ maxWidth: '120px' }}>
                      {__('Unspecified', 'wps-cookie-consent')}
                    </Column>
                    <Column style={{ maxWidth: '120px' }}>
                      <code>{__('true', 'wps-cookie-consent')}</code>
                    </Column>
                    <Column>
                      {__('Applies to all other regions', 'wps-cookie-consent')}
                    </Column>
                  </Row>
                </Table>
              </p>
            </li>
            <li>
              {
                createInterpolateElement(
                  __('Once you are done configuring the tag, click <strong>Submit</strong> to submit your changes', 'wps-cookie-consent'),
                  {
                    strong: <strong />,
                  },
                )
              }
            </li>
          </ol>
        </PanelRow>
      </PanelBody>
    </Panel>
  );
}

export default TagManagerGuide;
