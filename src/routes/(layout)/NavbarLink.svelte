<script lang="ts">
	import type { NavbarLinkProps } from './NavbarProps';

	let { id, url, aria, displayText, classes }: NavbarLinkProps = $props();
</script>

<li class="flex justify-start {classes}" {id} data-testid={id}>
	<a href={url} aria-label={aria} class="lg:hover:text-neutral-content flex items-center w-full">
		<!-- <svelte:component this={props.icon} class="mr-4 md:mr-0" /> -->
		{displayText}
	</a>
</li>

<style>
	a {
		color: inherit !important;
	}

	a:hover {
		color: inherit !important;
	}
</style>
