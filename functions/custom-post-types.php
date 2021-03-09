<?php

// =========================================================================
// REGISTER A NEW CUSTOM POST TYPE
// =========================================================================

function ih_testimonials()
{
    $labels = array(
        'name'              => _x('Testimonials', 'Post Type General Name'),
        'singular_name'     => _x('Testimonial', 'Post Type Singular Name'),
        'search_items'      => __('Search Testimonials'),
        'all_items'         => __('All Testimonials'),
        'parent_item'       => __('Parent Testimonial'),
        'parent_item_colon' => __('Parent Testimonial:'),
        'edit_item'         => __('Edit Testimonial'),
        'update_item'       => __('Update Testimonial'),
        'add_new_item'      => __('Add New Testimonial'),
        'new_item_name'     => __('New Testimonial Name'),
        'menu_name'         => __('Testimonials'),
    );

    $rewrite = array(
        'slug'                  => 'testimonials',
        'with_front'            => true,
        'pages'                 => false,
        'feeds'                 => false,
    );

    $args = array(
        'label'                 => __('Testimonial'),
        'description'           => __('Easy to manage testimonials for Investors Heritage'),
        'labels'                => $labels,
        'supports'              => array( 'title', 'editor', 'thumbnail', 'revisions' ),
        'hierarchical'          => false,
        'public'                => true,
        'show_ui'               => true,
        'show_in_menu'          => true,
        'menu_position'         => 5,
        'menu_icon'             => 'dashicons-star-filled',
        'show_in_admin_bar'     => true,
        'show_in_nav_menus'     => false,
        'show_admin_column' 	=> true,
        'can_export'            => true,
        'has_archive'           => false,
        'exclude_from_search'   => false,
        'publicly_queryable'    => true,
        'rewrite'               => $rewrite,
        'capability_type'       => 'post',
        'show_in_rest'          => true,

    );

    register_post_type('testimonials', $args);
}
add_action('init', 'ih_testimonials', 0);

// =========================================================================
// REGISTER A NEW CUSTOM POST TYPE
// =========================================================================

function ih_states()
{
    $labels = array(
        'name'              => _x('States', 'Post Type General Name'),
        'singular_name'     => _x('State', 'Post Type Singular Name'),
        'search_items'      => __('Search States'),
        'all_items'         => __('All States'),
        'parent_item'       => __('Parent State'),
        'parent_item_colon' => __('Parent State:'),
        'edit_item'         => __('Edit State'),
        'update_item'       => __('Update State'),
        'add_new_item'      => __('Add New State'),
        'new_item_name'     => __('New State Name'),
        'menu_name'         => __('Licensed States'),
    );

    $rewrite = array(
        'slug'                  => 'licensed-states',
        'with_front'            => true,
        'pages'                 => false,
        'feeds'                 => false,
    );

    $args = array(
        'label'                 => __('State'),
        'description'           => __('Easy to manage licensed states for Investors Heritage'),
        'labels'                => $labels,
        'supports'              => array( 'title', 'editor', 'thumbnail', 'revisions' ),
        'hierarchical'          => false,
        'public'                => true,
        'show_ui'               => true,
        'show_in_menu'          => true,
        'menu_position'         => 5,
        'menu_icon'             => 'dashicons-admin-site',
        'show_in_admin_bar'     => true,
        'show_in_nav_menus'     => false,
        'show_admin_column' 	=> true,
        'can_export'            => true,
        'has_archive'           => false,
        'exclude_from_search'   => false,
        'publicly_queryable'    => true,
        'rewrite'               => $rewrite,
        'capability_type'       => 'post',
        'show_in_rest'          => true,

    );

    register_post_type('states', $args);
}
add_action('init', 'ih_states', 0);

// =========================================================================
// REGISTER A NEW CUSTOM POST TYPE
// =========================================================================
// Create a custom taxonomy
// add_action( 'init', 'create_customPost_category', 0 );
//
// function create_customPost_category() {
// 	$labels = array(
// 		'name'              => _x( 'Post Categories', 'taxonomy general name' ),
// 		'singular_name'     => _x( 'Post Category', 'taxonomy singular name' ),
// 		'search_items'      => __( 'Search Post Category' ),
// 		'all_items'         => __( 'All Post Categories' ),
// 		'parent_item'       => __( 'Parent Post Category' ),
// 		'parent_item_colon' => __( 'Parent Post Category:' ),
// 		'edit_item'         => __( 'Edit Post Category' ),
// 		'update_item'       => __( 'Update Post Category' ),
// 		'add_new_item'      => __( 'Add New Post Category' ),
// 		'new_item_name'     => __( 'New Post Category Name' ),
// 		'menu_name'         => __( 'Post Category' ),
// 	);
//
// 	$args = array(
// 		'hierarchical'      => true,
// 		'labels'            => $labels,
// 		'show_ui'           => true,
// 		'show_admin_column' => true,
// 		'query_var'         => true,
// 		'rewrite'           => array( 'slug' => 'post-category' ),
// 	);
//
// 	register_taxonomy( 'post_category', array( 'post' ), $args );
// }

// =========================================================================
// EDIT COLUMNS FOR A POST TYPE
// =========================================================================
// function edit_advertise_columns( $columns ) {
//
// 	$columns = array(
// 		'cb' => '<input type="checkbox" />',
// 		'title' => __( 'Title' ),
// 		'box_ad' => __( 'Box Ad' ),
// 		'card_ad' => __( 'Card Ad' ),
// 		'banner_ad' => __( 'Banner Ad' ),
// 		'date' => __( 'Date' )
// 	);
//
// 	return $columns;
// }
//
// add_filter( 'manage_edit-post_type_advertise_columns', 'edit_advertise_columns' ) ;
//
// function manage_advertise_custom_columns( $column, $postid ) {
// 	global $post;
// 	switch( $column ) {
//
// 		case 'box_ad' :
// 		case 'card_ad' :
// 		case 'banner_ad' :
//
// 			// Get the post meta
// 			$impressions = get_post_meta($postid, $column . '-impression-count', true);
// 			$clicks = get_post_meta($postid, $column . '-click-count', true);
//
// 			// If meta values are empty, set them to 0
// 			if (empty($impressions)){
// 				$impressions = 0;
// 			}
// 			if (empty($clicks)){
// 				$clicks = 0;
// 			}
//
// 			echo 'Clicks: ' . $clicks . ' / Impr: ' . $impressions;
//
// 		break;
// 		// Break out of swtch statement for other columns
// 		default :
// 		break;
// 	}
// }
//
// add_action( 'manage_post_type_advertise_posts_custom_column', 'manage_advertise_custom_columns', 10, 2 );
