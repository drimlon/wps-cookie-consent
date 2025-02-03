<?php
/**
 * Actions interface.
 *
 * @author WPS <info@wps.sk>
 * @copyright 2024 WPS
 */

namespace Wps\WP\CookieConsent\Hooks;

// Prevent direct access to files
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

interface Actions {

    /**
     * Return the actions to register.
     *
     * @return array
     */
    public function get_actions(): array;

}
