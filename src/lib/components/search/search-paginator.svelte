<script>
    import Button from "../ui/button/button.svelte";

    import {
        ChevronLeft,
        ChevronsLeft,
        ChevronRight,
        ChevronsRight
    } from "@lucide/svelte";

    let { data } = $props();
    console.log('paginator', {
        count: data.count,
        firstIndex: data.firstIndex,
        lastIndex: data.lastIndex,
        hasPrevious: data.hasPrevious,
        hasNext: data.hasNext
    });

    // const PAGE_COUNT = Math.ceil(data.count / 20);
    const gotoPage = (page) => {
        // let page = data.page + (inc === true ? 1 : -1);
        window.location = `/search/${data.slug}?page=${page}`;
    };
</script>

<div class="flex items-center justify-between py-1">
    <div>
        <h2 class="text-xl font-semibold">Results Found ({data.count})</h2>
    </div>
    <div class="flex flex-1 items-center justify-end gap-2">
        Results {data.firstIndex} to {data.lastIndex} of {data.count}
        <!-- {table.getFilteredSelectedRowModel().rows.length} of -->
        <!-- <span>Total Results:</span> <span class="font-semibold">{data.results.length}</span> -->
        <div class="flex w-full items-center gap-8 lg:w-fit">
            <!-- <div class="hidden items-center gap-2 lg:flex">
                <Label for="rows-per-page" class="text-sm font-medium">Rows per page</Label>
                <Select.Root
                    type="single"
                    bind:value={
                        () => `${table.getState().pagination.pageSize}`,
                        (v) => table.setPageSize(Number(v))
                    }
                >
                    <Select.Trigger size="sm" class="w-20" id="rows-per-page">
                        {table.getState().pagination.pageSize}
                    </Select.Trigger>
                    <Select.Content side="top">
                        {#each [10, 20, 50] as pageSize (pageSize)}
                            <Select.Item value={pageSize.toString()}>
                                {pageSize}
                            </Select.Item>
                        {/each}
                    </Select.Content>
                </Select.Root>
            </div> -->
            <div class="flex w-fit items-center justify-center text-sm font-medium">
                <!-- Page {table.getState().pagination.pageIndex + 1} of
                {table.getPageCount()} -->
            </div>
            <div class="ml-auto flex items-center gap-2 lg:ml-0">
                <Button
                    variant="outline"
                    class="h-8 w-8 p-0 lg:flex cursor-pointer"
                    onclick={() => gotoPage(1)}
                    disabled={!data.hasPrevious}
                >
                    <!-- onclick={() => table.setPageIndex(0)}
                    disabled={!table.getCanPreviousPage()} -->
                    <span class="sr-only">Go to first page</span>
                    <ChevronsLeft />
                </Button>
                <Button
                    variant="outline"
                    class="size-8"
                    size="icon"
                    onclick={() => gotoPage(data.page - 1)}
                    disabled={!data.hasPrevious}
                >
                    <!-- onclick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()} -->
                    <span class="sr-only">Go to previous page</span>
                    <ChevronLeft />
                </Button>
                <Button
                    variant="outline"
                    class="size-8"
                    size="icon"
                    onclick={() => gotoPage(parseInt(data.page) + 1)}
                    disabled={!data.hasNext}
                >
                    <!-- onclick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()} -->
                    <span class="sr-only">Go to next page</span>
                    <ChevronRight />
                </Button>
                <Button
                    variant="outline"
                    class="hidden size-8 lg:flex cursor-pointer hover:shadow-sm"
                    size="icon"
                    onclick={() => gotoPage(Math.ceil(data.count / 20))}
                    disabled={!data.hasNext}
                >
                    <!-- onclick={() => table.setPageIndex(table.getPageCount() - 1)}
                    disabled={!table.getCanNextPage()} -->
                    <span class="sr-only">Go to last page</span>
                    <ChevronsRight />
                </Button>
            </div>
        </div>
    </div>
</div>
