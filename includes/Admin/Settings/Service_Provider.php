<?php
/**
 * Plugin admin settings service provider.
 *
 * @author Wps <infowps.sk@gmail.com>
 * @copyright 2025 Wps
 */

namespace Wps\WP\CookieConsent\Admin\Settings;

use Wps\WP\CookieConsent\Dependencies\Psr\Container\ContainerExceptionInterface;
use Wps\WP\CookieConsent\Dependencies\Psr\Container\NotFoundExceptionInterface;

use Wps\WP\CookieConsent\Dependencies\League\Container\ServiceProvider\AbstractServiceProvider;

/**
 * Service_Provider class.
 *
 * @since 1.0.0
 */
final class Service_Provider extends AbstractServiceProvider {

    /**
     * The provided array is a way to let the container
     * know that a service is provided by this service
     * provider. Every service that is registered via
     * this service provider must have an alias added
     * to this array, or it will be ignored.
     *
     * @var array
     */
    protected $provides = array(
        'settings_page',
        'settings_api',
    );

    /**
     * Access the container and register or retrieve anything that you need to.
     *
     * Remember, every alias registered within this method
     * must be declared in the `$provides` array.
     *
     * @throws NotFoundExceptionInterface  No entry was found in the container.
     * @throws ContainerExceptionInterface Something went wrong with the container.
     *
     * @return void
     */
    public function register(): void {
        $this->getContainer()
             ->add( 'settings_page', Settings_Page::class );

        $this->getContainer()
             ->add( 'settings_api', Settings_API::class )
             ->addArgument( $this->getContainer()->get( 'settings' ) )
             ->addArgument( $this->getContainer()->get( 'logger' ) )
             ->addArgument( $this->getContainer()->get( 'logs' ) )
             ->addArgument( $this->getContainer()->get( 'geo_locator' ) )
             ->addArgument( $this->getContainer()->get( 'consents_table' ) )
             ->addArgument( $this->getContainer()->get( 'db_table_exporter' ) );
    }

}
