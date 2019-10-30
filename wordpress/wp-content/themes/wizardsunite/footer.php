<?php


$context = Timber::context();

$context['posts'] = Timber::get_posts(array('post_type' => 'page'));
$context['main_menu'] = new Timber\Menu('main_menu');

$context['widget_left_footer'] = Timber::get_widgets('sidebar-1');
$context['widget_right_footer'] = Timber::get_widgets('sidebar-2');

Timber::render('footer.twig', $context);

//print("<pre>".print_r($context,true)."</pre>");