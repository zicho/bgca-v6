<script lang="ts">
    let { bgColor = "bg-base-200" } = $props();
</script>

<div class="flex flex-col items-center justify-center h-[calc(100svh-4rem)] {bgColor}">
	<slot />
</div>
