import {
  useState,
  useContext,
  useMemo,
  useCallback,
} from '@wordpress/element';
import {
  Panel,
  PanelBody,
  PanelRow,
  Flex,
  FlexItem,
  Button,
  ToggleControl,
  RadioControl,
  Notice,
  ExternalLink,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { plus as PlusIcon } from '@wordpress/icons';

import styled from 'styled-components';
import iso3166 from 'iso-3166-2';

import SettingsContext from '../../store/context';
import * as ActionTypes from '../../store/actionTypes';

import Wrapper from '../Wrapper';
import GCMRegionsTable from '../GCMRegionsTable';
import NewRegionModal from '../NewRegionModal';
import TagManagerGuide from '../TagManagerGuide';

const StyledNotice = styled(Notice)`
    margin: -16px -16px 24px !important;
`;

function ConsentModeTab() {
  const { state, dispatch } = useContext(SettingsContext);

  const [isNewRegionModalOpen, setIsNewRegionModalOpen] = useState(false);
  const [selectedRegionIndex, setSelectedRegionIndex] = useState(null);
  const [noticeDismissed, setNoticeDismissed] = useState(false);

  const dismissNotice = useCallback(() => setNoticeDismissed(true), []);

  const isGoogleScriptBlocked = useMemo(() => (
    state.wps_options.blocked_scripts.some((script) => script.src.includes('googletagmanager.com'))
  ), []);

  const selectedRegionData = useMemo(
    () => {
      if (selectedRegionIndex === null) {
        return {};
      }

      const region = state.wps_options.gcm.regions[selectedRegionIndex];

      const { country, subdivisions, default_consent_states: defaultConsentStates } = region;

      const { sub } = iso3166.country(country);

      return {
        country,
        defaultConsentStates,
        subdivisions: subdivisions
          .map((code) => ({
            code,
            name: sub[code.toUpperCase()].name,
          })),
      };
    },
    [selectedRegionIndex, state.wps_options.gcm.regions],
  );

  const openNewRegionModal = useCallback(() => setIsNewRegionModalOpen(true), []);
  const closeNewRegionModal = useCallback(() => setIsNewRegionModalOpen(false), []);

  const onAddRegion = useCallback((country, subdivisions) => {
    dispatch({
      type: ActionTypes.ADD_GCM_REGION,
      payload: {
        country,
        subdivisions,
      },
    });
  }, []);

  const onRegionSettingChange = useCallback((key, value) => {
    dispatch({
      type: ActionTypes.UPDATE_GCM_REGION_SETTING,
      payload: {
        index: selectedRegionIndex,
        key,
        value,
      },
    });
  }, [selectedRegionIndex]);

  const onDeleteRegion = useCallback((index) => {
    setSelectedRegionIndex(null);

    dispatch({
      type: ActionTypes.DELETE_GCM_REGION,
      payload: {
        index,
      },
    });
  }, []);

  const onCGMSettingChange = useCallback((key, value) => {
    dispatch({
      type: ActionTypes.UPDATE_GCM_SETTING,
      payload: {
        key,
        value,
      },
    });
  }, []);

  return (
    <Wrapper>
      {isGoogleScriptBlocked && !noticeDismissed ? (
        <StyledNotice
          status="warning"
          politeness="polite"
          onDismiss={dismissNotice}
        >
          {__('Google Tag Manager and/or Google tag may be blocked, impacting the advanced consent mode. Ensure Google tags load when a user opens the website for cookieless pings, or signals, to work properly.', 'wps-cookie-consent')}
          &nbsp;
          <ExternalLink href="https://developers.google.com/tag-platform/security/concepts/consent-mode#advanced_consent_mode">
            {__('Advanced consent mode', 'wps-cookie-consent')}
          </ExternalLink>
          &nbsp;
          <ExternalLink href="https://support.google.com/google-ads/answer/10000067#Pings">
            {__('Consent mode pings', 'wps-cookie-consent')}
          </ExternalLink>
        </StyledNotice>
      ) : null}
      <Flex align="flex-start" gap={4}>
        <FlexItem style={{ maxWidth: '400px' }}>
          <Flex direction="column" gap={6}>
            <FlexItem>
              <Flex direction="column" gap={0}>
                <FlexItem>
                  <ToggleControl
                    label={__('Google Consent Mode v2 (GCM)', 'wps-cookie-consent')}
                    help={state.wps_options.gcm.enabled
                      ? __('Will enable Google Consent Mode', 'wps-cookie-consent')
                      : __('Won\'t enable Google Consent Mode', 'wps-cookie-consent')}
                    checked={state.wps_options.gcm.enabled}
                    className="wps-toggle-control"
                    onChange={(value) => onCGMSettingChange('enabled', value)}
                  />
                </FlexItem>
                <FlexItem>
                  <ExternalLink href="https://developers.google.com/tag-platform/security/concepts/consent-mode">
                    {__('Learn more about Google Consent Mode', 'wps-cookie-consent')}
                  </ExternalLink>
                </FlexItem>
              </Flex>
            </FlexItem>

            <FlexItem style={{ opacity: state.wps_options.gcm.enabled ? 1.0 : 0.4 }}>
              <RadioControl
                label={__('Implementation', 'wps-cookie-consent')}
                help={state.wps_options.gcm.implementation === 'gtag'
                  ? __('Requires the Google tag to be installed on every page of your website', 'wps-cookie-consent')
                  : __('Requires the consent mode template to be added to Google Tag Manager', 'wps-cookie-consent')}
                selected={state.wps_options.gcm.implementation}
                options={[
                  { label: __('Google tag (gtag.js)', 'wps-cookie-consent'), value: 'gtag' },
                  { label: __('Google Tag Manager (GTM) template', 'wps-cookie-consent'), value: 'gtm' },
                ]}
                onChange={(value) => onCGMSettingChange('implementation', value)}
                disabled={!state.wps_options.gcm.enabled}
              />
            </FlexItem>

            <FlexItem style={{ opacity: state.wps_options.gcm.enabled && state.wps_options.gcm.implementation === 'gtag' ? 1.0 : 0.4 }}>
              <Flex direction="column" gap={0}>
                <FlexItem>
                  <ToggleControl
                    label={__('Ads data redaction', 'wps-cookie-consent')}
                    help={state.wps_options.gcm.ads_data_redaction
                      ? __('When the \'Ad storage\' consent type is denied, ad click identifiers sent in network requests by Google Ads and Floodlight tags will be redacted. Network requests will also be sent through a cookieless domain', 'wps-cookie-consent')
                      : __('No further ads data redaction', 'wps-cookie-consent')}
                    checked={state.wps_options.gcm.ads_data_redaction}
                    className="wps-toggle-control"
                    onChange={(value) => onCGMSettingChange('ads_data_redaction', value)}
                    disabled={!state.wps_options.gcm.enabled || state.wps_options.gcm.implementation !== 'gtag'}
                  />
                </FlexItem>
                <FlexItem style={{ marginBottom: '8px' }}>
                  <ExternalLink href="https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#redact_ads_data">
                    {__('Learn more about ads data reduction', 'wps-cookie-consent')}
                  </ExternalLink>
                </FlexItem>
              </Flex>
            </FlexItem>

            <FlexItem style={{ opacity: state.wps_options.gcm.enabled && state.wps_options.gcm.implementation === 'gtag' ? 1.0 : 0.4 }}>
              <Flex direction="column" gap={0}>
                <FlexItem>
                  <ToggleControl
                    label={__('URL passthrough', 'wps-cookie-consent')}
                    help={state.wps_options.gcm.url_passthrough
                      ? __('Will pass through ad click, client ID, and session ID information in URLs', 'wps-cookie-consent')
                      : __('Won\'t pass through any additional information in URLs', 'wps-cookie-consent')}
                    checked={state.wps_options.gcm.url_passthrough}
                    className="wps-toggle-control"
                    onChange={(value) => onCGMSettingChange('url_passthrough', value)}
                    disabled={!state.wps_options.gcm.enabled || state.wps_options.gcm.implementation !== 'gtag'}
                  />
                </FlexItem>
                <FlexItem>
                  <ExternalLink href="https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#passthroughs">
                    {__('Learn more about URL passthrough', 'wps-cookie-consent')}
                  </ExternalLink>
                </FlexItem>
              </Flex>
            </FlexItem>

            {state.wps_options.gcm.implementation === 'gtag' && (
              <FlexItem style={{ opacity: state.wps_options.gcm.enabled ? 1.0 : 0.4 }}>
                <Flex direction="column" gap={2}>
                  <FlexItem>
                    {state.wps_options.gcm.regions.length > 0 ? (
                      <GCMRegionsTable
                        regions={state.wps_options.gcm.regions}
                        onEdit={setSelectedRegionIndex}
                        onDelete={onDeleteRegion}
                        disabled={!state.wps_options.gcm.enabled}
                      />
                    ) : (
                      <p>{__('No regions added yet. Default consent state will be \'denied\' for all regions.', 'wps-cookie-consent')}</p>
                    )}
                  </FlexItem>
                  <FlexItem>
                    <Button
                      icon={PlusIcon}
                      onClick={openNewRegionModal}
                      style={{ paddingRight: '10px' }}
                      disabled={!state.wps_options.gcm.enabled}
                      isPrimary
                    >
                      {__('New Region', 'wps-cookie-consent')}
                    </Button>
                    <NewRegionModal
                      isOpen={isNewRegionModalOpen}
                      onClose={closeNewRegionModal}
                      addRegion={onAddRegion}
                    />
                  </FlexItem>
                </Flex>
              </FlexItem>
            )}
          </Flex>
        </FlexItem>

        {state.wps_options.gcm.implementation === 'gtag' && (
          <FlexItem style={{ flex: '1 1 0px' }}>
            {selectedRegionIndex !== null && selectedRegionData && (
              <Panel>
                <PanelBody
                  title={`(${selectedRegionData.country.toUpperCase()}) ${__('Default consent states', 'wps-cookie-consent')}`}
                  initialOpen
                >
                  <PanelRow>
                    <ToggleControl
                      label={__('Ad storage', 'wps-cookie-consent')}
                      help={selectedRegionData.defaultConsentStates.ad_storage
                        ? __('Enables storage, such as cookies, related to advertising', 'wps-cookie-consent')
                        : __('Won\'t enable storage related to advertising', 'wps-cookie-consent')}
                      checked={selectedRegionData.defaultConsentStates.ad_storage}
                      className="wps-toggle-control"
                      onChange={(value) => onRegionSettingChange('ad_storage', value)}
                    />
                  </PanelRow>
                  <PanelRow>
                    <ToggleControl
                      label={__('Ad user data', 'wps-cookie-consent')}
                      help={selectedRegionData.defaultConsentStates.ad_user_data
                        ? __('Sets consent for sending user data to Google for online advertising purposes', 'wps-cookie-consent')
                        : __('Won\'t set consent for sending user data to Google for online advertising purposes', 'wps-cookie-consent')}
                      checked={selectedRegionData.defaultConsentStates.ad_user_data}
                      className="wps-toggle-control"
                      onChange={(value) => onRegionSettingChange('ad_user_data', value)}
                    />
                  </PanelRow>
                  <PanelRow>
                    <ToggleControl
                      label={__('Ad personalization', 'wps-cookie-consent')}
                      help={selectedRegionData.defaultConsentStates.ad_personalization
                        ? __('Sets consent for personalized advertising', 'wps-cookie-consent')
                        : __('Won\'t set consent for personalized advertising', 'wps-cookie-consent')}
                      checked={selectedRegionData.defaultConsentStates.ad_personalization}
                      className="wps-toggle-control"
                      onChange={(value) => onRegionSettingChange('ad_personalization', value)}
                    />
                  </PanelRow>
                  <PanelRow>
                    <ToggleControl
                      label={__('Analytics storage', 'wps-cookie-consent')}
                      help={selectedRegionData.defaultConsentStates.analytics_storage
                        ? __('Enables storage, such as cookies, related to analytics (for example, visit duration)', 'wps-cookie-consent')
                        : __('Won\'t enable storage related to analytics', 'wps-cookie-consent')}
                      checked={selectedRegionData.defaultConsentStates.analytics_storage}
                      className="wps-toggle-control"
                      onChange={(value) => onRegionSettingChange('analytics_storage', value)}
                    />
                  </PanelRow>
                  <PanelRow>
                    <ToggleControl
                      label={__('Functionality storage', 'wps-cookie-consent')}
                      help={selectedRegionData.defaultConsentStates.functionality_storage
                        ? __('Enables storage that supports the functionality of the website such as language settings', 'wps-cookie-consent')
                        : __('Won\'t enable storage related to functionality', 'wps-cookie-consent')}
                      checked={selectedRegionData.defaultConsentStates.functionality_storage}
                      className="wps-toggle-control"
                      onChange={(value) => onRegionSettingChange('functionality_storage', value)}
                    />
                  </PanelRow>
                  <PanelRow>
                    <ToggleControl
                      label={__('Personalization storage', 'wps-cookie-consent')}
                      help={selectedRegionData.defaultConsentStates.personalization_storage
                        ? __('Enables storage related to personalization such as video recommendations', 'wps-cookie-consent')
                        : __('Won\'t enable storage related to personalization', 'wps-cookie-consent')}
                      checked={selectedRegionData.defaultConsentStates.personalization_storage}
                      className="wps-toggle-control"
                      onChange={(value) => onRegionSettingChange('personalization_storage', value)}
                    />
                  </PanelRow>
                  <PanelRow>
                    <ToggleControl
                      label={__('Security storage', 'wps-cookie-consent')}
                      help={selectedRegionData.defaultConsentStates.security_storage
                        ? __('Enables storage related to security such as authentication functionality, fraud prevention, and other user protection', 'wps-cookie-consent')
                        : __('Won\'t enable storage related to security', 'wps-cookie-consent')}
                      checked={selectedRegionData.defaultConsentStates.security_storage}
                      className="wps-toggle-control"
                      onChange={(value) => onRegionSettingChange('security_storage', value)}
                    />
                  </PanelRow>
                </PanelBody>
                <PanelBody
                  title={`(${selectedRegionData.country.toUpperCase()}) ${__('Regions', 'wps-cookie-consent')}`}
                  initialOpen
                >
                  <PanelRow>
                    {selectedRegionData.subdivisions.length > 0 ? (
                      <ul>
                        {selectedRegionData.subdivisions.map(({ name, code }) => (
                          <li key={code}>{name}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>{__('All regions', 'wps-cookie-consent')}</p>
                    )}
                  </PanelRow>
                </PanelBody>
              </Panel>
            )}
          </FlexItem>
        )}

        {state.wps_options.gcm.implementation === 'gtm' && (
          <FlexItem style={{ flex: '1 1 0px' }}>
            <TagManagerGuide />
          </FlexItem>
        )}
      </Flex>
    </Wrapper>
  );
}

export default ConsentModeTab;
