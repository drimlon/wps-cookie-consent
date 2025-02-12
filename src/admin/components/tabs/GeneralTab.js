import {
  useState,
  useContext,
  useCallback,
} from '@wordpress/element';
import {
  Panel,
  PanelBody,
  PanelRow,
  TextControl,
  SelectControl,
  ToggleControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import {
  settings as SettingsIcon,
  color as ColorIcon,
} from '@wordpress/icons';

import SettingsContext from '../../store/context';
import * as ActionTypes from '../../store/actionTypes';

import ColorsPanel from '../ColorsPanel';
import themes from '../../themes';

const getThemeByName = (themeName) => {
  const { theme } = themes.find(({ value }) => value === themeName);
  return theme;
};

function GeneralTab({ fonts }) {
  const [selectedTheme, setSelectedTheme] = useState('light');

  const { state, dispatch } = useContext(SettingsContext);

  const onGeneralSettingChange = (key, value) => {
    dispatch({
      type: ActionTypes.UPDATE_GENERAL_SETTING,
      payload: {
        key,
        value,
      },
    });
  };

  const setColors = useCallback((colors) => {
    dispatch({
      type: ActionTypes.UPDATE_COLOR_SETTINGS,
      payload: colors,
    });
  }, []);

  const setColor = useCallback((key, value) => {
    dispatch({
      type: ActionTypes.UPDATE_COLOR_SETTING,
      payload: {
        key,
        value,
      },
    });
  }, []);

  const onThemeChange = (value) => {
    setSelectedTheme(value);
    const theme = getThemeByName(value);
    setColors(theme);
  };

  const onColorChange = (key, value) => {
    setColor(key, value);
  };

  const onFontChange = (value) => {
    const font = fonts.find(({ slug }) => slug === value);
    dispatch({
      type: ActionTypes.UPDATE_FONT_SETTING,
      payload: font,
    });
  };

  const onWpsOptionChange = (key, value) => {
    dispatch({
      type: ActionTypes.UPDATE_WPS_OPTION,
      payload: {
        key,
        value,
      },
    });
  };

  return (
    <div>
      <Panel>
        <PanelBody
          title={__('Configuration', 'wps-cookie-consent')}
          icon={SettingsIcon}
          initialOpen
        >
          <PanelRow>
            <ToggleControl
              label={__('Autorun', 'wps-cookie-consent')}
              help={state.autorun
                ? __('Will show the cookie consent as soon as possible', 'wps-cookie-consent')
                : __('You will have to manually call the `.show()` method', 'wps-cookie-consent')}
              checked={state.autorun}
              className="wps-toggle-control"
              onChange={(value) => onGeneralSettingChange('autorun', value)}
            />
          </PanelRow>
          <PanelRow>
            <ToggleControl
              label={__('Force consent', 'wps-cookie-consent')}
              help={state.force_consent
                ? __('Page navigation will be blocked until user action', 'wps-cookie-consent')
                : __('Users will be able to navigate without needing to consent first', 'wps-cookie-consent')}
              checked={state.force_consent}
              className="wps-toggle-control"
              onChange={(value) => onGeneralSettingChange('force_consent', value)}
            />
          </PanelRow>
          <PanelRow>
            <ToggleControl
              label={__('Auto-clear cookies', 'wps-cookie-consent')}
              help={state.autoclear_cookies
                ? __('Cookies will be deleted automatically when user opts-out of a specific category inside cookie settings', 'wps-cookie-consent')
                : __('Cookies will have to be deleted manually', 'wps-cookie-consent')}
              checked={state.autoclear_cookies}
              className="wps-toggle-control"
              onChange={(value) => onGeneralSettingChange('autoclear_cookies', value)}
            />
          </PanelRow>
          <PanelRow>
            <ToggleControl
              label={__('Page scripts', 'wps-cookie-consent')}
              help={state.page_scripts
                ? __('Will manage existing third-party script tags', 'wps-cookie-consent')
                : __('Won\'t manage existing third-party script tags', 'wps-cookie-consent')}
              checked={state.page_scripts}
              className="wps-toggle-control"
              onChange={(value) => onGeneralSettingChange('page_scripts', value)}
            />
          </PanelRow>
          <PanelRow>
            <ToggleControl
              label={__('Hide from bots', 'wps-cookie-consent')}
              help={state.hide_from_bots
                ? __('Won\'t run when a bot/crawler/webdriver is detected', 'wps-cookie-consent')
                : __('Will always run, even when a bot/crawler/webdriver is detected', 'wps-cookie-consent')}
              checked={state.hide_from_bots}
              className="wps-toggle-control"
              onChange={(value) => onGeneralSettingChange('hide_from_bots', value)}
            />
          </PanelRow>
          <PanelRow>
            <ToggleControl
              label={__('Re-consent', 'wps-cookie-consent')}
              help={state.reconsent
                ? __('Will ask users to “re-consent” when a cookies list changes', 'wps-cookie-consent')
                : __('Won\'t ask users for consent more than once', 'wps-cookie-consent')}
              checked={state.reconsent}
              className="wps-toggle-control"
              onChange={(value) => onGeneralSettingChange('reconsent', value)}
            />
          </PanelRow>
          <PanelRow>
            <ToggleControl
              label={__('Record consents', 'wps-cookie-consent')}
              help={state.wps_options.record_consents
                ? __('Will record user consents to be able to provide proof of consent for auditing purposes', 'wps-cookie-consent')
                : __('Won\'t record any user consents', 'wps-cookie-consent')}
              checked={state.wps_options.record_consents}
              className="wps-toggle-control"
              onChange={(value) => onWpsOptionChange('record_consents', value)}
            />
          </PanelRow>
          <PanelRow>
            <ToggleControl
              label={__('Hide empty categories', 'wps-cookie-consent')}
              help={state.wps_options.hide_empty_categories
                ? __('Will hide a cookie category if it has no cookies', 'wps-cookie-consent')
                : __('Won\'t hide any cookie categories', 'wps-cookie-consent')}
              checked={state.wps_options.hide_empty_categories}
              className="wps-toggle-control"
              onChange={(value) => onWpsOptionChange('hide_empty_categories', value)}
            />
          </PanelRow>
          <PanelRow>
            <TextControl
              label={__('Delay', 'wps-cookie-consent')}
              help={__('Number of milliseconds before showing the consent modal', 'wps-cookie-consent')}
              className="wps-text-control"
              value={state.delay}
              onChange={(value) => onGeneralSettingChange('delay', value)}
            />
          </PanelRow>
          <PanelRow>
            <TextControl
              label={__('Cookie expiration', 'wps-cookie-consent')}
              help={__('Number of days before the cookie expires', 'wps-cookie-consent')}
              className="wps-text-control"
              value={state.cookie_expiration}
              onChange={(value) => onGeneralSettingChange('cookie_expiration', value)}
            />
          </PanelRow>
          <PanelRow>
            <TextControl
              label={__('Cookie path', 'wps-cookie-consent')}
              help={__('Path where the cookie will be set', 'wps-cookie-consent')}
              className="wps-text-control"
              value={state.cookie_path}
              onChange={(value) => onGeneralSettingChange('cookie_path', value)}
            />
          </PanelRow>
          <PanelRow>
            <TextControl
              label={__('Cookie domain', 'wps-cookie-consent')}
              help={__('Specify your domain or a subdomain', 'wps-cookie-consent')}
              className="wps-text-control"
              value={state.cookie_domain}
              onChange={(value) => onGeneralSettingChange('cookie_domain', value)}
            />
          </PanelRow>
        </PanelBody>

        <PanelBody
          title={__('Font & Colors', 'wps-cookie-consent')}
          icon={ColorIcon}
          initialOpen
        >
          {fonts.length > 0 ? (
            <PanelRow>
              <SelectControl
                label={__('Font', 'wps-cookie-consent')}
                value={state.wps_options.font.slug}
                options={fonts.map(({ name, slug }) => ({ label: name, value: slug }))}
                onChange={onFontChange}
                className="wps-select-control"
                help={__('Fonts you have installed via the Font Library', 'wps-cookie-consent')}
              />
            </PanelRow>
          ) : null}
          <PanelRow>
            <SelectControl
              label={__('Theme', 'wps-cookie-consent')}
              value={selectedTheme}
              options={themes.map(({ label, value }) => ({ label, value }))}
              onChange={onThemeChange}
              className="wps-select-control"
            />
          </PanelRow>
          <PanelRow>
            <ColorsPanel
              items={[
                {
                  key: 'bg',
                  label: __('Background', 'wps-cookie-consent'),
                  color: state.wps_options.colors.bg,
                },
                {
                  key: 'text',
                  label: __('Text', 'wps-cookie-consent'),
                  color: state.wps_options.colors.text,
                },
                {
                  key: 'btn-primary-bg',
                  label: __('Primary background', 'wps-cookie-consent'),
                  color: state.wps_options.colors['btn-primary-bg'],
                },
                {
                  key: 'btn-primary-text',
                  label: __('Primary text', 'wps-cookie-consent'),
                  color: state.wps_options.colors['btn-primary-text'],
                },
                {
                  key: 'btn-primary-hover-bg',
                  label: __(
                    'Primary hover background',
                    'wps-cookie-consent',
                  ),
                  color: state.wps_options.colors['btn-primary-hover-bg'],
                },
                {
                  key: 'btn-primary-hover-text',
                  label: __(
                    'Primary hover text',
                    'wps-cookie-consent',
                  ),
                  color: state.wps_options.colors['btn-primary-hover-text'],
                },
                {
                  key: 'btn-secondary-bg',
                  label: __(
                    'Secondary background',
                    'wps-cookie-consent',
                  ),
                  color: state.wps_options.colors['btn-secondary-bg'],
                },
                {
                  key: 'btn-secondary-text',
                  label: __('Secondary text', 'wps-cookie-consent'),
                  color: state.wps_options.colors['btn-secondary-text'],
                },
                {
                  key: 'btn-secondary-hover-bg',
                  label: __(
                    'Secondary hover background',
                    'wps-cookie-consent',
                  ),
                  color: state.wps_options.colors['btn-secondary-hover-bg'],
                },
                {
                  key: 'btn-secondary-hover-text',
                  label: __(
                    'Secondary hover text',
                    'wps-cookie-consent',
                  ),
                  color: state.wps_options.colors['btn-secondary-hover-text'],
                },
                {
                  key: 'toggle-bg-off',
                  label: __(
                    'Toggle background (off)',
                    'wps-cookie-consent',
                  ),
                  color: state.wps_options.colors['toggle-bg-off'],
                },
                {
                  key: 'toggle-bg-on',
                  label: __(
                    'Toggle background (on)',
                    'wps-cookie-consent',
                  ),
                  color: state.wps_options.colors['toggle-bg-on'],
                },
                {
                  key: 'toggle-bg-readonly',
                  label: __(
                    'Toggle background (readonly)',
                    'wps-cookie-consent',
                  ),
                  color: state.wps_options.colors['toggle-bg-readonly'],
                },
                {
                  key: 'toggle-knob-bg',
                  label: __(
                    'Toggle knob background',
                    'wps-cookie-consent',
                  ),
                  color: state.wps_options.colors['toggle-knob-bg'],
                },
                {
                  key: 'toggle-knob-icon-color',
                  label: __(
                    'Toggle knob icon color',
                    'wps-cookie-consent',
                  ),
                  color: state.wps_options.colors['toggle-knob-icon-color'],
                },
                {
                  key: 'cookie-category-block-bg',
                  label: __(
                    'Cookie category block background',
                    'wps-cookie-consent',
                  ),
                  color: state.wps_options.colors['cookie-category-block-bg'],
                },
                {
                  key: 'cookie-category-block-bg-hover',
                  label: __(
                    'Cookie category block background (hover)',
                    'wps-cookie-consent',
                  ),
                  color: state.wps_options.colors['cookie-category-block-bg-hover'],
                },
                {
                  key: 'section-border',
                  label: __('Section border', 'wps-cookie-consent'),
                  color: state.wps_options.colors['section-border'],
                },
                {
                  key: 'block-text',
                  label: __('Block text', 'wps-cookie-consent'),
                  color: state.wps_options.colors['block-text'],
                },
                {
                  key: 'cookie-table-border',
                  label: __('Cookie table border', 'wps-cookie-consent'),
                  color: state.wps_options.colors['cookie-table-border'],
                },
                {
                  key: 'overlay-bg',
                  label: __('Overlay background', 'wps-cookie-consent'),
                  color: state.wps_options.colors['overlay-bg'],
                },
                {
                  key: 'webkit-scrollbar-bg',
                  label: __(
                    'Scrollbar background',
                    'wps-cookie-consent',
                  ),
                  color: state.wps_options.colors['webkit-scrollbar-bg'],
                },
                {
                  key: 'webkit-scrollbar-bg-hover',
                  label: __(
                    'Scrollbar background (hover)',
                    'wps-cookie-consent',
                  ),
                  color: state.wps_options.colors['webkit-scrollbar-bg-hover'],
                },
                {
                  key: 'btn-floating-bg',
                  label: __('Floating button background', 'wps-cookie-consent'),
                  color: state.wps_options.colors['btn-floating-bg'],
                },
                {
                  key: 'btn-floating-icon',
                  label: __('Floating button icon', 'wps-cookie-consent'),
                  color: state.wps_options.colors['btn-floating-icon'],
                },
                {
                  key: 'btn-floating-hover-bg',
                  label: __('Floating button hover background', 'wps-cookie-consent'),
                  color: state.wps_options.colors['btn-floating-hover-bg'],
                },
                {
                  key: 'btn-floating-hover-icon',
                  label: __('Floating button hover icon', 'wps-cookie-consent'),
                  color: state.wps_options.colors['btn-floating-hover-icon'],
                },
              ]}
              onChange={onColorChange}
            />
          </PanelRow>
        </PanelBody>
      </Panel>
    </div>
  );
}

export default GeneralTab;
