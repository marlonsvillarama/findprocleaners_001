<script>
    import { cn } from "$lib/utils";

    let {
        class: className,
        data,
        selected = 'all'
    } = $props();
    console.log('*** cities-filter data ***', data);

    let value = $state(selected || 'all');
    const updateCity = () => {
        console.log(`cities filter value = ${value}`);
        window.location = `/professional-cleaners-in-${data.slug}/${value}`;
    };
</script>

<div class="grid gap-2">
    <div class={cn("grid gap-1", className)}>
        <label for="select_city" class="text-sm font-semibold">
            Select city:
        </label>
        <select class="px-3 py-2 text-sm border-1 border-gray-300 rounded-sm" bind:value onchange={updateCity}>
            <option value="all">-- All cities --</option>
            {#each data.cities as city}
                <option value={city.slug}>{city.name}</option>
            {/each}
        </select>
    </div>

    <div class="text-sm sm:text-xs pb-3 text-gray-500">
        Can't find your city?
        <a href="/contact?mode=request_city#contact-form" class="text-blue-600 underline">Request it to be listed.</a>
    </div>
</div>
