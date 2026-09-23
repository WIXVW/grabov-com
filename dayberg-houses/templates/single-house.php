<?php
/**
 * Single house page. Sections are filled in from the approved Figma layout.
 */

defined( 'ABSPATH' ) || exit;

get_header();

while ( have_posts() ) :
	the_post();
	?>
	<main id="primary" class="dh-house">
		<section class="dh-hero">
			<div class="dh-container">
				<h1 class="dh-hero__title"><?php the_title(); ?></h1>
				<?php if ( has_post_thumbnail() ) : ?>
					<div class="dh-hero__media"><?php the_post_thumbnail( 'full' ); ?></div>
				<?php endif; ?>
			</div>
		</section>

		<?php if ( get_the_content() ) : ?>
			<section class="dh-content">
				<div class="dh-container"><?php the_content(); ?></div>
			</section>
		<?php endif; ?>
	</main>
	<?php
endwhile;

get_footer();
