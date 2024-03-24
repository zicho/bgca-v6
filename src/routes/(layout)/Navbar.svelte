<script lang="ts">
	import { enhance } from '$app/forms';
	import NavbarLink from './NavbarLink.svelte';
	import type { NavbarProps } from './NavbarProps';
	import generateNavbarLinks from './navbarLinks';

	let { user }: NavbarProps = $props();

	let open: boolean;

	const navbarLinks = $derived(generateNavbarLinks());

	const menuDataAuthenticated = $derived(navbarLinks.filter((item) => item.authOnly));
	const menuDataNotAuthenticated = $derived(navbarLinks.filter((item) => !item.authOnly));
</script>

<div class="navbar h-16 text-primary-content px-4">
	<div class="flex-1">
		<a href="/" class="text-2xl">BGCA</a>
	</div>

	<div class="flex-none">
		<ul class="menu menu-horizontal px-1">
			{#if user}
				{#each menuDataAuthenticated as link}
					<NavbarLink {...link} />
				{/each}
				<form class="flex align-middle" use:enhance action="/logout" method="post">
					<button class="px-4" type="submit">Logout</button>
				</form>
			{:else}
				{#each menuDataNotAuthenticated as link}
					<NavbarLink {...link} />
				{/each}
			{/if}
		</ul>
	</div>
</div>
