<script>
    import Button from "../ui/button/button.svelte";
    import Separator from "../ui/separator/separator.svelte";

    import {
        ChevronLeft,
        ChevronsLeft,
        ChevronRight,
        ChevronsRight
    } from "@lucide/svelte";

    let { data } = $props();
    console.log('paginator', {
        slug: data.slug,
        page: data.page,
        sort: data.sort,
        order: data.order,
        types: data.types,
        count: data.count,
        firstIndex: data.firstIndex,
        lastIndex: data.lastIndex,
        hasPrevious: data.hasPrevious,
        hasNext: data.hasNext
    });

    let selectedSort = $state(`${data.sort || ''}|${data.order}`);
    let selectedTypes = $state(data?.types?.length > 0 ? data.types : []);

    const gotoPage = (page) => {
        let sortParts = selectedSort.split('|');
        let url = `/search/${data.slug}?page=${page}&sort=${sortParts[0]}`;

        if (sortParts.length > 1) {
            url = `${url}&order=${sortParts[1]}`
        }

        if (selectedTypes.length > 0) {
            url = `${url}&types=${selectedTypes.filter(t => !!t === true).join(',')}`
        }
        console.log('paginator new url', url);
        window.location = url;
    };
</script>

<div class="flex items-center justify-between py-1">
    <div>
        <h2 class="text-xs md:text-sm font-light">{data.firstIndex} to {data.lastIndex} of {data.count} cleaners</h2>
    </div>
    <div class="flex flex-1 items-center justify-end gap-2">
        <div class="flex w-full items-center gap-8 lg:w-fit">
            <div class="ml-auto flex items-center gap-1 md:gap-2 lg:ml-0">
                <Button
                    variant="outline"
                    class="h-6 w-6 md:h-8 md:w-8 p-0 lg:flex cursor-pointer"
                    onclick={() => gotoPage(1)}
                    disabled={!data.hasPrevious}
                >
                    <span class="sr-only">Go to first page</span>
                    <ChevronsLeft size={16} />
                </Button>
                <Button
                    variant="outline"
                    class="h-6 w-6 md:h-8 md:w-8 p-0 lg:flex cursor-pointer"
                    size="icon"
                    onclick={() => gotoPage(data.page - 1)}
                    disabled={!data.hasPrevious}
                >
                    <span class="sr-only">Go to previous page</span>
                    <ChevronLeft size={16} />
                </Button>
                <Button
                    variant="outline"
                    class="h-6 w-6 md:h-8 md:w-8 p-0 lg:flex cursor-pointer"
                    size="icon"
                    onclick={() => gotoPage(parseInt(data.page) + 1)}
                    disabled={!data.hasNext}
                >
                    <span class="sr-only">Go to next page</span>
                    <ChevronRight />
                </Button>
                <Button
                    variant="outline"
                    class="h-6 w-6 md:h-8 md:w-8 p-0 lg:flex cursor-pointer"
                    size="icon"
                    onclick={() => gotoPage(Math.ceil(data.count / 20))}
                    disabled={!data.hasNext}
                >
                    <span class="sr-only">Go to last page</span>
                    <ChevronsRight />
                </Button>
            </div>
        </div>
    </div>
</div>
