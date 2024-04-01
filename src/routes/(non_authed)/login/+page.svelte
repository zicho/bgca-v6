<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Input from '$lib/components/form/Input.svelte';
	import CenteredLayout from '$lib/layout/CenteredLayout.svelte';
	import FormCard from '$lib/layout/FormCard.svelte';
	import { loginUserSchema } from '$lib/validation/schemas/loginUserSchema';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { superForm } from 'sveltekit-superforms/client';

	let { data } = $props();

	const { form, constraints, message, enhance, errors } = superForm(data.form, {
		clearOnSubmit: 'none',
		validators: zodClient(loginUserSchema),
		validationMethod: 'auto'
	});
</script>

<CenteredLayout>
	<FormCard title="Login" errorMessage={$message}>
		<form use:enhance method="post" class="mb-4 lg:mb-0 flex flex-col">
			<Input
				id="username"
				required
				bind:value={$form.username}
				label="Username"
				type="text"
				errors={$errors.username}
				classes="mb-2"
			/>

			<Input
				id="password"
				required
				bind:value={$form.password}
				label="Password"
				type="password"
				errors={$errors.password}
				{...$constraints.password}
			/>

			<div class="divider py-4" />

			<Button label="Sign in" id="sign-in-btn" style="primary" type="submit" />
		</form>
	</FormCard>
</CenteredLayout>
