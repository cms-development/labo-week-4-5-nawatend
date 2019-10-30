<?php

$context = Timber::context();

$context['posts'] = Timber::get_posts(array('post_type' => 'wizards_creatures'));
$context['main_menu'] = new Timber\Menu('main_menu');
$context['wizardsunite_logo_url'] = wp_get_attachment_image_url( get_theme_mod( 'custom_logo' ), 'full' );
$context['wizardsunite_header_image_url'] = get_header_image();

$context['widget_left_footer'] = Timber::get_widgets('sidebar-1');
$context['widget_right_footer'] = Timber::get_widgets('sidebar-2');

$context['left_sidebar'] = Timber::get_sidebar('sidebar.php');


//render twig file
Timber::render('page-become-fan.twig', $context);

//print("<pre>".print_r($context,true)."</pre>");
