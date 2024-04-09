<script lang="ts">
	import type { NavbarLinkProps } from './LayoutProps';

	let { id, url, aria, displayText, icon, classes }: NavbarLinkProps = $props();
</script>

<li class="flex justify-start {classes}" {id} data-testid={id}>
	<a
		href={url}
		aria-label={aria}
		class="lg:hover:text-neutral-content flex items-center w-full px-2"
	>
		<svelte:component this={icon} class="mr-4 md:mr-0" />
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
