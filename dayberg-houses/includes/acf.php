<?php
/**
 * ACF integration: field groups live as JSON inside the plugin (acf-json/),
 * so they are versioned in git and sync to any site via ACF → Field Groups → Sync.
 */

defined( 'ABSPATH' ) || exit;

add_filter( 'acf/settings/load_json', 'dayberg_houses_acf_load_json' );

function dayberg_houses_acf_load_json( $paths ) {
	$paths[] = DAYBERG_HOUSES_DIR . 'acf-json';
	return $paths;
}

// Save only this plugin's groups back into the plugin; other groups keep the theme's path.
add_filter( 'acf/settings/save_json', 'dayberg_houses_acf_save_json', 20 );

function dayberg_houses_acf_save_json( $path ) {
	$group = isset( $_POST['acf_field_group'] ) ? wp_unslash( $_POST['acf_field_group'] ) : array(); // phpcs:ignore WordPress.Security.NonceVerification
	$key   = isset( $group['key'] ) ? (string) $group['key'] : '';

	if ( 0 === strpos( $key, 'group_dayberg_house' ) ) {
		return DAYBERG_HOUSES_DIR . 'acf-json';
	}
	return $path;
}

add_action( 'admin_notices', 'dayberg_houses_acf_notice' );

function dayberg_houses_acf_notice() {
	if ( function_exists( 'acf_get_field_groups' ) || ! current_user_can( 'activate_plugins' ) ) {
		return;
	}
	echo '<div class="notice notice-warning"><p><strong>Dayberg Houses:</strong> для полів сторінки будинку потрібен плагін Advanced Custom Fields (ACF або ACF PRO).</p></div>';
}

/**
 * Safe field getter so templates don't fatal when ACF is inactive.
 */
function dayberg_house_field( $name, $post_id = null ) {
	if ( ! function_exists( 'get_field' ) ) {
		return null;
	}
	return get_field( $name, $post_id );
}
