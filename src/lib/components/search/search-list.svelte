<script>
    import SearchFeatured from "./search-featured.svelte";
    import SearchPaginator from "./search-paginator.svelte";
    import SearchResult from "./search-result.svelte";
	import ContactForm from "../root/contact-form.svelte";

    import * as Select from "../ui/select/index";
    import Button from "../ui/button/button.svelte";
    import Label from "../ui/label/label.svelte";
    import Separator from "../ui/separator/separator.svelte";

    let {
        data
    } = $props();
</script>

<div class="results-container grid items-start">
    <div>
        <div class="text-green-800 text-md lg:text-lg font-light">Results for <span class="font-semibold mb-1">'{data.city?.name}'</span></div>
        <Separator class="mt-1 mb-1" />
    </div>

    {#if data.featured.length > 0}
		<div class="grid gap-2 mb-8">
			<h2 class="text-xl font-semibold">Featured Cleaners</h2>
			<div class="grid gap-4 bg-green-300/10 rounded-md bg-accent/20 shadow-md p-6 sm:flex sm:flex-cols-3 sm:justify-between">
				{#each data.featured as d}
					<SearchFeatured data={d} />
				{/each}
			</div>
		</div>
    {/if}

    {#if data.results.length > 0}
        <div class="grid gap-2">
            <SearchPaginator { data } />

            <div class="grid gap-1">
                {#each data.results as d}
                    <SearchResult data={d} />
                {/each}
            </div>

            <SearchPaginator { data } />
        </div>
    {:else}
        <div class="grid gap-2 mt-8">
            <h1 class="font-bold pb-4 text-3xl lg:text-5xl">Uh-oh...</h1>
            <p class="text-xs md:text-sm font-light text-gray-600">We did not find anything in {data.city?.name} at this time.</p>
            <p class="text-xs md:text-sm font-light text-gray-600">Please feel free to contact us and refer a cleaner you know!</p>
        </div>
        <div class="flex flex-row gap-4 items-center mt-8">
			<ContactForm isButton={true} />
        </div>
    {/if}
</div>