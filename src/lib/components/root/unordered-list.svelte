<script>
    // import { cn } from "$lib/utils";

    let {
        // class: className,
        items
    } = $props();
</script>

<ul class="list-disc font-normal sm:font-light tracking-[0.25px] leading-[1.75rem] px-6 md:px-8 ml-6 md:ml-8">
    {#each items as item}
    <li>{item}</li>
    {/each}
    <!-- <li>Mopping</li>
    <li>Dusting surfaces</li>
    <li>Cleaning bathrooms and kitchens</li>
    <li>Making beds</li> -->
</ul>
