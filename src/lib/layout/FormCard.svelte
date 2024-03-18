<script lang="ts">
	let { title, errorMessage } = $props();
</script>

<div
	class="h-full lg:h-fit w-full rounded border-base-300 border shadow-lg bg-base-100 overflow-x-hidden lg:max-w-lg"
>
	<div class="px-4 lg:px-8 py-2 lg:py-6 h-full flex flex-col">
		<div class="flex flex-col flex-1 pb-4 lg:pb-0">
			<div class="mb-0 lg:mb-2">
				<h1 class="text-xl lg:text-2xl font-light text-center text-primary">{title}</h1>
			</div>
			<slot />
			{#if errorMessage}
				<div
					class="lg:hidden text-sm text-center w-full lg:max-w-lg bg-error border border-error p-4 rounded text-error-content"
				>
					<span>{@html errorMessage}</span>
				</div>
			{/if}
			<slot name="footer" />
		</div>
	</div>
</div>
{#if errorMessage}
	<div
		class="mt-8 hidden lg:block text-center w-full lg:max-w-lg bg-error border border-error p-4 rounded text-error-content"
	>
		<span>{@html errorMessage}</span>
	</div>
{/if}
