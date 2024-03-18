<script lang="ts">
	import type { TInput } from '$lib/components/types/Input.type';
	let {
		id,
		value,
		required,
		label,
		placeholder,
		errors,
		classes,
		type = 'text',
		constraints
	}: TInput = $props();

	console.dir(errors);
</script>

<div class={classes || ''}>
	<div class="label">
		<label for={id} class="label-text text-base-content text-sm font-bold">{label}</label>
		{#if errors}
			<span class:form-label-error={errors} class="label-text-alt">{errors[0]}</span>
		{/if}
	</div>

	<input
		bind:value
		{required}
		{id}
		name={id}
		{type}
		placeholder={placeholder || label}
		class="input input-bordered w-full"
		class:input-error={errors}
		class:form-placeholder-error={errors}
		aria-invalid={errors ? 'true' : undefined}
		{...constraints}
	/>
</div>
