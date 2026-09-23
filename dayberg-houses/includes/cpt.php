<?php
/**
 * Custom post type «Будинки».
 */

defined( 'ABSPATH' ) || exit;

add_action( 'init', 'dayberg_houses_register_cpt' );

function dayberg_houses_register_cpt() {
	$labels = array(
		'name'               => 'Будинки',
		'singular_name'      => 'Будинок',
		'menu_name'          => 'Будинки',
		'add_new'            => 'Додати будинок',
		'add_new_item'       => 'Додати новий будинок',
		'edit_item'          => 'Редагувати будинок',
		'new_item'           => 'Новий будинок',
		'view_item'          => 'Переглянути будинок',
		'view_items'         => 'Переглянути будинки',
		'search_items'       => 'Шукати будинки',
		'not_found'          => 'Будинків не знайдено',
		'not_found_in_trash' => 'У кошику будинків немає',
		'all_items'          => 'Усі будинки',
		'archives'           => 'Архів будинків',
	);

	register_post_type(
		DAYBERG_HOUSES_CPT,
		array(
			'labels'        => $labels,
			'public'        => true,
			'show_in_rest'  => true,
			'menu_icon'     => 'dashicons-admin-home',
			'menu_position' => 20,
			'has_archive'   => 'houses',
			'rewrite'       => array(
				'slug'       => 'houses',
				'with_front' => false,
			),
			'supports'      => array( 'title', 'editor', 'thumbnail', 'excerpt', 'revisions' ),
		)
	);
}
