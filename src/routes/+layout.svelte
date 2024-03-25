<script lang="ts">
	import '$lib/css/app.css';
	import Navbar from './(layout)/Navbar.svelte';
	import SignOutModal from './(layout)/SignOutModal.svelte';
	let { data } = $props();
	const { user } = $derived(data);

	let signoutModalOpen = $state<boolean>(false);
</script>

<Navbar {user} />
<slot />
<SignOutModal open={signoutModalOpen} />
