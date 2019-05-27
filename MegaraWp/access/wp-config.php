<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе
 * установки. Необязательно использовать веб-интерфейс, можно
 * скопировать файл в "wp-config.php" и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки MySQL
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define( 'DB_NAME', 'u0303668_test22' );

/** Имя пользователя MySQL */
define( 'DB_USER', 'u0303668' );

/** Пароль к базе данных MySQL */
define( 'DB_PASSWORD', '9G8w6C0u' );

/** Имя сервера MySQL */
define( 'DB_HOST', 'localhost' );

/** Кодировка базы данных для создания таблиц. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Схема сопоставления. Не меняйте, если не уверены. */
define( 'DB_COLLATE', '' );

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'ro`{_Y<e0;p(6vBZ]x(=.TpJWcFP!YXa`ObkL4T#Auc+Iuv7]J##xTQKX8]1rw43' );
define( 'SECURE_AUTH_KEY',  'v;:2BT~NDujvP~VWxz/.5$y8*lO,_+x!^/*$Q+-id<kxM]R>=eVf)~Qf|. ]vP[{' );
define( 'LOGGED_IN_KEY',    'S[1n6hv)=S8j>tw%Vd~<*Am~Sa&f7c 2vcNO1M054FEp%:*yxYWU(M0dbC+PVtO/' );
define( 'NONCE_KEY',        '|U^b/J?2PNQ4SCL~5B?}zlLx*xq6A-=LPWOg!UK:,/2tYD.E(CQL5~d$[55]EI?,' );
define( 'AUTH_SALT',        '96/p(2Mdgc(*u/-+O<w9l94z/<bZ`ot5ELB3:]3Ni)42sf B|Lm[0F4AInHqb1Q;' );
define( 'SECURE_AUTH_SALT', 'sHITW1!=g5rYn*re(L~F,i6mI+UOBUU,g2}iN|){RCNbX?0/T[;pbFWSy&$Z?r9+' );
define( 'LOGGED_IN_SALT',   '}g57}{#2&Z+MyDG5<*;74)d*DZV%Q{=o4h~2a+7)h}A6@$s1bn&t{uO&%5x$0E)]' );
define( 'NONCE_SALT',       'es`J=nKO]{.Q`H30$9frv@*p=[ge.Tc90HbxgLLiiSB.{sm&&gM>55A rTpe*wH~' );

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в Кодексе.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Инициализирует переменные WordPress и подключает файлы. */
require_once( ABSPATH . 'wp-settings.php' );
