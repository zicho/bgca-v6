<script lang="ts">
	import BasePageLayout from '$lib/layout/BasePageLayout.svelte';
</script>

<BasePageLayout>
	<section class="space-y-8">
		<article class="prose">
			<h1>Public routes</h1>
			<p>
				Routes under layout group <code>(public)</code> (such as the current one), are available to all
				users, authenticated or not.
			</p>
			<hr />
		</article>
		<article class="prose">
			<h1>Protected routes</h1>
			<p>
				Routes under layout group <code>(protected)</code> are
				<strong>only available authenticated users.</strong>
			</p>

			<p>
				Unauthenticated users will be redirected to <code>/login</code> using
				<code>hooks.server.ts</code>
			</p>
			<hr />
		</article>
		<article class="prose">
			<h1>Non-authed routes</h1>
			<p>
				Routes under layout group <code>(non_authed)</code>
				are <strong>not available for any authenticated users!</strong>
			</p>

			<p>
				This makes them suitable for login and/or register pages, for example, or something like a
				"forgot password" page.
			</p>

			<p>
				<strong>Authenticated</strong> users will be redirected to protected route
				<code>/dashboard</code>
				using
				<code>hooks.server.ts</code>
			</p>
		</article>
	</section>
</BasePageLayout>
