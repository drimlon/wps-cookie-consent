<?php
/**
 * Plugin Name: WPS Cookie Consent
 * Plugin URI: https://github.com/drimlon/wps-cookie-consent/
 * Description: Jednoduchý a prispôsobiteľný banner súhlasu so súbormi cookie, ktorý pomáha dodržiavať zákon EÚ o súboroch cookie GDPR.
 * Version: 1.7.1
 * Author: WPS
 * Author URI: https://wps.sk/
 * Text Domain: wps-cookie-consent
 * Domain Path: /languages
 * License: GPLv2
 *
 * @author WPS <info@wps.sk>
 * @copyright 2024 WPS
 */

namespace WPS\WP\CookieConsent;

if ( ! defined( 'ABSPATH' ) ) {
    die( 'Forbidden' );
}

/**
 * Setup plugin constants.
 *
 * @return void
 */
function setup_constants(): void {
    if ( ! defined( 'WPS\WP\CookieConsent\VERSION' ) ) {
        define( 'WPS\WP\CookieConsent\VERSION', '1.7.1' );
    }

    if ( ! defined( 'WPS\WP\CookieConsent\PLUGIN_DIR' ) ) {
        define( 'WPS\WP\CookieConsent\PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
    }

    if ( ! defined( 'WPS\WP\CookieConsent\PLUGIN_URL' ) ) {
        define( 'WPS\WP\CookieConsent\PLUGIN_URL', plugin_dir_url( __FILE__ ) );
    }

    if ( ! defined( 'WPS\WP\CookieConsent\PLUGIN_FILE' ) ) {
        define( 'WPS\WP\CookieConsent\PLUGIN_FILE', __FILE__ );
    }
}

/**
 * Set an option when the plugin is activated.
 *
 * @link https://developer.wordpress.org/reference/functions/register_activation_hook/
 *
 * @return void
 */
function activate_plugin(): void {
    add_option( 'wps_cookie_consent_activated', true );
}

/**
 * Whether the plugin was just activated.
 *
 * @return bool
 */
function is_activated(): bool {
    $just_activated = is_admin() && get_option( 'wps_cookie_consent_activated' );

    if ( $just_activated ) {
        delete_option( 'wps_cookie_consent_activated' );

        return true;
    }

    return false;
}

/**
 * Initialize the plugin.
 *
 * @link https://developer.wordpress.org/reference/hooks/plugins_loaded/
 *
 * @return void
 */
function init_plugin(): void {
    // Composer autoload
    require_once __DIR__ . '/vendor/autoload.php';

    // Setup plugin constants
    setup_constants();

    // Instantiate the `Plugin` object
    $plugin = new Plugin();

    if ( is_activated() ) {
        // Mark the plugin as activated
        $plugin->mark_as_activated();
    }

    // Initialize the plugin
    $plugin->init();
}

register_activation_hook( __FILE__, __NAMESPACE__ . '\activate_plugin' );
add_action( 'plugins_loaded', __NAMESPACE__ . '\init_plugin' );
