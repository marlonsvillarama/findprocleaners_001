<script>
	import { cn } from "$lib/utils.js";

    let {
		class: className,
        text
    } = $props();
</script>

<p class={cn(
    "font-normal tracking-[0.25px] leading-[1.5rem] sm:leading-[1.75rem]",
    className
)}>
    {@render text()}
</p>