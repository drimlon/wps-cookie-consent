<?php
/**
 * Raw SQL.
 *
 * @author Wps <infowps.sk@gmail.com>
 * @copyright 2025 Wps
 */

namespace Wps\WP\CookieConsent\Database;

if ( ! defined( 'ABSPATH' ) ) {
    die( 'Forbidden' );
}

/**
 * Raw class.
 *
 * @since 1.2.0
 */
class Raw {

    /**
     * @var string SQL string.
     */
    private string $sql;

    /**
     * Raw constructor.
     *
     * @param string $sql SQL string.
     */
    public function __construct( string $sql ) {
        $this->sql = $sql;
    }

    /**
     * Return the SQL string.
     *
     * @return string
     */
    public function __toString(): string {
        return $this->sql;
    }

}
