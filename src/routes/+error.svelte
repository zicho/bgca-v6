<script>
	import { page } from '$app/stores';
	import BasePageLayout from '$lib/layout/BasePageLayout.svelte';

	console.dir($page.state);
</script>

<BasePageLayout>
	<article class="prose lg:max-w-none">
		<h1>An error has been encountered!</h1>
		<section>
			{#if $page.status === 404}
				<p><strong>{$page.status}</strong>: Path <code>{$page.url.pathname}</code> was not found</p>
			{:else}
				<h2>{$page.status}: {$page.error?.message}</h2>
			{/if}
		</section>
		<hr />
		<a class="text-xl" href="/">Return to main page</a>
	</article>
</BasePageLayout>
