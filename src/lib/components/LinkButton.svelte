<script lang="ts">
	import type { LinkButtonProps } from '$lib/components/props/LinkButtonProps';
	const { id, label, href, external, forceReloadOnClicked, disabled, classes }: LinkButtonProps =
		$props();
</script>

<a
	{href}
	target={external ? '_blank' : ''}
	{id}
	data-testid={id}
	class="btn btn-link {classes || ''}"
	class:btn-disabled={disabled}
	type="submit"
>
	<!-- {#if props.icon && !props.alignIconRight}
		<svelte:component this={props.icon} class="mr-4 md:mr-0" />
	{/if} -->

	{label}

	<!-- {#if props.icon && props.alignIconRight}
		<svelte:component this={props.icon} class="ml-4 md:ml-0" />
	{/if} -->
</a>
