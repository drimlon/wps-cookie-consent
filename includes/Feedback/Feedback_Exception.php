<?php
/**
 * Feedback exception.
 *
 * @author Wps <infowps.sk@gmail.com>
 * @copyright 2025 Wps
 */

namespace Wps\WP\CookieConsent\Feedback;

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
