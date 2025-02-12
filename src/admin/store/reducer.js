import * as ActionTypes from './actionTypes';

function settingsReducer(state, action) {
  switch (action.type) {
    case ActionTypes.SET_SETTINGS:
      return {
        ...state,
        ...action.payload,
      };

    case ActionTypes.UPDATE_GENERAL_SETTING:
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };

    case ActionTypes.UPDATE_CONSENT_MODAL_SETTING:
      return {
        ...state,
        gui_options: {
          ...state.gui_options,
          consent_modal: {
            ...state.gui_options.consent_modal,
            [action.payload.key]: action.payload.value,
          },
        },
      };

    case ActionTypes.UPDATE_SETTINGS_MODAL_SETTING:
      return {
        ...state,
        gui_options: {
          ...state.gui_options,
          settings_modal: {
            ...state.gui_options.settings_modal,
            [action.payload.key]: action.payload.value,
          },
        },
      };

    case ActionTypes.ADD_LANGUAGE:
      return {
        ...state,
        languages: {
          ...state.languages,
          [action.payload.language]: {
            consent_modal: {
              title: '',
              description: '',
              primary_btn: {
                text: '',
              },
              secondary_btn: {
                text: '',
              },
            },
            settings_modal: {
              title: '',
              save_settings_btn: '',
              accept_all_btn: '',
              reject_all_btn: '',
              close_btn_label: '',
              cookie_table_headers: [
                { name: '' },
                { domain: '' },
                { expiration: '' },
                { path: '' },
                { description: '' },
              ],
              blocks: [
                {
                  title: '',
                  description: '',
                },
                {
                  title: '',
                  description: '',
                  toggle: {
                    value: 'necessary',
                    enabled: true,
                    readonly: true,
                  },
                  cookie_table: [],
                },
                {
                  title: '',
                  description: '',
                  toggle: {
                    value: 'analytics',
                    enabled: false,
                    readonly: false,
                  },
                  cookie_table: [],
                },
                {
                  title: '',
                  description: '',
                  toggle: {
                    value: 'targeting',
                    enabled: false,
                    readonly: false,
                  },
                  cookie_table: [],
                },
                {
                  title: '',
                  description: '',
                  toggle: {
                    value: 'preferences',
                    enabled: false,
                    readonly: false,
                  },
                  cookie_table: [],
                },
                {
                  title: '',
                  description: '',
                },
              ],
            },
          },
        },
      };

    case ActionTypes.DELETE_LANGUAGE:
      return {
        ...state,
        languages: Object.keys(state.languages).reduce((acc, key) => {
          if (key !== action.payload.language) {
            acc[key] = state.languages[key];
          }
          return acc;
        }, {}),
      };

    case ActionTypes.UPDATE_CONSENT_MODAL_LANGUAGE_SETTING:
      return {
        ...state,
        languages: {
          ...state.languages,
          [action.payload.language]: {
            ...state.languages[action.payload.language],
            consent_modal: {
              ...state.languages[action.payload.language].consent_modal,
              [action.payload.key]: action.payload.value,
            },
          },
        },
      };

    case ActionTypes.UPDATE_SETTINGS_MODAL_LANGUAGE_SETTING:
      return {
        ...state,
        languages: {
          ...state.languages,
          [action.payload.language]: {
            ...state.languages[action.payload.language],
            settings_modal: {
              ...state.languages[action.payload.language].settings_modal,
              [action.payload.key]: action.payload.value,
            },
          },
        },
      };

    case ActionTypes.UPDATE_COOKIE_TABLE_HEADERS_LANGUAGE_SETTING:
      return {
        ...state,
        languages: {
          ...state.languages,
          [action.payload.language]: {
            ...state.languages[action.payload.language],
            settings_modal: {
              ...state.languages[action.payload.language].settings_modal,
              cookie_table_headers: [
                ...state.languages[action.payload.language].settings_modal.cookie_table_headers.slice(0, action.payload.index),
                {
                  ...state.languages[action.payload.language].settings_modal.cookie_table_headers[action.payload.index],
                  [action.payload.key]: action.payload.value,
                },
                ...state.languages[action.payload.language].settings_modal.cookie_table_headers.slice(action.payload.index + 1),
              ],
            },
          },
        },
      };

    case ActionTypes.UPDATE_SETTINGS_MODAL_BLOCK_LANGUAGE_SETTING:
      return {
        ...state,
        languages: {
          ...state.languages,
          [action.payload.language]: {
            ...state.languages[action.payload.language],
            settings_modal: {
              ...state.languages[action.payload.language].settings_modal,
              blocks: [
                ...state.languages[action.payload.language].settings_modal.blocks.slice(0, action.payload.index),
                {
                  ...state.languages[action.payload.language].settings_modal.blocks[action.payload.index],
                  [action.payload.key]: action.payload.value,
                },
                ...state.languages[action.payload.language].settings_modal.blocks.slice(action.payload.index + 1),
              ],
            },
          },
        },
      };

    case ActionTypes.ADD_COOKIE_TABLE_ROW:
      return {
        ...state,
        wps_options: {
          ...state.wps_options,
          cookie_table: {
            ...state.wps_options.cookie_table,
            [action.payload.category]: [
              ...state.wps_options.cookie_table[action.payload.category],
              {
                name: '',
                domain: '',
                expiration: '',
                path: '',
                description: '',
                is_regex: false,
              },
            ],
          },
        },
      };

    case ActionTypes.UPDATE_COOKIE_TABLE_ROW:
      return {
        ...state,
        wps_options: {
          ...state.wps_options,
          cookie_table: {
            ...state.wps_options.cookie_table,
            [action.payload.category]: [
              ...state.wps_options.cookie_table[action.payload.category].slice(0, action.payload.index),
              {
                ...state.wps_options.cookie_table[action.payload.category][action.payload.index],
                [action.payload.key]: action.payload.value,
              },
              ...state.wps_options.cookie_table[action.payload.category].slice(action.payload.index + 1),
            ],
          },
        },
      };

    case ActionTypes.DELETE_COOKIE_TABLE_ROW:
      return {
        ...state,
        wps_options: {
          ...state.wps_options,
          cookie_table: {
            ...state.wps_options.cookie_table,
            [action.payload.category]: [
              ...state.wps_options.cookie_table[action.payload.category].slice(0, action.payload.index),
              ...state.wps_options.cookie_table[action.payload.category].slice(action.payload.index + 1),
            ],
          },
        },
      };

    case ActionTypes.ADD_BLOCKED_SCRIPT:
      return {
        ...state,
        wps_options: {
          ...state.wps_options,
          blocked_scripts: [
            ...state.wps_options.blocked_scripts,
            {
              src: '',
              category: 'analytics',
              is_regex: false,
            },
          ],
        },
      };

    case ActionTypes.UPDATE_BLOCKED_SCRIPT:
      return {
        ...state,
        wps_options: {
          ...state.wps_options,
          blocked_scripts: [
            ...state.wps_options.blocked_scripts.slice(0, action.payload.index),
            {
              ...state.wps_options.blocked_scripts[action.payload.index],
              [action.payload.key]: action.payload.value,
            },
            ...state.wps_options.blocked_scripts.slice(action.payload.index + 1),
          ],
        },
      };

    case ActionTypes.DELETE_BLOCKED_SCRIPT:
      return {
        ...state,
        wps_options: {
          ...state.wps_options,
          blocked_scripts: [
            ...state.wps_options.blocked_scripts.slice(0, action.payload.index),
            ...state.wps_options.blocked_scripts.slice(action.payload.index + 1),
          ],
        },
      };

    case ActionTypes.UPDATE_PRIMARY_BUTTON_TEXT:
      return {
        ...state,
        languages: {
          ...state.languages,
          [action.payload.language]: {
            ...state.languages[action.payload.language],
            consent_modal: {
              ...state.languages[action.payload.language].consent_modal,
              primary_btn: {
                ...state.languages[action.payload.language].consent_modal.primary_btn,
                text: action.payload.value,
              },
            },
          },
        },
      };

    case ActionTypes.UPDATE_PRIMARY_BUTTON_ROLE:
      return {
        ...state,
        wps_options: {
          ...state.wps_options,
          primary_btn_role: action.payload.value,
        },
      };

    case ActionTypes.UPDATE_SECONDARY_BUTTON_TEXT:
      return {
        ...state,
        languages: {
          ...state.languages,
          [action.payload.language]: {
            ...state.languages[action.payload.language],
            consent_modal: {
              ...state.languages[action.payload.language].consent_modal,
              secondary_btn: {
                ...state.languages[action.payload.language].consent_modal.secondary_btn,
                text: action.payload.value,
              },
            },
          },
        },
      };

    case ActionTypes.UPDATE_SECONDARY_BUTTON_ROLE:
      return {
        ...state,
        wps_options: {
          ...state.wps_options,
          secondary_btn_role: action.payload.value,
        },
      };

    case ActionTypes.UPDATE_COLOR_SETTINGS:
      return {
        ...state,
        wps_options: {
          ...state.wps_options,
          colors: {
            ...state.wps_options.colors,
            ...action.payload,
          },
        },
      };

    case ActionTypes.UPDATE_COLOR_SETTING:
      return {
        ...state,
        wps_options: {
          ...state.wps_options,
          colors: {
            ...state.wps_options.colors,
            [action.payload.key]: action.payload.value,
          },
        },
      };

    case ActionTypes.UPDATE_GCM_SETTINGS:
      return {
        ...state,
        wps_options: {
          ...state.wps_options,
          gcm: {
            ...state.wps_options.gcm,
            ...action.payload,
          },
        },
      };

    case ActionTypes.UPDATE_GCM_SETTING:
      return {
        ...state,
        wps_options: {
          ...state.wps_options,
          gcm: {
            ...state.wps_options.gcm,
            [action.payload.key]: action.payload.value,
          },
        },
      };

    case ActionTypes.ADD_GCM_REGION:
      return {
        ...state,
        wps_options: {
          ...state.wps_options,
          gcm: {
            ...state.wps_options.gcm,
            regions: [
              ...state.wps_options.gcm.regions,
              {
                country: action.payload.country,
                subdivisions: action.payload.subdivisions,
                default_consent_states: {
                  ad_storage: false,
                  ad_user_data: false, // GCM v2
                  ad_personalization: false, // GCM v2
                  analytics_storage: false,
                  functionality_storage: false,
                  personalization_storage: false,
                  security_storage: false,
                },
              },
            ],
          },
        },
      };

    case ActionTypes.UPDATE_GCM_REGION_SETTING:
      return {
        ...state,
        wps_options: {
          ...state.wps_options,
          gcm: {
            ...state.wps_options.gcm,
            regions: [
              ...state.wps_options.gcm.regions.slice(0, action.payload.index),
              {
                ...state.wps_options.gcm.regions[action.payload.index],
                default_consent_states: {
                  ...state.wps_options.gcm.regions[action.payload.index].default_consent_states,
                  [action.payload.key]: action.payload.value,
                },
              },
              ...state.wps_options.gcm.regions.slice(action.payload.index + 1),
            ],
          },
        },
      };

    case ActionTypes.DELETE_GCM_REGION: {
      return {
        ...state,
        wps_options: {
          ...state.wps_options,
          gcm: {
            ...state.wps_options.gcm,
            regions: [
              ...state.wps_options.gcm.regions.slice(0, action.payload.index),
              ...state.wps_options.gcm.regions.slice(action.payload.index + 1),
            ],
          },
        },
      };
    }

    case ActionTypes.UPDATE_WPS_OPTION:
      return {
        ...state,
        wps_options: {
          ...state.wps_options,
          [action.payload.key]: action.payload.value,
        },
      };

    case ActionTypes.UPDATE_FONT_SETTING:
      return {
        ...state,
        wps_options: {
          ...state.wps_options,
          font: action.payload,
        },
      };

    case ActionTypes.UPDATE_FLOATING_BUTTON_SETTING:
      return {
        ...state,
        wps_options: {
          ...state.wps_options,
          floating_button: {
            ...state.wps_options.floating_button,
            [action.payload.key]: action.payload.value,
          },
        },
      };

    default:
      return state;
  }
}

export default settingsReducer;
