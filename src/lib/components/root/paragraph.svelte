<script>
	import { cn } from "$lib/utils.js";

    let {
		class: className,
        text
    } = $props();
</script>

<p class={cn(
    "font-normal sm:font-light tracking-[0.25px] leading-[1.75rem] sm:leading-[1.75rem]",
    className
)}>
    {@render text()}
</p>