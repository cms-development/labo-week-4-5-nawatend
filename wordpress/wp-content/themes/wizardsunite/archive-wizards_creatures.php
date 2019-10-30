<?php

$context = Timber::context();

$context['posts'] = Timber::get_posts(array('post_type' => 'wizards_creatures'));
$context['main_menu'] = new Timber\Menu('main_menu');
$context['wizardsunite_logo_url'] = wp_get_attachment_image_url( get_theme_mod( 'custom_logo' ), 'full' );
$context['wizardsunite_header_image_url'] = get_header_image();

//render twig file
Timber::render('archive-creature.twig', $context);

print("<pre>".print_r($context,true)."</pre>");
