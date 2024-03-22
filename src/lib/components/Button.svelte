<script lang="ts">
	import type { TButton } from '$lib/components/types/Button.type';
	const { id, label, style = 'neutral', type = 'button', classes }: TButton = $props();
</script>

<button {id} data-testid={id} name={id} class="w-full btn btn-{style} {classes}" {type}>{label}</button>
