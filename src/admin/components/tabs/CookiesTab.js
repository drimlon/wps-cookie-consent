import {
  Panel,
  PanelBody,
  PanelRow,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import {
  table as TableIcon,
  chartBar as ChartBarIcon,
  people as PeopleIcon,
  more as MoreIcon,
} from '@wordpress/icons';

import CookiesTable from '../CookiesTable';

function CookiesTab() {
  return (
    <Panel>
      <PanelBody
        title={__('Necessary cookies', 'wps-cookie-consent')}
        icon={TableIcon}
        initialOpen
      >
        <PanelRow>
          <CookiesTable category="necessary" />
        </PanelRow>
      </PanelBody>

      <PanelBody
        title={__('Analytics cookies', 'wps-cookie-consent')}
        icon={ChartBarIcon}
        initialOpen
      >
        <PanelRow>
          <CookiesTable category="analytics" />
        </PanelRow>
      </PanelBody>

      <PanelBody
        title={__('Targeting cookies', 'wps-cookie-consent')}
        icon={PeopleIcon}
        initialOpen
      >
        <PanelRow>
          <CookiesTable category="targeting" />
        </PanelRow>
      </PanelBody>

      <PanelBody
        title={__('Preferences cookies', 'wps-cookie-consent')}
        icon={MoreIcon}
        initialOpen
      >
        <PanelRow>
          <CookiesTable category="preferences" />
        </PanelRow>
      </PanelBody>
    </Panel>
  );
}

export default CookiesTab;
