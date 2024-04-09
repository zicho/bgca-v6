<script lang="ts">
	import { page } from '$app/stores';
	import BasePageLayout from '$lib/layout/BasePageLayout.svelte';
	let { data } = $props();

	const title = data.profileIsYours ? 'Your profile' : `${$page.params.username}'s profile`;
</script>

<BasePageLayout>
	<div class="prose">
		<h1>{title}</h1>
		<p>A user presentation text can be placed here.</p>
	</div>
</BasePageLayout>
