<?php
/**
 * Filters interface.
 *
 * @author Wps <infowps.sk@gmail.com>
 * @copyright 2025 Wps
 */

namespace Wps\WP\CookieConsent\Hooks;

// Prevent direct access to files
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

interface Filters {

    /**
     * Return the filters to register.
     *
     * @return array
     */
    public function get_filters(): array;

}
