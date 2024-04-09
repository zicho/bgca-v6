<script lang="ts">
	import type { InputProps } from '$lib/components/props/InputProps';
	import { FormErrorIcon, FormValidIcon } from '$lib/data/ui/icons';

	let {
		id,
		value,
		required,
		posted,
		label,
		placeholder,
		errors,
		classes,
		type = 'text',
		constraints
	}: InputProps = $props();

	let valid = $derived(!errors && posted);
</script>

<div class={classes || ''}>
	<div class="label flex">
		<div class="flex justify-between w-full">
			<label for={id} class="h-fit mt-auto label-text text-base-content text-sm font-bold"
				>{label}</label
			>
			{#if errors}
				<div class="flex flex-col">
					{#each errors as err}
						<span class="text-error text-right label-text-alt">{err}</span>
					{/each}
				</div>
			{/if}
		</div>
	</div>

	<label
		class="input input-bordered flex items-center gap-2"
		class:input-error={errors}
		class:form-placeholder-error={errors}
	>
		<input
			bind:value
			{required}
			{id}
			name={id}
			{type}
			placeholder={placeholder || label}
			class="grow {errors ? 'text-error input-error' : ''}"
			aria-invalid={errors ? 'true' : undefined}
			{...constraints}
		/>
		{#if errors}
			<FormErrorIcon class="text-error" />
		{:else if valid}
			<FormValidIcon class="text-success" />
		{/if}
	</label>
</div>
