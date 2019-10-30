<?php

//some good supports
add_theme_support('menus');
add_theme_support('post-thumbnails');


add_theme_support('custom-logo');


add_theme_support('custom-header');


function wizardsunite_custom_logo_setup()
{
    $defaults = array(
        'height'      => 403,
        'width'       => 444,
        'flex-height' => true,
        'flex-width'  => true,
        'header-text' => array( 'site-title', 'site-description' ),
    );
    add_theme_support('wizardsunite-logo', $defaults);
}

add_action('after_setup_theme', 'wizardsunite_custom_logo_setup');


function wizardsunite_custom_header_setup()
{
    $args = array(
        'default-image'      => get_template_directory_uri() . 'img/default-image.jpg',
        'default-text-color' => '000',
        'width'              => '100%',
        'height'             => 250,
        'flex-width'         => true,
        'flex-height'        => true,
    );
    add_theme_support('custom-header', $args);
}
add_action('after_setup_theme', 'wizardsunite_custom_header_setup');





//main menu
register_nav_menus(
    array(
        'main_menu' => __('main_menu', 'theme')
    )
);


function add_to_context($context)
{
    // So here you are adding data to Timber's context object, i.e...

    // Now, in similar fashion, you add a Timber Menu and send it along to the context.
    $context['menu_menu'] = new \Timber\Menu('main_menu');

    return $context;
}


function loadScripts()
{
};

add_filter('timber/context', 'add_to_context');


function wizardsunite_widgets_init()
{
    register_sidebar(array(
        'name'          => __('Footer Sidebar 1', 'wizardsunite'),
        'id'            => 'sidebar-1',
        'before_widget' => '<div class="widget-1">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));

    register_sidebar(array(
        'name'          => __('Footer Sidebar 2', 'wizardsunite'),
        'id'            => 'sidebar-2',
        'before_widget' => '<div class="widget-2"><ul id="%1$s" class="widget %2$s page_item">',
        'after_widget'  => '</ul></div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));

    register_sidebar(array(
        'name'          => __('Fan Sidebar', 'wizardsunite'),
        'id'            => 'sidebar-3',
        'before_widget' => '<ul><ul id="%1$s" class="widget %2$s">',
        'after_widget'  => '</ul></ul>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
}

add_action('widgets_init', 'wizardsunite_widgets_init');



// Add ACF to REST API
function create_ACF_meta_in_REST() {
    $posttypes_to_exclude = ['acf-field-group', 'acf-field'];
    $extra_posttypes_to_include = ["page"];
    $post_types = array_diff(get_post_types(["_builtin" => false], 'names'), $posttypes_to_exclude);

    array_push($post_types, $extra_posttypes_to_include);

    foreach ($post_types as $post_type) {
        register_rest_field($post_type, 'acf', [
            'get_callback' => 'expose_ACF_fields',
            'update_callback' => 'location_update_term_meta_field',
            'schema' => null,
        ]);
    }
}

function expose_ACF_fields($object) {
    $ID = $object['id'];
    return get_fields($ID);
}

//WRITE
function location_update_term_meta_field( $value, $object, $field_name ) {
    if ( ! $value || ! is_string( $value ) ) {
        return;
    }
    return update_term_meta( $object->ID, $field_name, $value );
}

add_action('rest_api_init', 'create_ACF_meta_in_REST');


//getting image to rest api

function register_rest_images(){
    register_rest_field( array('wizards_creatures'),
        'fimg_url',
        array(
            'get_callback'    => 'get_rest_featured_image',
            'update_callback' => null,
            'schema'          => null,
        )
    );
}
function get_rest_featured_image( $object, $field_name, $request ) {
    if( $object['featured_media'] ){
        $img = wp_get_attachment_image_src( $object['featured_media'], 'app-thumb' );
        return $img[0];
    }
    return false;
}
add_action('rest_api_init', 'register_rest_images' );



