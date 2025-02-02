import { useContext, useCallback, useMemo } from '@wordpress/element';
import {
  Panel,
  PanelBody,
  PanelRow,
  Flex,
  FlexItem,
  ToggleControl,
  RadioControl,
  SelectControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import SettingsContext from '../../store/context';
import * as ActionTypes from '../../store/actionTypes';

import icons from '../../icons';

function FloatingButtonTab() {
  const { state, dispatch } = useContext(SettingsContext);

  const onSettingChange = useCallback((key, value) => {
    dispatch({
      type: ActionTypes.UPDATE_FLOATING_BUTTON_SETTING,
      payload: {
        key,
        value,
      },
    });
  }, []);

  const Icon = useMemo(
    () => icons.find((icon) => icon.value === state.wps_options.floating_button.icon).Component,
    [icons, state.wps_options.floating_button.icon],
  );

  return (
    <Panel>
      <PanelBody initialOpen>
        <PanelRow>
          <ToggleControl
            label={__('Enabled', 'wps-cookie-consent')}
            help={state.wps_options.floating_button.enabled
              ? __('Will show a floating button to open the settings modal', 'wps-cookie-consent')
              : __('Won\'t show a floating button', 'wps-cookie-consent')}
            checked={state.wps_options.floating_button.enabled}
            className="wps-toggle-control"
            onChange={(value) => onSettingChange('enabled', value)}
          />
        </PanelRow>
        <PanelRow>
          <RadioControl
            label={__('Size', 'wps-cookie-consent')}
            selected={state.wps_options.floating_button.size}
            options={[
              { label: __('Small', 'wps-cookie-consent'), value: 'sm' },
              { label: __('Large', 'wps-cookie-consent'), value: 'lg' },
            ]}
            onChange={(value) => onSettingChange('size', value)}
          />
        </PanelRow>

        <PanelRow>
          <RadioControl
            label={__('Position', 'wps-cookie-consent')}
            selected={state.wps_options.floating_button.position}
            options={[
              { label: __('Left', 'wps-cookie-consent'), value: 'left' },
              { label: __('Right', 'wps-cookie-consent'), value: 'right' },
            ]}
            onChange={(value) => onSettingChange('position', value)}
          />
        </PanelRow>

        <PanelRow>
          <Flex justify="flex-start" align="flex-end">
            <FlexItem>
              <SelectControl
                label={__('Icon', 'wps-cookie-consent')}
                value={state.wps_options.floating_button.icon}
                options={icons.map(({ label, value }) => ({ label, value }))}
                onChange={(value) => onSettingChange('icon', value)}
                className="wps-select-control"
              />
            </FlexItem>
            <FlexItem>
              <Icon />
            </FlexItem>
          </Flex>
        </PanelRow>

        <PanelRow>
          <RadioControl
            label={__('Transition', 'wps-cookie-consent')}
            selected={state.wps_options.floating_button.transition}
            options={[
              { label: __('No transition (immediately appear)', 'wps-cookie-consent'), value: '' },
              { label: __('Fade in', 'wps-cookie-consent'), value: 'fade-in' },
              { label: __('Fade in up', 'wps-cookie-consent'), value: 'fade-in-up' },
              { label: __('Fade in zoom', 'wps-cookie-consent'), value: 'fade-in-zoom' },
              { label: __('Zoom in', 'wps-cookie-consent'), value: 'zoom-in' },
              { label: __('Slide in horizontally', 'wps-cookie-consent'), value: 'slide-in-horizontal' },
              { label: __('Slide in vertically', 'wps-cookie-consent'), value: 'slide-in-vertical' },
            ]}
            onChange={(value) => onSettingChange('transition', value)}
          />
        </PanelRow>
      </PanelBody>

    </Panel>
  );
}

export default FloatingButtonTab;
