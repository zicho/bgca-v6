<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import InputAlt from '$lib/components/form/InputAlt.svelte';
	import CenteredLayout from '$lib/layout/CenteredLayout.svelte';
	import FormCard from '$lib/layout/FormCard.svelte';
	import { superForm } from 'sveltekit-superforms/client';

	let { data } = $props();

	const { form, constraints, message, enhance, errors, posted } = superForm(data.form, {
		clearOnSubmit: 'none'
	});
</script>

<CenteredLayout>
	<FormCard title="Register" errorMessage={$message}>
		<form use:enhance method="post" class="mb-4 lg:mb-0 flex flex-col">
			<InputAlt
				id="username"
				required
				bind:value={$form.username}
				label="Username"
				type="text"
				errors={$errors.username}
				classes="mb-2"
				posted={$posted}
				{...$constraints.username}
			/>

			<InputAlt
				id="password"
				required
				bind:value={$form.password}
				label="Password"
				type="password"
				errors={$errors.password}
				classes="mb-2 "
				{...$constraints.password}
			/>
			<InputAlt
				id="confirm_password"
				required
				bind:value={$form.confirm_password}
				label="Confirm password"
				type="password"
				errors={$errors.confirm_password}
				{...$constraints.confirm_password}
			/>
			<div class="divider py-4" />
			<Button label="Register" id="register-btn" style="primary" type="submit" />
		</form>
		<!-- <div slot="footer">
			<div class="divider" />
			<LinkButton label="Login" id="goto-login-btn" href="/login" classes="w-full" />
		</div> -->
	</FormCard>
</CenteredLayout>
