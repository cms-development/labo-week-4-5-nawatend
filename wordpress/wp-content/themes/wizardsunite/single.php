<?php


$context = Timber::context();

$context['posts'] = Timber::get_posts(array('post_type' => 'page'));
$context['main_menu'] = new Timber\Menu('main_menu');
Timber::render('single.twig', $context);

//print("<pre>".print_r($context,true)."</pre>");

