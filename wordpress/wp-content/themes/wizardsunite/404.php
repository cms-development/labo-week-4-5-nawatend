<?php


$context = Timber::context();

$context['posts'] = Timber::get_posts(array('post_type' => 'page'));



$context['wizardsunite_logo_url'] = wp_get_attachment_image_url(get_theme_mod('custom_logo'), 'full');
$context['wizardsunite_header_image_url'] = get_header_image();





Timber::render('404.twig', $context);