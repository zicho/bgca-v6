<script lang="ts">
	import '$lib/css/app.css';
	import Navbar from './(layout)/Navbar.svelte';
	let { data } = $props();
	const { user } = $derived(data);
</script>

<Navbar {user} />
<slot />
