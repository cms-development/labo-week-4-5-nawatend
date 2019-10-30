<?php
/*
Plugin Name: Creatures
Description: A custom post type for creatures
Author: Nawang
 */
function custom_post_type() {

    $labels = array(
        'name'                  => _x( 'creatures', 'Post Type General Name', 'nmd_creatures' ),
        'singular_name'         => _x( 'creature', 'Post Type Singular Name', 'nmd_creatures' ),
        'menu_name'             => __( 'Creatures', 'nmd_creatures' ),
        'name_admin_bar'        => __( 'Creature', 'nmd_creatures' ),
        'archives'              => __( 'Creature Archives', 'nmd_creatures' ),
        'attributes'            => __( 'Creature Attributes', 'nmd_creatures' ),
        'parent_item_colon'     => __( 'Parent Creature:', 'nmd_creatures' ),
        'all_items'             => __( 'All Creatures', 'nmd_creatures' ),
        'add_new_item'          => __( 'Add New Creature', 'nmd_creatures' ),
        'add_new'               => __( 'Add New', 'nmd_creatures' ),
        'new_item'              => __( 'New Creature', 'nmd_creatures' ),
        'edit_item'             => __( 'Edit Creature', 'nmd_creatures' ),
        'update_item'           => __( 'Update Creature', 'nmd_creatures' ),
        'view_item'             => __( 'View Creature', 'nmd_creatures' ),
        'view_items'            => __( 'View Creatures', 'nmd_creatures' ),
        'search_items'          => __( 'Search Creature', 'nmd_creatures' ),
        'not_found'             => __( 'Not found', 'nmd_creatures' ),
        'not_found_in_trash'    => __( 'Not found in Trash', 'nmd_creatures' ),
        'featured_image'        => __( 'Featured Image', 'nmd_creatures' ),
        'set_featured_image'    => __( 'Set featured image', 'nmd_creatures' ),
        'remove_featured_image' => __( 'Remove featured image', 'nmd_creatures' ),
        'use_featured_image'    => __( 'Use as featured image', 'nmd_creatures' ),
        'insert_into_item'      => __( 'Insert into Creature', 'nmd_creatures' ),
        'uploaded_to_this_item' => __( 'Uploaded to this creature', 'nmd_creatures' ),
        'items_list'            => __( 'Creatures list', 'nmd_creatures' ),
        'items_list_navigation' => __( 'Creatures list navigation', 'nmd_creatures' ),
        'filter_items_list'     => __( 'Filter creatures list', 'nmd_creatures' ),
    );
    $rewrite = array(
        'slug'                  => 'creature',
        'with_front'            => true,
        'pages'                 => true,
        'feeds'                 => true,
    );
    $args = array(
        'label'                 => __( 'creature', 'nmd_creatures' ),
        'description'           => __( 'Creates new creatures', 'nmd_creatures' ),
        'labels'                => $labels,
        'supports'              => array('title','thumbnail', 'custom-fields' ),
        'hierarchical'          => true,
        'public'                => true,
        'show_ui'               => true,
        'show_in_menu'          => true,
        'show_in_rest'          => true,
        'menu_position'         => 5,
        'menu_icon'             => 'dashicons-buddicons-activity',
        'show_in_admin_bar'     => true,
        'show_in_nav_menus'     => true,
        'can_export'            => true,
        'has_archive'           => true,
        'exclude_from_search'   => false,
        'publicly_queryable'    => true,
        'rewrite'               => $rewrite,
        'capability_type'       => 'page',
    );
    register_post_type( 'wizards_creatures', $args );

}
add_action( 'init', 'custom_post_type', 0 );
