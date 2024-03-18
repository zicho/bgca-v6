<script lang="ts">
	import '$lib/css/app.css';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<div class="navbar h-16 text-primary-content px-4">
	<div class="flex-1">
		<a href="/" class="text-2xl">BGCA</a>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal px-1">
			<li class="h-full"><a href="/login">Login</a></li>
			<li class="h-full"><a href="/register">Register</a></li>
		</ul>
	</div>
</div>

<slot />
