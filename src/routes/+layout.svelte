<script lang="ts">
	import { enhance } from '$app/forms';
	import '$lib/css/app.css';
	import logger from '$lib/logging/logger';
	let { data } = $props();
	const { user } = $derived(data);

	logger.info('Poo!');
</script>

<div class="navbar h-16 text-primary-content px-4">
	<div class="flex-1">
		<a href="/" class="text-2xl">BGCA</a>
	</div>

	<div class="flex-none">
		<ul class="menu menu-horizontal px-1">
			{#if !user}
				<li class="h-full"><a href="/login">Login</a></li>
				<li class="h-full"><a href="/register">Register</a></li>
			{:else}
				<li class="h-full"><a href="/dashboard">Dashboard</a></li>
				<form class="flex align-middle" use:enhance action="/logout" method="post">
					<button class="px-4" type="submit">Logout</button>
				</form>
			{/if}
		</ul>
	</div>
</div>

<slot />
