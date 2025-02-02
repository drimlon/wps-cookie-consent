<?php
/**
 * Feedback exception.
 *
 * @author WPS <info@wps.sk>
 * @copyright 2024 WPS
 */

namespace WPS\WP\CookieConsent\Feedback;

use Exception;

// Prevent direct access
if ( ! defined( 'ABSPATH' ) ) {
    die( 'Forbidden' );
}

/**
 * Feedback_Exception class.
 *
 * @since 1.1.0
 */
class Feedback_Exception extends Exception {}
