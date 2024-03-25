<script lang="ts">
	import { enhance } from '$app/forms';
	import { afterNavigate } from '$app/navigation';
	import type { SignOutModalProps } from './LayoutProps';
	let { open }: SignOutModalProps = $props();

	afterNavigate(() => {
		open = false;
	});
</script>

<input type="checkbox" id="signout_modal" class="modal-toggle" bind:checked={open} />
<div class="modal" role="dialog">
	<div class="modal-box">
		<h3 class="text-lg font-bold">Signing out!</h3>
		<p class="py-4">Do you want to sign out?</p>
		<div class="modal-action flex">
			<label for="signout_modal" class="btn btn-secondary flex-1">Cancel</label>
			<form
				use:enhance
				class="flex-1 items-center justify-center cursor-pointer"
				action="/logout"
				method="post"
			>
				<button
					id="confirm-signout-btn"
					data-testid="confirm-signout-btn"
					name="confirm-signout-btn"
					class="w-full btn btn-primary"
					type="submit">Yes</button
				>
			</form>
		</div>
	</div>

	<label class="modal-backdrop" for="signout_modal">Close</label>
</div>
