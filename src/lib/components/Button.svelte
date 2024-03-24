<script lang="ts">
	import type { ButtonProps } from '$lib/components/props/ButtonProps';
	const { id, label, style = 'neutral', type = 'button', classes }: ButtonProps = $props();
</script>

<button {id} data-testid={id} name={id} class="w-full btn btn-{style} {classes}" {type}
	>{label}</button
>
