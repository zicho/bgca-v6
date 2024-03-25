<script lang="ts">
	import BasePageLayout from '$lib/layout/BasePageLayout.svelte';

	let { data } = $props();
	const { user } = $derived(data);
</script>

<BasePageLayout>
	<article class="prose">
		<h1>Dashboard</h1>
		<p>
			This is a
			<strong>protected route.</strong> You are authenticated as user:
			<strong>{user?.username}</strong>.
		</p>
	</article>
</BasePageLayout>
