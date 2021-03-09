<?php

    //======================================================================
    // REPLACE EXCERPT
    //======================================================================
    // Replaces the excerpt "Read More" text with a link
    function new_excerpt_more($more)
    {
        global $post;
        return '<a class="moretag" href="'. get_permalink($post->ID) . '"> ...read more.</a>';
    }
    add_filter('excerpt_more', 'new_excerpt_more');

    //======================================================================
    // SPEED UP ACF
    //======================================================================
    // Drastically speed up the load times of the post edit page!
    add_filter('acf/settings/remove_wp_meta_box', '__return_true');

    // =========================================================================
    // ADD RSS LINKS TO HEAD SECTION
    // =========================================================================
    add_theme_support('automatic-feed-links');

    // =========================================================================
    // REMOVE JUNK FROM HEAD AND STUFF
    // =========================================================================
    remove_action('wp_head', 'rsd_link'); // remove really simple discovery link
    remove_action('wp_head', 'wp_generator'); // remove wordpress version

    remove_action('wp_head', 'feed_links', 2); // remove rss feed links
    remove_action('wp_head', 'feed_links_extra', 3); // remove all extra rss feed links

    remove_action('wp_head', 'index_rel_link'); // remove link to index page
    remove_action('wp_head', 'wlwmanifest_link'); // remove wlwmanifest.xml (needed to support windows live writer)

    remove_action('wp_head', 'start_post_rel_link', 10, 0); // remove random post link
    remove_action('wp_head', 'parent_post_rel_link', 10, 0); // remove parent post link
    remove_action('wp_head', 'adjacent_posts_rel_link', 10, 0); // remove the next and previous post links
    remove_action('wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0);

    remove_action('wp_head', 'rest_output_link_wp_head'); // remove JSON link from head
    remove_action('wp_head', 'wp_shortlink_wp_head', 10, 0);

    // =========================================================================
    // REGISTERING SIDEBAR
    // =========================================================================
    // if (function_exists('register_sidebar')) {
    //     register_sidebar(array(
    //         'name' => 'Sidebar Widgets',
    //         'id'   => 'sidebar-widgets',
    //         'description'   => 'These are widgets for the sidebar.',
    //         'before_widget' => '<div id="%1$s" class="widget %2$s">',
    //         'after_widget'  => '</div>',
    //         'before_title'  => '<h2>',
    //         'after_title'   => '</h2>'
    //     ));
    // }

    // =========================================================================
    // HIDE ADMIN BAR ON FRONTEND
    // =========================================================================
    // This is not recommended by default
    ## add_filter('show_admin_bar', '__return_false');

    // =========================================================================
    // ENABLES FEATURED IMAGES FOR PAGES AND POSTS
    // =========================================================================
    // This enables post thumbnails for all post types,
    // if you want to enable this feature for specific post types,
    // use the array to include the type of post
    ## add_theme_support('post-thumbnails', array('post', 'page'));
    add_theme_support('post-thumbnails');

    // =========================================================================
    // ENABLES 100% JPEG QUALITY
    // =========================================================================
    // Wordpress will compress uploads to 90% of their original size
    add_filter('jpg_quality', 'high_jpg_quality');
        function high_jpg_quality()
        {
            return 100;
        }

    // =========================================================================
    // TITLE TAG - RECOMMENDED
    // =========================================================================
    // Since Version 4.1, themes should use add_theme_support() in the functions.php
    // file in order to support title tag
    function theme_slug_setup()
    {
        add_theme_support('title-tag');
    }
    add_action('after_setup_theme', 'theme_slug_setup');

    // =========================================================================
    // WORDPRESS CONTENT WIDTH - REQUIRED
    // =========================================================================
    // Since Version 2.6, themes need to specify the $content_width variable

    // Using this feature you can set the maximum allowed width for any content
    // in the theme, like oEmbeds and images added to posts.

    // Using this theme feature, WordPress can scale oEmbed code to a specific
    // size (width) in the front-end, and insert large images without breaking the
    // main content area. Also, using this feature you lay the ground for other
    // plugins to perfectly integrate with any theme, since plugins can access the
    // value stored in $content_width.
    if (! isset($content_width)) {
        $content_width = 900;
    }

    // =========================================================================
    // GRAVITY FORMS CUSTOMIZATION
    // =========================================================================
    // Add a label visibility option
    add_filter('gform_enable_field_label_visibility_settings', '__return_true');

	function gated_redirect() {
		// If we are loading the gated form thank you url
		if(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH) == '/gated-thank-you'){
			if(isset($_GET['resource_url'])){

				// If the return url is set then redirect to it
				wp_redirect(base64_decode($_GET['resource_url']));
                exit;
			} else {
				// Go to home page if return url is not set
				wp_redirect(home_url());
				exit;
			}
		}
	}
	add_action('init', 'gated_redirect');

	//======================================================================
    // Gravity Forms Data to Pardot
    //======================================================================
    add_action( 'gform_after_submission_8', 'after_submission_contact', 10, 2 );
    function after_submission_contact($entry, $form){
        $post_url = 'http://go.pardot.com/l/457992/2018-10-11/6msw3g';
        $body = array(
            // first_name
            'fname'     => rgar($entry, '1.3'),
            // last_name
            'lname'     => rgar($entry, '1.6'),
			// work_email
            'email'     => rgar($entry, '4'),
            // business
            'bname' => rgar($entry, '2'),
            // address
            'street_address' => rgar($entry, '3'),
            // phone
            'city' => rgar($entry, '7.3'),
			// phone
            'state' => rgar($entry, '7.4'),
			// phone
            'zip' => rgar($entry, '8'),
			// current_carrier
            'current_carrier' => rgar($entry, '6'),
			// phone
            'phone' => rgar($entry, '5')
        );
        GFCommon::log_debug( 'gform_after_submission: body => ' . print_r( $body, true ) );

        $request = new WP_Http();
        $response = $request->post( $post_url, array( 'body' => $body ) );
        //GFCommon::log_debug( 'gform_after_submission: response => ' . print_r( $response['response']['code'], true ) );
    }

	// Funeral Directors Pardot Form
	// When duplicating, don't forget to rename the function
	add_action( 'gform_after_submission_12', 'after_submission_funeral', 10, 2 );
    function after_submission_funeral($entry, $form){
        $post_url = 'http://go.pardot.com/l/457992/2018-10-30/6phr1b';
        $body = array(
            // first_name
            'fname'     => rgar($entry, '1.3'),
            // last_name
            'lname'     => rgar($entry, '1.6'),
			// work_email
            'email'     => rgar($entry, '4'),
            // business
            'bname' => rgar($entry, '2'),
            // address
            'street_address' => rgar($entry, '3'),
            // phone
            'city' => rgar($entry, '7.3'),
			// phone
            'state' => rgar($entry, '7.4'),
			// phone
            'zip' => rgar($entry, '8'),
			// current_carrier
            'current_carrier' => rgar($entry, '6'),
			// phone
            'phone' => rgar($entry, '5')
        );
        GFCommon::log_debug( 'gform_after_submission: body => ' . print_r( $body, true ) );

        $request = new WP_Http();
        $response = $request->post( $post_url, array( 'body' => $body ) );
        //GFCommon::log_debug( 'gform_after_submission: response => ' . print_r( $response['response']['code'], true ) );
    }

	// 5 Steps
	// When duplicating, don't forget to rename the function
	add_action( 'gform_after_submission_25', 'after_submission_five_steps', 10, 2 );
    function after_submission_five_steps($entry, $form){
        $post_url = 'http://go.pardot.com/l/457992/2019-11-07/7m7x9b';
        $body = array(
            // first_name
            'input_1.3'     => rgar($entry, '1.3'),
            // last_name
            'input_1.6'     => rgar($entry, '1.6'),
			// work_email
            'input_4'     => rgar($entry, '4'),
            // business
            'input_2' => rgar($entry, '2'),
            // city
            'input_7.3' => rgar($entry, '7.3'),
			// state
            'input_7.4' => rgar($entry, '7.4'),
			// phone
            'input_7.5' => rgar($entry, '7.5'),
			// current provider
            'input_6' => rgar($entry, '6'),
			// preferred contact method
            'input_10' => rgar($entry, '10'),
            // preferred contact time
            'input_11' => rgar($entry, '11')
        );
        GFCommon::log_debug( 'gform_after_submission: body => ' . print_r( $body, true ) );

        $request = new WP_Http();
        $response = $request->post( $post_url, array( 'body' => $body ) );
        //GFCommon::log_debug( 'gform_after_submission: response => ' . print_r( $response['response']['code'], true ) );
    } 
    
    // Unfunded
	// When duplicating, don't forget to rename the function
	add_action( 'gform_after_submission_30', 'after_submission_unfunded', 10, 2 );
    function after_submission_unfunded($entry, $form){
        $post_url = 'http://go.pardot.com/l/457992/2020-01-03/7scc2x';
        $body = array(
            // first_name
            'input_1.3'     => rgar($entry, '1.3'),
            // last_name
            'input_1.6'     => rgar($entry, '1.6'),
			// work_email
            'input_4'     => rgar($entry, '4'),
            // business
            'input_2' => rgar($entry, '2'),
            // city
            'input_7.3' => rgar($entry, '7.3'),
			// state
            'input_7.4' => rgar($entry, '7.4'),
			// phone
            'input_7.5' => rgar($entry, '7.5'),
			// current provider
            'input_6' => rgar($entry, '6'),
			// preferred contact method
            'input_10' => rgar($entry, '10'),
            // preferred contact time
            'input_11' => rgar($entry, '11')
        );
        GFCommon::log_debug( 'gform_after_submission: body => ' . print_r( $body, true ) );

        $request = new WP_Http();
        $response = $request->post( $post_url, array( 'body' => $body ) );
        //GFCommon::log_debug( 'gform_after_submission: response => ' . print_r( $response['response']['code'], true ) );
    } 
    
    // Convention
	// When duplicating, don't forget to rename the function
	add_action( 'gform_after_submission_31', 'after_submission_convention', 10, 2 );
    function after_submission_convention($entry, $form){
        $post_url = 'http://go.pardot.com/l/457992/2020-01-03/7scc3z';
        $body = array(
            // first_name
            'input_1.3'     => rgar($entry, '1.3'),
            // last_name
            'input_1.6'     => rgar($entry, '1.6'),
			// work_email
            'input_4'     => rgar($entry, '4'),
            // business
            'input_2' => rgar($entry, '2'),
            // city
            'input_7.3' => rgar($entry, '7.3'),
			// state
            'input_7.4' => rgar($entry, '7.4'),
			// phone
            'input_7.5' => rgar($entry, '7.5'),
			// current provider
            'input_6' => rgar($entry, '6'),
			// preferred contact method
            'input_10' => rgar($entry, '10'),
            // preferred contact time
            'input_11' => rgar($entry, '11')
        );
        GFCommon::log_debug( 'gform_after_submission: body => ' . print_r( $body, true ) );

        $request = new WP_Http();
        $response = $request->post( $post_url, array( 'body' => $body ) );
        //GFCommon::log_debug( 'gform_after_submission: response => ' . print_r( $response['response']['code'], true ) );
    } 

    // Seminars
	// When duplicating, don't forget to rename the function
	add_action( 'gform_after_submission_32', 'after_submission_seminars', 10, 2 );
    function after_submission_seminars($entry, $form){
        $post_url = 'http://go.pardot.com/l/457992/2020-01-03/7scc46';
        $body = array(
            // first_name
            'input_1.3'     => rgar($entry, '1.3'),
            // last_name
            'input_1.6'     => rgar($entry, '1.6'),
			// work_email
            'input_4'     => rgar($entry, '4'),
            // business
            'input_2' => rgar($entry, '2'),
            // city
            'input_7.3' => rgar($entry, '7.3'),
			// state
            'input_7.4' => rgar($entry, '7.4'),
			// phone
            'input_7.5' => rgar($entry, '7.5'),
			// current provider
            'input_6' => rgar($entry, '6'),
			// preferred contact method
            'input_10' => rgar($entry, '10'),
            // preferred contact time
            'input_11' => rgar($entry, '11')
        );
        GFCommon::log_debug( 'gform_after_submission: body => ' . print_r( $body, true ) );

        $request = new WP_Http();
        $response = $request->post( $post_url, array( 'body' => $body ) );
        //GFCommon::log_debug( 'gform_after_submission: response => ' . print_r( $response['response']['code'], true ) );
    } 


    // Free Marketing
	// When duplicating, don't forget to rename the function
	add_action( 'gform_after_submission_33', 'after_submission_free_marketing', 10, 2 );
    function after_submission_free_marketing($entry, $form){
        $post_url = 'http://go.pardot.com/l/457992/2020-01-03/7scc48';
        $body = array(
            // first_name
            'input_1.3'     => rgar($entry, '1.3'),
            // last_name
            'input_1.6'     => rgar($entry, '1.6'),
			// work_email
            'input_4'     => rgar($entry, '4'),
            // business
            'input_2' => rgar($entry, '2'),
            // city
            'input_7.3' => rgar($entry, '7.3'),
			// state
            'input_7.4' => rgar($entry, '7.4'),
			// phone
            'input_7.5' => rgar($entry, '7.5'),
			// current provider
            'input_6' => rgar($entry, '6'),
			// preferred contact method
            'input_10' => rgar($entry, '10'),
            // preferred contact time
            'input_11' => rgar($entry, '11')
        );
        GFCommon::log_debug( 'gform_after_submission: body => ' . print_r( $body, true ) );

        $request = new WP_Http();
        $response = $request->post( $post_url, array( 'body' => $body ) );
        //GFCommon::log_debug( 'gform_after_submission: response => ' . print_r( $response['response']['code'], true ) );
    } 

    // Product Training
	// When duplicating, don't forget to rename the function
	add_action( 'gform_after_submission_36', 'after_submission_product_training', 10, 2 );
    function after_submission_product_training($entry, $form){
        $post_url = 'http://go.pardot.com/l/457992/2020-01-03/7scc4g';
        $body = array(
            // first_name
            'input_1.3'     => rgar($entry, '1.3'),
            // last_name
            'input_1.6'     => rgar($entry, '1.6'),
			// work_email
            'input_4'     => rgar($entry, '4'),
            // business
            'input_2' => rgar($entry, '2'),
            // city
            'input_7.3' => rgar($entry, '7.3'),
			// state
            'input_7.4' => rgar($entry, '7.4'),
			// phone
            'input_7.5' => rgar($entry, '7.5'),
			// current provider
            'input_6' => rgar($entry, '6'),
			// preferred contact method
            'input_10' => rgar($entry, '10'),
            // preferred contact time
            'input_11' => rgar($entry, '11')
        );
        GFCommon::log_debug( 'gform_after_submission: body => ' . print_r( $body, true ) );

        $request = new WP_Http();
        $response = $request->post( $post_url, array( 'body' => $body ) );
        //GFCommon::log_debug( 'gform_after_submission: response => ' . print_r( $response['response']['code'], true ) );
    } 

    // Social Media
	// When duplicating, don't forget to rename the function
	add_action( 'gform_after_submission_34', 'after_submission_social_media', 10, 2 );
    function after_submission_social_media($entry, $form){
        $post_url = 'http://go.pardot.com/l/457992/2020-01-03/7scc4q';
        $body = array(
            // first_name
            'input_1.3'     => rgar($entry, '1.3'),
            // last_name
            'input_1.6'     => rgar($entry, '1.6'),
			// work_email
            'input_4'     => rgar($entry, '4'),
            // business
            'input_2' => rgar($entry, '2'),
            // city
            'input_7.3' => rgar($entry, '7.3'),
			// state
            'input_7.4' => rgar($entry, '7.4'),
			// phone
            'input_7.5' => rgar($entry, '7.5'),
			// current provider
            'input_6' => rgar($entry, '6'),
			// preferred contact method
            'input_10' => rgar($entry, '10'),
            // preferred contact time
            'input_11' => rgar($entry, '11')
        );
        GFCommon::log_debug( 'gform_after_submission: body => ' . print_r( $body, true ) );

        $request = new WP_Http();
        $response = $request->post( $post_url, array( 'body' => $body ) );
        //GFCommon::log_debug( 'gform_after_submission: response => ' . print_r( $response, true ) );
    }

    // At a glance Download
	// When duplicating, don't forget to rename the function
	add_action( 'gform_after_submission_1', 'after_submission_download', 10, 2 );
    function after_submission_download($entry, $form){
        $post_url = rgar($entry, '5');
        if($post_url && $post_url != ''){
            $body = array(
                // first_name
                'input_2'     => rgar($entry, '2')
            );
            GFCommon::log_debug( 'gform_after_submission: body => ' . print_r( $body, true ) );

            $request = new WP_Http();
            $response = $request->post( $post_url, array( 'body' => $body ) );
            //GFCommon::log_debug( 'gform_after_submission: response => ' . print_r( $response['response']['code'], true ) );        
        }
    }

    // Convention Qualification
	// When duplicating, don't forget to rename the function
	add_action( 'gform_after_submission_37', 'after_submission_convention_qualification', 10, 2 );
    function after_submission_convention_qualification($entry, $form){
        $post_url = 'http://go.pardot.com/l/457992/2020-01-13/7tjjyg';
        $body = array(
            // first_name
            'input_1.3'     => rgar($entry, '1.3'),
            // last_name
            'input_1.6'     => rgar($entry, '1.6'),
			// email
            'input_2'     => rgar($entry, '2'),
            // estimated annual gross premium
            'input_5' => rgar($entry, '5')
        );
        GFCommon::log_debug( 'gform_after_submission: body => ' . print_r( $body, true ) );

        $request = new WP_Http();
        $response = $request->post( $post_url, array( 'body' => $body ) );
        //GFCommon::log_debug( 'gform_after_submission: response => ' . print_r( $response['response']['code'], true ) );
    }

    // Free Marketing Dollars
	// When duplicating, don't forget to rename the function
	add_action( 'gform_after_submission_39', 'after_submission_free_marketing_dollars', 10, 2 );
    function after_submission_free_marketing_dollars($entry, $form){
        $post_url = 'http://go.pardot.com/l/457992/2020-01-13/7tjjyz';
        $body = array(
            // first_name
            'input_1.3'     => rgar($entry, '1.3'),
            // last_name
            'input_1.6'     => rgar($entry, '1.6'),
			// email
            'input_2'     => rgar($entry, '2'),
            // estimated annual gross premium
            'input_5' => rgar($entry, '5')
        );
        GFCommon::log_debug( 'gform_after_submission: body => ' . print_r( $body, true ) );

        $request = new WP_Http();
        $response = $request->post( $post_url, array( 'body' => $body ) );
        //GFCommon::log_debug( 'gform_after_submission: response => ' . print_r( $response['response']['code'], true ) );
    }    

    // =========================================================================
    // ADD NEW IMAGE SIZES WHEN UPLOADING MEDIA
    // =========================================================================
    // Name the type of size, provide the demensions, and determine
    // how the image should be cropped, if cropped at all
    ## add_image_size( 'cropped-blog', 370, 220, array( 'center', 'center' ) );

    // =========================================================================
    // REGISTER MENUS
    // =========================================================================
    // If more than one menu is neccessary, you can register several
    // and assign different menu items to each or use one menu for
    // desktop and another for mobile
    // register_nav_menu('main', 'Main Menu');
    // register_nav_menu('mobile', 'Mobile Menu');
    // register_nav_menu('footer', 'Footer Menu');

    // =========================================================================
    // REGISTER A DASHBOARD WIDGET...PENDING FUTURE PROJECT
    // =========================================================================
    // add_action('wp_dashboard_setup', 'custom_dashboard_widgets');
    //
    // function custom_dashboard_widgets() {
    // 	global $wp_meta_boxes;
    // 	wp_add_dashboard_widget('custom_help_widget', 'Theme Support', 'custom_dashboard_help');
    // }
    //
    // function custom_dashboard_help() {
    // echo '<p>Toss something here.</p>';
    // }

    // =========================================================================
    // ADDING THAT SWEET MIGHTILY LOGO TO THE LOGO SCREEN
    // =========================================================================
    // function custom_login_logo() {
    // 	echo '<style type="text/css">
    // 	h1 a { background-image: url('.get_bloginfo('template_directory').'/images/custom-login-logo.png) !important; }
    // 	</style>';
    // }
    // add_action('login_head', 'custom_login_logo');

    // =========================================================================
    // ADD A FORMAT MENU TO TINYMCE
    // =========================================================================
    // function wpb_mce_buttons_2($buttons) {
    // 	array_unshift($buttons, 'styleselect');
    // 	return $buttons;
    // }
    // add_filter('mce_buttons_2', 'wpb_mce_buttons_2');
    //
    // function my_mce_before_init_insert_formats( $init_array ) {
    //
    // 	$style_formats = array(
    // 		array(
    // 			'title' => 'Small Text',
    // 			'block' => 'span',
    // 			'classes' => 'small',
    // 			'wrapper' => true,
    // 		),
    // 	);
    // 	// Insert the array, JSON ENCODED, into 'style_formats'
    // 	$init_array['style_formats'] = json_encode( $style_formats );
    //
    // 	return $init_array;
    //
    // }
    // add_filter( 'tiny_mce_before_init', 'my_mce_before_init_insert_formats' );

    // =========================================================================
    // Redirect to failed login screen instead of wp-login
    // =========================================================================
    // function custom_login_fail( $username ) {
    //
    // 	 $referrer = $_SERVER['HTTP_REFERER'];  // where did the post submission come from?
    //
    // 	 // if there's a valid referrer, and it's not the default log-in screen
    // 	 if ( !empty($referrer) && !strstr($referrer,'wp-login') && !strstr($referrer,'wp-admin') ) {
    //
    // 		  wp_redirect(home_url() . '/?login=failed' );
    //
    // 		  exit;
    //
    // 	 }
    //
    // }
    // add_action( 'wp_login_failed', 'custom_login_fail' );

    // =========================================================================
    // Redirect to front-end login screen instead of wp admin login screen
    // =========================================================================
    // add_action('wp', 'redirect_private_page_to_login');
    //
    // function redirect_private_page_to_login(){
    //
    // 	global $wp_query;
    //
    // 	$queried_object = get_queried_object();
    //
    // 	if (isset($queried_object->post_status) && $queried_object->post_status == "private" && !is_user_logged_in()) {
    //
    // 		wp_redirect(home_url('/?login=active&redirect_to='.get_permalink($queried_object->ID))); exit;
    //
    // 	}
    //
    // }

    // =========================================================================
    // Extend Rest API
    // =========================================================================
    // add_action( 'rest_api_init', 'rest_api_filter_add_filters' );
    //
    // // Add filter param
    // function rest_api_filter_add_filters() {
    //
    // 	foreach ( get_post_types( array( 'show_in_rest' => true ), 'objects' ) as $post_type ) {
    //
    // 		add_filter( 'rest_' . $post_type->name . '_query', 'rest_api_filter_add_filter_param', 10, 2 );
    // 	}
    // }
    //
    // // Add custom authors param to filter
    // function rest_api_filter_add_filter_param( $args, $request ) {
    //
    // 	// Bail out if no filter parameter is set.
    // 	if ( empty( $request['filter'] ) || ! is_array( $request['filter'] ) ) {
    //
    // 		return $args;
    //
    // 	}
    // 	$filter = $request['filter'];
    //
    // 	if ( isset( $filter['posts_per_page'] ) && ( (int) $filter['posts_per_page'] >= 1 && (int) $filter['posts_per_page'] <= 100 ) ) {
    //
    // 		$args['posts_per_page'] = $filter['posts_per_page'];
    //
    // 	}
    //
    // 	global $wp;
    //
    // 	$vars = apply_filters( 'rest_query_vars', $wp->public_query_vars );
    //
    // 	$vars[] = 'custom_authors';
    //
    // 	foreach ( $vars as $var ) {
    //
    // 		if ( isset( $filter[ $var ] ) ) {
    //
    // 			if($var === 'custom_authors'){
    //
    // 				// Reset to regular meta query
    // 				$var = 'meta_query';
    //
    // 				// If custom authors is set then explode to array and loop through the values creating multiple meta queryies
    // 				$i = 0;
    //
    // 				$filter[$var]['relation'] = 'OR';
    //
    // 				$authorsarray = explode(',', $filter['custom_authors']);
    //
    // 				foreach($authorsarray as $author){
    //
    // 					$filter[$var][$i]['key'] = 'author';
    //
    // 					$filter[$var][$i]['value'] = $author;
    //
    // 					$filter[$var][$i]['compare'] = 'IN';
    //
    // 					$i++;
    // 				}
    // 			}
    //
    // 			$args[$var] = $filter[$var];
    //
    // 		}
    // 	}
    //
    // 	return $args;
    //
    // }
    //
    // function my_rest_query_vars($valid_vars) {
    //
    // 	$valid_vars = array_merge($valid_vars, array('meta_query'));
    //
    // 	return $valid_vars;
    //
    // }
    //
    // add_filter('rest_query_vars', 'my_rest_query_vars');
