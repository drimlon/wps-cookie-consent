<?php
/**
 * Filters interface.
 *
 * @author WPS <info@wps.sk>
 * @copyright 2024 WPS
 */

namespace WPS\WP\CookieConsent\Hooks;

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
