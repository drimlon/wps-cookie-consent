<?php
/**
 * Uninstall plugin.
 *
 * @author WPS <info@wps.sk>
 * @copyright 2024 WPS
 */

namespace WPS\WP\CookieConsent;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Clean up before uninstalling this plugin
delete_option( 'wps_cookie_consent_settings' );
delete_option( 'wps_cookie_consent_table_versions' );

// Delete the custom cookie consents table
global $wpdb;
$wpdb->query( "DROP TABLE IF EXISTS {$wpdb->prefix}wps_cookie_consents" );
