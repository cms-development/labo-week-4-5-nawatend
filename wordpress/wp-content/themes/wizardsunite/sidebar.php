<?php

$context = array();
$context['left_sidebar'] = Timber::get_widgets('sidebar-3');

//render twig file
Timber::render('sidebar.twig', $context);