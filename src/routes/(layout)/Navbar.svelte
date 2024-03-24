<script lang="ts">
	import { enhance } from '$app/forms';
	import { afterNavigate } from '$app/navigation';
	import { MenuIcon, SignoutIcon } from '$lib/data/ui/icons';
	import NavbarLink from './NavbarLink.svelte';
	import type { NavbarProps } from './NavbarProps';
	import generateNavbarLinks from './navbarLinks';

	let { user }: NavbarProps = $props();

	let menuModalOpen = $state<boolean>(false);

	afterNavigate(() => {
		menuModalOpen = false;
	});

	const navbarLinks = $derived(generateNavbarLinks());

	const menuDataAuthenticated = $derived(navbarLinks.filter((item) => item.authOnly));
	const menuDataNotAuthenticated = $derived(navbarLinks.filter((item) => !item.authOnly));
</script>

<div class="navbar h-16 text-primary-content px-4">
	<div class="flex-1">
		<a href="/" class="text-2xl">BGCA</a>
	</div>

	<div class="flex-none">
		<ul class="menu menu-horizontal px-1 hidden md:flex">
			{#if user}
				{#each menuDataAuthenticated as link}
					<NavbarLink {...link} />
				{/each}
				<form
					class="flex items-center justify-center cursor-pointer"
					use:enhance
					action="/logout"
					method="post"
				>
					<SignoutIcon /><button class="px-4" type="submit">Logout</button>
				</form>
				<label class="flex items-center justify-center cursor-pointer" for="signout_modal"
					><SignoutIcon class="mr-4" />Sign out</label
				>
			{:else}
				{#each menuDataNotAuthenticated as link}
					<NavbarLink {...link} />
				{/each}
			{/if}
		</ul>
		<label for="modal-menu" class="flex md:hidden hover:cursor-pointer"
			><MenuIcon class="mr-4 " /></label
		>
	</div>
</div>

<input type="checkbox" id="modal-menu" class="modal-toggle" bind:checked={menuModalOpen} />
<div class="modal md:hidden">
	<div class="modal-box">
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<ul class="space-y-8">
			{#if user}
				{#each menuDataAuthenticated as link}
					<NavbarLink {...link} id="{link.id}-modal" />
				{/each}

				<label class="flex items-center hover:cursor-pointer" for="signout_modal"
					><SignoutIcon class="mr-4" />Sign out</label
				>
			{:else}
				{#each menuDataNotAuthenticated as link}
					<NavbarLink {...link} id="{link.id}-modal" />
				{/each}
			{/if}
		</ul>
	</div>
	<label class="modal-backdrop" for="modal-menu"></label>
</div>
