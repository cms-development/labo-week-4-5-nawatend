<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'dbwp_wizardsunite' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost:8889' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'nJTiTiuP%%hf#Ao&k<*b_sD]-IKxVQ|z-cYR]z$@n2:Wcn {H*jxENc0vRG#7k$%' );
define( 'SECURE_AUTH_KEY',  '?B=zq=Oo*G N=1D.HG92I 2LQ:$Vf!d**kXXCSkyD78v;yS7,TF+tgY2GRc%H*y1' );
define( 'LOGGED_IN_KEY',    '{wwl#;,bV[04zkxdiFtP=M@D#_pP^mXrkzKn4kidY?[d0^h2w1V3?t}BaEubxP1N' );
define( 'NONCE_KEY',        'OP_Mpj^-8j`9dz8HOg0p{R :(<G8czd^`s2DzUzT)q]w+<Up@1F@*$H~H6k}_x=H' );
define( 'AUTH_SALT',        '[>x^;g+f4U sbkC*X?WYGi4c>i!39#65yi9?.7eJB$oARGK<GI0=}9;,~|^2&g_k' );
define( 'SECURE_AUTH_SALT', 'EaDzFDxBn}*Pi=m{c98NKod7p@#F)w62IrS%&=R^R|soV0U1#e_nw4)4Nl^`?}fo' );
define( 'LOGGED_IN_SALT',   'J+lc^^,JM>ALc:<>@SO+UZ:Lz|+v6~#AIo.q QxdK+Z>z91ozRW_bj{/}f^|dvP|' );
define( 'NONCE_SALT',       '2<t}49/)FrzD@aiOqll6OMvCc=%=<$)<LIo1&m5L>&7]h.^u)U-Z3G)2t_pct`:o' );

// json web token setting
define('JWT_AUTH_SECRET_KEY', 'Wg|ne)8P-qF$wNm&+@^W;]s8!Id%wF@[3V YDE|,8lFQyWVJ3Vha! XvM/Q){TZ/');
define('JWT_AUTH_CORS_ENABLE', true);

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'dbwp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );


define('ALLOW_UNFILTERED_UPLOADS', true);

