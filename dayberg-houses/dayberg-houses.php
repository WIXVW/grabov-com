<?php
/**
 * Plugin Name:       Dayberg Houses
 * Description:       Тип записів «Будинки» з полями ACF та шаблоном сторінки будинку.
 * Version:           0.1.0
 * Requires at least: 6.4
 * Requires PHP:      7.4
 * Author:            Dayberg
 * Text Domain:       dayberg-houses
 */

defined( 'ABSPATH' ) || exit;

define( 'DAYBERG_HOUSES_VERSION', '0.1.0' );
define( 'DAYBERG_HOUSES_FILE', __FILE__ );
define( 'DAYBERG_HOUSES_DIR', plugin_dir_path( __FILE__ ) );
define( 'DAYBERG_HOUSES_URL', plugin_dir_url( __FILE__ ) );
define( 'DAYBERG_HOUSES_CPT', 'house' );

require_once DAYBERG_HOUSES_DIR . 'includes/cpt.php';
require_once DAYBERG_HOUSES_DIR . 'includes/acf.php';
require_once DAYBERG_HOUSES_DIR . 'includes/template.php';

register_activation_hook( __FILE__, 'dayberg_houses_activate' );
register_deactivation_hook( __FILE__, 'flush_rewrite_rules' );

/**
 * Register the post type before flushing so its permalinks work right away.
 */
function dayberg_houses_activate() {
	dayberg_houses_register_cpt();
	flush_rewrite_rules();
}
