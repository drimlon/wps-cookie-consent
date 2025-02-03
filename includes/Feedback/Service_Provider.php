<?php
/**
 * API service provider.
 *
 * @author Wps <infowps.sk@gmail.com>
 * @copyright 2025 Wps
 */

namespace Wps\WP\CookieConsent\Feedback;

use Wps\WP\CookieConsent\Dependencies\Psr\Container\ContainerExceptionInterface;
use Wps\WP\CookieConsent\Dependencies\Psr\Container\NotFoundExceptionInterface;

use Wps\WP\CookieConsent\Dependencies\League\Container\ServiceProvider\AbstractServiceProvider;

// Prevent direct access
if ( ! defined( 'ABSPATH' ) ) {
    die( 'Forbidden' );
}

/**
 * Class Service_Provider.
 *
 * @since 1.1.0
 */
class Service_Provider extends AbstractServiceProvider {

    /**
     * The provided array is a way to let the container
     * know that a service is provided by this service
     * provider. Every service that is registered via
     * this service provider must have an alias added
     * to this array, or it will be ignored.
     *
     * @var string[]
     */
    protected $provides = array(
        'feedback_api',
        'feedback',
    );

    /**
     * Access the container and register or retrieve anything that you need to.
     *
     * Remember, every alias registered within this method
     * must be declared in the `$provides` array.
     *
     * @throws NotFoundExceptionInterface  No entry was found in the container.
     * @throws ContainerExceptionInterface Something went wrong with the container.
     */
    public function register(): void {
        $this->getContainer()
             ->add( 'feedback_api', Feedback_API::class )
             ->addArgument( $this->getContainer()->get( 'logger' ) );

        $this->getContainer()
             ->add( 'feedback', Feedback::class )
             ->addArgument( $this->getContainer()->get( 'feedback_api' ) );
    }

}
