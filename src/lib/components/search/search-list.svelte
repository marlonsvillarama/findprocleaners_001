<script>
	// import { getCoreRowModel, getFacetedRowModel, getFacetedUniqueValues, getFilteredRowModel, getPaginationRowModel, getSortedRowModel } from "@tanstack/table-core";
	// import { createSvelteTable } from "$lib/components/ui/data-table/data-table.svelte.js";

    import SearchFeatured from "./search-featured.svelte";
    import SearchPaginator from "./search-paginator.svelte";

    import * as Select from "../ui/select/index";
    import Button from "../ui/button/button.svelte";
    import Label from "../ui/label/label.svelte";
    import Separator from "../ui/separator/separator.svelte";
    import SearchResult from "./search-result.svelte";

    // import { ChevronLeft, ChevronsLeft, ChevronRight, ChevronsRight } from "@lucide/svelte";
	// import LayoutColumnsIcon from "@tabler/icons-svelte/icons/layout-columns";
	// import GripVerticalIcon from "@tabler/icons-svelte/icons/grip-vertical";
	// import ChevronDownIcon from "@tabler/icons-svelte/icons/chevron-down";
	// import PlusIcon from "@tabler/icons-svelte/icons/plus";
	// import ChevronsLeftIcon from "@tabler/icons-svelte/icons/chevrons-left";
	// import ChevronLeftIcon from "@tabler/icons-svelte/icons/chevron-left";
	// import ChevronRightIcon from "@tabler/icons-svelte/icons/chevron-right";
	// import ChevronsRightIcon from "@tabler/icons-svelte/icons/chevrons-right";
	// import CircleCheckFilledIcon from "@tabler/icons-svelte/icons/circle-check-filled";
	// import LoaderIcon from "@tabler/icons-svelte/icons/loader";
	// import DotsVerticalIcon from "@tabler/icons-svelte/icons/dots-vertical";

    let {
        data
    } = $props();

	// let pagination = $state({ pageIndex: 0, pageSize: 20 });
	// let sorting = $state([]);
	// let columnFilters = $state([]);

	/* const table = createSvelteTable({
		get data() {
			return data;
		},
		columns: [],
		state: {
			get pagination() {
				return pagination;
			},
			get sorting() {
				return sorting;
			},
			get columnVisibility() {
				return columnVisibility;
			},
			get rowSelection() {
				return rowSelection;
			},
			get columnFilters() {
				return columnFilters;
			},
		},
		getRowId: (row) => row.id.toString(),
		enableRowSelection: true,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFacetedRowModel: getFacetedRowModel(),
		getFacetedUniqueValues: getFacetedUniqueValues(),
		getFilteredRowModel: getFilteredRowModel(),
		onPaginationChange: (updater) => {
			if (typeof updater === "function") {
				pagination = updater(pagination);
			} else {
				pagination = updater;
			}
		},
		onSortingChange: (updater) => {
			if (typeof updater === "function") {
				sorting = updater(sorting);
			} else {
				sorting = updater;
			}
		},
		onColumnFiltersChange: (updater) => {
			if (typeof updater === "function") {
				columnFilters = updater(columnFilters);
			} else {
				columnFilters = updater;
			}
		},
		onColumnVisibilityChange: (updater) => {
			if (typeof updater === "function") {
				columnVisibility = updater(columnVisibility);
			} else {
				columnVisibility = updater;
			}
		},
		onRowSelectionChange: (updater) => {
			if (typeof updater === "function") {
				rowSelection = updater(rowSelection);
			} else {
				rowSelection = updater;
			}
		},
	}); */
</script>

<div class="results-container grid">
    <div>
        <h1 class="text-green-800 text-2xl font-extrabold mb-1">Search Results for '{data.city?.name}'</h1>
        <Separator class="mb-1" />
        <!-- <span class="text-gray-500">Found <span class="text-gray-900 font-light">{data.count}</span> cleaners servicing this city</span> -->
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
    <!-- <div class="grid gap-2">
        <h2 class="text-xl font-semibold">Featured Cleaners</h2>
        {#each data.featured as d}
            <SearchResult data={d} />
        {/each}
    </div> -->
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
            <h1 class="font-bold pb-4 text-5xl">Uh-oh...</h1>
            <p class="">We did not find anything in {data.city?.name} at this time.</p>
            <p class="">Please feel free to contact us and refer a cleaner you know!</p>
        </div>
        <div class="flex flex-row gap-4 items-center mt-8">
            <!-- <a href="/blog" class="px-4 py-2 border-1 border-green-700 rounded-sm text-green-700 text-sm hover:bg-green-700 hover:text-white duration-[100ms] ease-in-out">Read our blog</a> -->
            <!-- <a href="/advertise" class="px-4 py-2 border-1 border-green-700 rounded-sm text-green-700 text-sm hover:bg-green-700 hover:text-white duration-[100ms] ease-in-out">Refer a cleaner</a> -->
            <!-- <a href="/advertise" class="px-4 py-2 border-1 border-green-700 rounded-sm text-green-700 text-sm hover:bg-green-700 hover:text-white duration-[100ms] ease-in-out">Advertise with us</a> -->
            <!-- <a href="/review" class="px-4 py-2 border-1 border-green-700 rounded-sm text-green-700 text-sm hover:bg-green-700 hover:text-white duration-[100ms] ease-in-out">Write a review</a> -->
            <a href="/contact" class="px-4 py-2 border-1 border-green-700 rounded-sm text-green-700 text-sm hover:bg-green-700 hover:text-white duration-[100ms] ease-in-out">Contact Us</a>
        </div>
    {/if}
</div>