import { useContext, useMemo, useCallback } from '@wordpress/element';
import {
  Panel,
  PanelBody,
  PanelRow,
  RadioControl,
  ToggleControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import {
  megaphone as MegaphoneIcon,
  cog as CogIcon,
} from '@wordpress/icons';

import SettingsContext from '../../store/context';
import * as ActionTypes from '../../store/actionTypes';

function ModalsTab() {
  const { state, dispatch } = useContext(SettingsContext);

  const [
    posY = 'bottom',
    posX = 'right',
  ] = useMemo(() => state.gui_options.consent_modal.position.split(' '), [state]);

  const onConsentModalSettingChange = useCallback((key, value) => {
    dispatch({
      type: ActionTypes.UPDATE_CONSENT_MODAL_SETTING,
      payload: {
        key,
        value,
      },
    });
  }, []);

  const onSettingsModalSettingChange = useCallback((key, value) => {
    dispatch({
      type: ActionTypes.UPDATE_SETTINGS_MODAL_SETTING,
      payload: {
        key,
        value,
      },
    });
  }, []);

  const onPrimaryButtonRoleChange = useCallback((value) => {
    dispatch({
      type: ActionTypes.UPDATE_PRIMARY_BUTTON_ROLE,
      payload: {
        value,
      },
    });
  }, []);

  const onSecondaryButtonRoleChange = useCallback((value) => {
    dispatch({
      type: ActionTypes.UPDATE_SECONDARY_BUTTON_ROLE,
      payload: {
        value,
      },
    });
  }, []);

  return (
    <Panel>
      <PanelBody
        title={__('Consent Modal', 'wps-cookie-consent')}
        icon={MegaphoneIcon}
        initialOpen
      >
        <PanelRow>
          <RadioControl
            label={__('Layout', 'wps-cookie-consent')}
            selected={state.gui_options.consent_modal.layout}
            options={[
              { label: __('Box', 'wps-cookie-consent'), value: 'box' },
              { label: __('Cloud', 'wps-cookie-consent'), value: 'cloud' },
              { label: __('Bar', 'wps-cookie-consent'), value: 'bar' },
            ]}
            onChange={(value) => onConsentModalSettingChange('layout', value)}
          />
        </PanelRow>

        <PanelRow>
          <RadioControl
            label={__('Vertical position', 'wps-cookie-consent')}
            selected={posY}
            options={[
              { label: __('Top', 'wps-cookie-consent'), value: 'top' },
              { label: __('Middle', 'wps-cookie-consent'), value: 'middle' },
              { label: __('Bottom', 'wps-cookie-consent'), value: 'bottom' },
            ]}
            onChange={(value) => onConsentModalSettingChange('position', `${value} ${posX}`)}
          />
        </PanelRow>

        <PanelRow>
          <div
            style={{
              width: '100%',
              opacity: ['box', 'cloud'].includes(state.gui_options.consent_modal.layout) ? 1.0 : 0.4,
            }}
          >
            <RadioControl
              label={__('Horizontal position', 'wps-cookie-consent')}
              selected={posX}
              options={[
                { label: __('Left', 'wps-cookie-consent'), value: 'left' },
                { label: __('Center', 'wps-cookie-consent'), value: 'center' },
                { label: __('Right', 'wps-cookie-consent'), value: 'right' },
              ]}
              onChange={(value) => onConsentModalSettingChange('position', `${posY} ${value}`)}
              disabled={!['box', 'cloud'].includes(state.gui_options.consent_modal.layout)}
            />
          </div>
        </PanelRow>

        <PanelRow>
          <RadioControl
            label={__('Transition', 'wps-cookie-consent')}
            selected={state.gui_options.consent_modal.transition}
            options={[
              { label: __('Slide', 'wps-cookie-consent'), value: 'slide' },
              { label: __('Zoom', 'wps-cookie-consent'), value: 'zoom' },
            ]}
            onChange={(value) => onConsentModalSettingChange('transition', value)}
          />
        </PanelRow>

        <PanelRow>
          <RadioControl
            label={__('Primary button', 'wps-cookie-consent')}
            selected={state.wps_options.primary_btn_role}
            options={[
              { label: __('Accept selected', 'wps-cookie-consent'), value: 'accept_selected' },
              { label: __('Accept all', 'wps-cookie-consent'), value: 'accept_all' },
            ]}
            onChange={(value) => onPrimaryButtonRoleChange(value)}
          />
        </PanelRow>

        <PanelRow>
          <RadioControl
            label={__('Secondary button', 'wps-cookie-consent')}
            selected={state.wps_options.secondary_btn_role}
            options={[
              { label: __('Settings', 'wps-cookie-consent'), value: 'settings' },
              { label: __('Accept necessary', 'wps-cookie-consent'), value: 'accept_necessary' },
            ]}
            onChange={(value) => onSecondaryButtonRoleChange(value)}
          />
        </PanelRow>

        <PanelRow>
          <ToggleControl
            label={__('Swap buttons', 'wps-cookie-consent')}
            help={state.gui_options.consent_modal.swap_buttons
              ? __('Buttons are inverted', 'wps-cookie-consent')
              : __('Enable to invert buttons', 'wps-cookie-consent')}
            checked={state.gui_options.consent_modal.swap_buttons}
            className="wps-toggle-control"
            onChange={(value) => onConsentModalSettingChange('swap_buttons', value)}
          />
        </PanelRow>
      </PanelBody>

      <PanelBody
        title={__('Settings Modal', 'wps-cookie-consent')}
        icon={CogIcon}
        initialOpen
      >
        <PanelRow>
          <RadioControl
            label={__('Layout', 'wps-cookie-consent')}
            selected={state.gui_options.settings_modal.layout}
            options={[
              { label: __('Box', 'wps-cookie-consent'), value: 'box' },
              { label: __('Bar', 'wps-cookie-consent'), value: 'bar' },
            ]}
            onChange={(value) => onSettingsModalSettingChange('layout', value)}
          />
        </PanelRow>

        <PanelRow>
          <div
            style={{
              width: '100%',
              opacity: state.gui_options.settings_modal.layout === 'bar' ? 1.0 : 0.4,
            }}
          >
            <RadioControl
              label={__('Position', 'wps-cookie-consent')}
              selected={state.gui_options.settings_modal.position}
              options={[
                { label: __('Left', 'wps-cookie-consent'), value: 'left' },
                { label: __('Right', 'wps-cookie-consent'), value: 'right' },
              ]}
              onChange={(value) => onSettingsModalSettingChange('position', value)}
              disabled={state.gui_options.settings_modal.layout !== 'bar'}
            />
          </div>
        </PanelRow>

        <PanelRow>
          <RadioControl
            label={__('Transition', 'wps-cookie-consent')}
            selected={state.gui_options.settings_modal.transition}
            options={[
              { label: __('Slide', 'wps-cookie-consent'), value: 'slide' },
              { label: __('Zoom', 'wps-cookie-consent'), value: 'zoom' },
            ]}
            onChange={(value) => onSettingsModalSettingChange('transition', value)}
          />
        </PanelRow>
      </PanelBody>
    </Panel>
  );
}

export default ModalsTab;
