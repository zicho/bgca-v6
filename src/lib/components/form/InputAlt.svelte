<script lang="ts">
	import type { InputProps } from '$lib/components/props/InputProps';
	import { FormErrorIcon, FormValidIcon } from '$lib/data/ui/icons';

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
	}: InputProps = $props();

	let valid = $derived(!errors && value);
</script>

<div class={classes || ''}>
	<div class="label">
		<label for={id} class="label-text text-base-content text-sm font-bold">{label}</label>
		{#if errors}
			<span class:form-label-error={errors} class="label-text-alt">{errors[0]}</span>
		{/if}
	</div>

	<label
		class="input input-bordered input-error flex items-center gap-2"
		class:input-error={errors}
		class:form-placeholder-error={errors}
		class:input-success={valid}
	>
		<input
			bind:value
			{required}
			{id}
			name={id}
			{type}
			placeholder={placeholder || label}
			class="grow"
			class:input-error={errors}
			class:input-success={valid}
			class:form-placeholder-error={errors}
			aria-invalid={errors ? 'true' : undefined}
			{...constraints}
		/>
		{#if errors}
			<FormErrorIcon class="text-error" />
		{:else if valid}
			<FormValidIcon class="text-success" />
		{/if}
	</label>

	<!-- <input
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
	/> -->
</div>
