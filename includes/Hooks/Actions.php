<?php
/**
 * Actions interface.
 *
 * @author Wps <infowps.sk@gmail.com>
 * @copyright 2025 Wps
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
