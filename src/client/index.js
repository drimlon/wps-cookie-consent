import './lib/cookieconsent';

import './components';

import './scss/main.scss';

((details, gtag) => {
  if (typeof initCookieConsent !== 'function') {
    // Cookie Consent is not loaded, bail early
    return;
  }

  if (typeof details === 'undefined') {
    // Client details are not available, bail early
    return;
  }

  if (!('settings' in details)) {
    // Settings are not available, bail early
    return;
  }

  const denied = {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    functionality_storage: 'denied',
    personalization_storage: 'denied',
    security_storage: 'denied',
  };

  const { settings, additional_options: additionalOptions } = details;

  const {
    record_consents: recordConsents,
    hide_empty_categories: hideEmptyCategories,
    floating_button: floatingButton,
    gcm,
  } = additionalOptions;

  /**
   * Return the i18n strings.
   *
   * @param {?string} language Optional language code. If omitted, the
   *                           currently selected language will be used.
   *
   * @return {object} An object containing the i18n strings.
   */
  const getI18nStrings = (language = null) => {
    if (!window.wpsCookieConsent) {
      return {};
    }

    const currentLanguage = language || window.wpsCookieConsent.getConfig('current_lang');
    return settings.languages[currentLanguage];
  };

  /**
   * Show the floating button.
   *
   * @return {void}
   */
  const showFloatingButton = () => {
    if (!floatingButton.enabled) {
      return;
    }

    document
      .querySelector('wps-floating-button')
      .status = 'visible';
  };

  /**
   * Hide the floating button.
   *
   * @return {void}
   */
  const hideFloatingButton = () => {
    if (!floatingButton.enabled) {
      return;
    }

    document
      .querySelector('wps-floating-button')
      .status = 'hidden';
  };

  /**
   * Initialize the floating button custom element.
   *
   * @param {object}  options                     Options to initialize the floating button with.
   * @param {boolean} [options.enabled=false]     Whether the floating button is enabled.
   * @param {string}  [options.size='sm']         The size of the floating button.
   * @param {string}  [options.position='left']   The position of the floating button.
   * @param {string}  [options.icon='wps'] The icon to use for the floating button.
   * @param {string}  [options.transition='']     The transition to use for the floating button.
   *
   * @return {void}
   */
  const initFloatingButton = (options = {}) => {
    const {
      enabled = false,
      size = 'sm',
      position = 'left',
      icon = 'wps',
      transition = '',
    } = options;

    if (!enabled) {
      // Floating button is disabled, bail early
      return;
    }

    const i18nStrings = getI18nStrings();

    // Remove any previously created floating buttons
    const existingButton = document.querySelector('wps-floating-button');
    if (existingButton) {
      existingButton.remove();
    }

    // Create the floating button
    const button = document.createElement('wps-floating-button');

    button.size = size;
    button.label = i18nStrings.settings_modal.title;
    button.position = position;
    button.status = 'hidden';
    button.transition = transition;

    switch (icon) {
      case 'wps':
        button.innerHTML = `
          <svg id="Vrstva_1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 145.1 145.1">
  <!-- Generator: Adobe Illustrator 29.0.0, SVG Export Plug-In . SVG Version: 2.1.0 Build 186)  -->
  <path d="M88.8,5.1c-2,4-3.4,8-3.1,12.6.4,7.2,5.1,14.5,11.6,17.7-9.9,19.2,7.5,41.7,28.4,37.6.9,1.1,1.3,2.6,2.2,3.8,3.1,4.2,9.1,6.6,14.1,5-2.4,28.5-24.7,53.1-52.3,59.9C33,155.6-15.2,98.8,8.2,45.1,31.6-8.6,56.1-3,88.8,5.1ZM35.1,49.8c-4.2-1.3-7.3-5.1-4.3-9.3s4.7-3.6,7.5-1.6,2,2.5,3,2.4,2.6-2,2.4-2.6c-.3-1-4.3-3.8-5.4-4.2-7.2-2.6-14.7,3.3-13.4,10.9s4.9,6.7,7.6,7.4,2.3-1.1,2.8-3h-.2ZM46.1,42.8c-2.9.4-6,3.2-7.2,5.8-4.7,10.3,8.7,17.1,15.2,9.3s1.2-16.2-8-15h0ZM62.7,54.4c-2.9.4-6,3.2-7.2,5.8-4.7,10.3,8.7,17.1,15.2,9.3s1.2-16.2-8-15h0ZM19.8,71.3c-4.2-1.3-7.3-5.1-4.3-9.3,3-4.2,4.7-3.6,7.5-1.6s2,2.5,3,2.4,2.6-2,2.4-2.6c-.3-1-4.3-3.8-5.4-4.2-7.2-2.6-14.7,3.3-13.4,10.9,1.3,7.6,4.9,6.7,7.6,7.4s2.3-1.1,2.8-3h-.2ZM79.2,71.3l3.7-5.5c0-.5-3.1-2.9-4-2.3l-10.1,14.4c0,.4,3.4,2.6,4,2.4s3-5.6,4.7-5.1l-.5,8.3c.4.7,4.3,3.5,4.8,3l.6-12.1,9-3c-1-.6-3-2.6-4.1-2.7-1.6,0-7.6,2.9-8.1,2.6ZM30.8,64.6c-2.9.4-6,3.2-7.2,5.8-4.7,10.3,8.7,17.1,15.2,9.3s1.2-16.2-8-15h0ZM50.6,87.4l1-11.2c-1-.6-3.3-3-4.5-2.6s-8.8,12.9-10.3,14.5c.7.8,2.9,2.5,3.9,2s4.2-7.1,5.9-8.1l-1.1,12c0,.5,3.3,2.8,3.8,2.7l10.6-14.6-2.8-2.2h-.9c0,0-5.6,7.5-5.6,7.5ZM93.3,73.6c-1,.3-8.9,12.9-10.3,14.5,0,.3,3.7,3.2,4.3,2.1l9.7-14.1v-.6c-1.1-.5-2.6-2.3-3.7-1.9ZM108.6,87.4l1.6-2.8-8.3-5.9c-.4-.3-.8-.4-1.3-.3-1,.3-8.9,12.9-10.3,14.5l9,6.5c1,.9,3-2.1,2.8-2.8l-5.6-3.9,1.7-3c.9-.5,4.6,3.9,6.1,3s1.6-2.4,1.3-2.8l-5-3.6,1.8-2.7c.9.7,5.2,4.1,6,3.6l.2.2ZM63,86.6c-3.1.5-4.4,3.3-3.8,6.2s5.2,6.8,1.8,7.3-4.3-3.9-5.1-4-2.8,1.8-2.9,2.2c-.4,1.8,5.6,5.5,7.2,5.7,4.5.7,8-2.3,6.6-6.9s-3.8-4.7-2.4-6.4c1.4-1.7,4.3,2.8,5.1,2.9.6,0,2.8-1.7,2.9-2.2-1.8-3.3-5.5-5.5-9.4-4.8ZM84,102.6l1.6-2.8-8.3-5.9c-.4-.3-.8-.4-1.3-.3-1,.3-8.9,12.9-10.3,14.5l9,6.5c1,.9,3-2.1,2.8-2.8l-5.6-3.9,1.7-3c.9-.5,4.6,3.9,6.1,3s1.6-2.4,1.3-2.8l-5-3.6,1.8-2.7c.9.7,5.2,4.1,6,3.6l.2.2ZM92.2,116.3l1-11.2c-1-.6-3.3-3-4.5-2.6s-8.9,12.9-10.3,14.5c.7.8,2.9,2.5,3.9,2s4.2-7.1,5.9-8.1l-1.1,12c0,.5,3.3,2.8,3.8,2.7l10.6-14.6-2.8-2.2h-.9c0,0-5.6,7.5-5.6,7.5ZM115.7,120.5l-10.8-7.4c-1.2-1.2-3.2,2.2-3,2.7l3.7,2.5-8.2,12c.7.6,3.2,2.7,4,2.4s6.7-9.9,7.9-11.2c.8-.5,3,2.3,4.1,2.2s2.6-2.9,2.4-3.1h0Z"/>
  <path d="M110.3,7.7c10.9-1.6,14.4,12.3,5.8,16.6s-14-2.6-12.8-9.9,4.1-6.2,6.9-6.6h0Z"/>
  <path d="M114.2,38.5c4.2-.7,9.1.8,10.5,5.2,3.1,10.3-9,16.5-15.2,8.7s-1.3-13,4.7-13.9Z"/>
  <path d="M132.6,16.5c5.3-1.2,8,5.2,3.7,8s-7.3-.8-6.8-4.5,1.9-3.2,3-3.5h.1Z"/>
  <path d="M48,46.5c1.4-.2,2.8.6,3.4,1.8,1.9,3.8-3.6,11.3-7.3,8.5s.4-9.7,3.9-10.3Z"/>
  <path d="M64.7,58.1c1.4-.2,2.8.6,3.4,1.8,1.9,3.8-3.6,11.3-7.3,8.5s.4-9.7,3.9-10.3Z"/>
  <path d="M32.7,68.2c1.4-.2,2.8.6,3.4,1.8,1.9,3.8-3.6,11.3-7.3,8.5s.4-9.7,3.9-10.3Z"/>
</svg>
        `;
        break;
      case 'generic':
      default:
        button.innerHTML = `
          <svg id="Vrstva_1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 145.1 145.1">
  <!-- Generator: Adobe Illustrator 29.0.0, SVG Export Plug-In . SVG Version: 2.1.0 Build 186)  -->
  <path d="M88.8,5.1c-2,4-3.4,8-3.1,12.6.4,7.2,5.1,14.5,11.6,17.7-9.9,19.2,7.5,41.7,28.4,37.6.9,1.1,1.3,2.6,2.2,3.8,3.1,4.2,9.1,6.6,14.1,5-2.4,28.5-24.7,53.1-52.3,59.9C33,155.6-15.2,98.8,8.2,45.1,31.6-8.6,56.1-3,88.8,5.1ZM35.1,49.8c-4.2-1.3-7.3-5.1-4.3-9.3s4.7-3.6,7.5-1.6,2,2.5,3,2.4,2.6-2,2.4-2.6c-.3-1-4.3-3.8-5.4-4.2-7.2-2.6-14.7,3.3-13.4,10.9s4.9,6.7,7.6,7.4,2.3-1.1,2.8-3h-.2ZM46.1,42.8c-2.9.4-6,3.2-7.2,5.8-4.7,10.3,8.7,17.1,15.2,9.3s1.2-16.2-8-15h0ZM62.7,54.4c-2.9.4-6,3.2-7.2,5.8-4.7,10.3,8.7,17.1,15.2,9.3s1.2-16.2-8-15h0ZM19.8,71.3c-4.2-1.3-7.3-5.1-4.3-9.3,3-4.2,4.7-3.6,7.5-1.6s2,2.5,3,2.4,2.6-2,2.4-2.6c-.3-1-4.3-3.8-5.4-4.2-7.2-2.6-14.7,3.3-13.4,10.9,1.3,7.6,4.9,6.7,7.6,7.4s2.3-1.1,2.8-3h-.2ZM79.2,71.3l3.7-5.5c0-.5-3.1-2.9-4-2.3l-10.1,14.4c0,.4,3.4,2.6,4,2.4s3-5.6,4.7-5.1l-.5,8.3c.4.7,4.3,3.5,4.8,3l.6-12.1,9-3c-1-.6-3-2.6-4.1-2.7-1.6,0-7.6,2.9-8.1,2.6ZM30.8,64.6c-2.9.4-6,3.2-7.2,5.8-4.7,10.3,8.7,17.1,15.2,9.3s1.2-16.2-8-15h0ZM50.6,87.4l1-11.2c-1-.6-3.3-3-4.5-2.6s-8.8,12.9-10.3,14.5c.7.8,2.9,2.5,3.9,2s4.2-7.1,5.9-8.1l-1.1,12c0,.5,3.3,2.8,3.8,2.7l10.6-14.6-2.8-2.2h-.9c0,0-5.6,7.5-5.6,7.5ZM93.3,73.6c-1,.3-8.9,12.9-10.3,14.5,0,.3,3.7,3.2,4.3,2.1l9.7-14.1v-.6c-1.1-.5-2.6-2.3-3.7-1.9ZM108.6,87.4l1.6-2.8-8.3-5.9c-.4-.3-.8-.4-1.3-.3-1,.3-8.9,12.9-10.3,14.5l9,6.5c1,.9,3-2.1,2.8-2.8l-5.6-3.9,1.7-3c.9-.5,4.6,3.9,6.1,3s1.6-2.4,1.3-2.8l-5-3.6,1.8-2.7c.9.7,5.2,4.1,6,3.6l.2.2ZM63,86.6c-3.1.5-4.4,3.3-3.8,6.2s5.2,6.8,1.8,7.3-4.3-3.9-5.1-4-2.8,1.8-2.9,2.2c-.4,1.8,5.6,5.5,7.2,5.7,4.5.7,8-2.3,6.6-6.9s-3.8-4.7-2.4-6.4c1.4-1.7,4.3,2.8,5.1,2.9.6,0,2.8-1.7,2.9-2.2-1.8-3.3-5.5-5.5-9.4-4.8ZM84,102.6l1.6-2.8-8.3-5.9c-.4-.3-.8-.4-1.3-.3-1,.3-8.9,12.9-10.3,14.5l9,6.5c1,.9,3-2.1,2.8-2.8l-5.6-3.9,1.7-3c.9-.5,4.6,3.9,6.1,3s1.6-2.4,1.3-2.8l-5-3.6,1.8-2.7c.9.7,5.2,4.1,6,3.6l.2.2ZM92.2,116.3l1-11.2c-1-.6-3.3-3-4.5-2.6s-8.9,12.9-10.3,14.5c.7.8,2.9,2.5,3.9,2s4.2-7.1,5.9-8.1l-1.1,12c0,.5,3.3,2.8,3.8,2.7l10.6-14.6-2.8-2.2h-.9c0,0-5.6,7.5-5.6,7.5ZM115.7,120.5l-10.8-7.4c-1.2-1.2-3.2,2.2-3,2.7l3.7,2.5-8.2,12c.7.6,3.2,2.7,4,2.4s6.7-9.9,7.9-11.2c.8-.5,3,2.3,4.1,2.2s2.6-2.9,2.4-3.1h0Z"/>
  <path d="M110.3,7.7c10.9-1.6,14.4,12.3,5.8,16.6s-14-2.6-12.8-9.9,4.1-6.2,6.9-6.6h0Z"/>
  <path d="M114.2,38.5c4.2-.7,9.1.8,10.5,5.2,3.1,10.3-9,16.5-15.2,8.7s-1.3-13,4.7-13.9Z"/>
  <path d="M132.6,16.5c5.3-1.2,8,5.2,3.7,8s-7.3-.8-6.8-4.5,1.9-3.2,3-3.5h.1Z"/>
  <path d="M48,46.5c1.4-.2,2.8.6,3.4,1.8,1.9,3.8-3.6,11.3-7.3,8.5s.4-9.7,3.9-10.3Z"/>
  <path d="M64.7,58.1c1.4-.2,2.8.6,3.4,1.8,1.9,3.8-3.6,11.3-7.3,8.5s.4-9.7,3.9-10.3Z"/>
  <path d="M32.7,68.2c1.4-.2,2.8.6,3.4,1.8,1.9,3.8-3.6,11.3-7.3,8.5s.4-9.7,3.9-10.3Z"/>
</svg>
        `;
        break;
    }

    document.body.appendChild(button);

    // Automatically hide it when the consent modal becomes visible
    const intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Consent modal is visible, hide floating button
          hideFloatingButton();
        }
      });
    });

    const observeConsentModal = () => {
      const consentModal = document.querySelector('#cm');

      if (!consentModal) {
        return;
      }

      intersectionObserver.observe(consentModal);
    };

    // Automatically hide it when a settings modal is created
    const mutationObserver = new MutationObserver(() => {
      if (document.querySelector('#cm')) {
        observeConsentModal();
      }
    });

    // Start observing the entire document, waiting for the #cm element to be appended to the DOM
    mutationObserver.observe(document, { childList: true, subtree: true });

    // Also, try to observe the element immediately, in case it already exists in the DOM
    observeConsentModal();
  };

  const updateConsentRecords = async (cookie) => {
    if (!recordConsents) {
      return;
    }

    const { rest_url: restUrl, consent_route: route } = details.api;

    try {
      await fetch(`${restUrl}${route}`, {
        method: 'POST',
        credentials: 'same-origin',
        headers: new Headers({
          'Content-Type': 'application/json;charset=UTF-8',
        }),
        body: JSON.stringify({
          consent_date: cookie.consent_date,
          uuid: cookie.consent_uuid,
          url: window.location.href,
          user_agent: window.navigator.userAgent,
          necessary_consent: cookie.level.includes('necessary'),
          analytics_consent: cookie.level.includes('analytics'),
          targeting_consent: cookie.level.includes('targeting'),
          preferences_consent: cookie.level.includes('preferences'),
        }),
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  /**
   * Check if Google Tag is enabled and GCM's implementation is `gtag`.
   *
   * @return {boolean}
   */
  const isGoogleTag = () => (
    gcm.enabled && gcm.implementation === 'gtag'
      && 'gtag' in window && typeof window.gtag === 'function'
  );

  /**
   * Return the GCM consent states based on the given accepted cookie categories.
   *
   * @param {string[]} categories Accepted cookie categories.
   *
   * @return {{
   *  ad_storage: string,
   *  ad_user_data: string,
   *  security_storage: string,
   *  functionality_storage: string,
   *  personalization_storage: string,
   *  ad_personalization: string,
   *  analytics_storage: string
   * }}
   */
  const getConsentStatesByCategories = (categories = []) => {
    const consentStates = { ...denied };

    // Map cookie categories to GCM consent types
    const mapCategoryToType = {
      necessary: ['functionality_storage', 'security_storage'],
      preferences: ['personalization_storage'],
      analytics: ['analytics_storage'],
      targeting: ['ad_storage', 'ad_user_data', 'ad_personalization'],
    };

    categories.forEach((category) => {
      mapCategoryToType[category].forEach((consentType) => {
        consentStates[consentType] = 'granted';
      });
    });

    return consentStates;
  };

  /**
   * Update the GCM consent state via gtag.js based on the given accepted cookie categories.
   *
   * @param {string[]} categories Accepted cookie categories.
   *
   * @return {void}
   */
  const updateGTag = (categories = []) => {
    if (!isGoogleTag()) {
      // No Google Tag, bail early
      return;
    }

    if (!Array.isArray(categories) || categories.length === 0) {
      return;
    }

    const consentModeStates = getConsentStatesByCategories(categories);

    gtag('consent', 'update', consentModeStates);
  };

  /**
   * Update the GCM consent state via GTM based on the given accepted cookie categories.
   *
   * If there are no consent listeners set in `window.wpsConsentListeners`,
   * this function will do nothing.
   *
   * @param {string[]} categories Accepted cookie categories.
   *
   * @return {void}
   */
  const updateGTM = (categories = []) => {
    if (!Array.isArray(categories) || categories.length === 0) {
      return;
    }

    window.wpsConsentListeners = window.wpsConsentListeners || [];
    window.wpsConsentListeners.forEach((consentListener) => {
      const consentModeStates = getConsentStatesByCategories(categories);
      consentListener(consentModeStates);
    });
  };

  /**
   * User has accepted the cookie consent.
   *
   * This function will be executed:
   *
   * - At the first moment that consent is given
   * - After every page load, if consent ("accept" or "reject" action) has already been given
   *
   * @param {object} cookie Current value of the cookie.
   *
   * @return {Promise<void>}
   */
  const onAccept = async (cookie) => {
    await updateConsentRecords(cookie);

    if ('categories' in cookie && gcm.enabled) {
      updateGTag(cookie.categories);
      updateGTM(cookie.categories);
    }

    showFloatingButton();

    // Fire custom event for developers to extend the functionality
    const event = new CustomEvent(
      'wps-cookie-consent-accepted',
      { detail: { cookie } },
    );
    window.dispatchEvent(event);
  };

  /**
   * User has changed their consent.
   *
   * This function will be executed (only if consent has already been given):
   *
   * - When the user changes their preferences (accepts/rejects a cookie category)
   *
   * @param {object} cookie            Current value of the cookie.
   * @param {array}  changedCategories Array of categories whose state
   *                                   (accepted/rejected) just changed.
   *
   * @return {Promise<void>}
   */
  const onChange = async (cookie, changedCategories) => {
    await updateConsentRecords(cookie);

    if ('categories' in cookie && gcm.enabled) {
      updateGTag(cookie.categories);
      updateGTM(cookie.categories);
    }

    showFloatingButton();

    // Fire custom event for developers to extend the functionality
    const event = new CustomEvent(
      'wps-cookie-consent-changed',
      { detail: { cookie, changedCategories } },
    );
    window.dispatchEvent(event);
  };

  const isEmptyCategory = (block) => (
    'toggle' in block && (!('cookie_table' in block) || block.cookie_table.length === 0)
  );

  if (hideEmptyCategories) {
    Object.entries(settings.languages)
      .forEach(([language, languageSettings]) => {
        settings.languages[language].settings_modal.blocks = languageSettings
          .settings_modal
          .blocks
          .filter((block) => !isEmptyCategory(block));
      });
  }

  window.wpsCookieConsent = initCookieConsent();
  window.wpsCookieConsent.run({
    ...settings,
    onAccept,
    onChange,
  });

  initFloatingButton(floatingButton);

  // Expose global `wpsFloatingButton` object
  window.wpsFloatingButton = {
    init: initFloatingButton,
    show: showFloatingButton,
    hide: hideFloatingButton,
  };

  /*
   * Since consent mode doesn't save consent choices,
   * we need to update the consent status accordingly
   * on every page load.
   */
  const alreadyAcceptedCategories = window.wpsCookieConsent.get('categories');
  updateGTag(alreadyAcceptedCategories);

  /*
   * Make sure the buttons have the `.has-background` and `.has-text-color`
   * classes, so their colors won't be overridden by the theme.
   */
  document
    .querySelectorAll('#cc--main button')
    .forEach((button) => {
      button.classList.add('has-background', 'has-text-color');
    });
})(wpsCCClientDetails, window.gtag);
