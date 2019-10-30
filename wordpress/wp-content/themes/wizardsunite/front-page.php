<?php


$context = Timber::context();

$context['posts'] = Timber::get_posts(array('post_type' => 'page'));
$context['main_menu'] = new Timber\Menu('main_menu');


$context['wizardsunite_logo_url'] = wp_get_attachment_image_url(get_theme_mod('custom_logo'), 'full');
$context['wizardsunite_header_image_url'] = get_header_image();


$context['widget_left_footer'] = Timber::get_widgets('sidebar-1');
$context['widget_right_footer'] = Timber::get_widgets('sidebar-2');


//render twig file
Timber::render('front-page.twig', $context);


//print("<pre>".print_r($test)."</pre>");
//print("<pre>".print_r($context, true)."</pre>");
