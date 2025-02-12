<?php
/**
 * Uninstall plugin.
 *
 * @author Wps <infowps.sk@gmail.com>
 * @copyright 2025 Wps
 */

namespace Wps\WP\CookieConsent;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Clean up before uninstalling this plugin
delete_option( 'wps_cookie_consent_settings' );
delete_option( 'wps_cookie_consent_table_versions' );

// Delete the custom cookie consents table
global $wpdb;
$wpdb->query( "DROP TABLE IF EXISTS {$wpdb->prefix}wps_cookie_consents" );
