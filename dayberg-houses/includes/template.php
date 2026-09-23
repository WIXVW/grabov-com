<?php
/**
 * Template loading and assets for single house pages.
 * A theme can override the template by adding its own single-house.php.
 */

defined( 'ABSPATH' ) || exit;

add_filter( 'single_template', 'dayberg_houses_single_template' );

function dayberg_houses_single_template( $template ) {
	if ( ! is_singular( DAYBERG_HOUSES_CPT ) ) {
		return $template;
	}
	if ( locate_template( 'single-' . DAYBERG_HOUSES_CPT . '.php' ) ) {
		return $template;
	}
	return DAYBERG_HOUSES_DIR . 'templates/single-house.php';
}

add_action( 'wp_enqueue_scripts', 'dayberg_houses_enqueue' );

function dayberg_houses_enqueue() {
	if ( ! is_singular( DAYBERG_HOUSES_CPT ) ) {
		return;
	}
	wp_enqueue_style(
		'dayberg-house',
		DAYBERG_HOUSES_URL . 'assets/css/house.css',
		array(),
		DAYBERG_HOUSES_VERSION
	);
	wp_enqueue_script(
		'dayberg-house',
		DAYBERG_HOUSES_URL . 'assets/js/house.js',
		array(),
		DAYBERG_HOUSES_VERSION,
		true
	);
}
