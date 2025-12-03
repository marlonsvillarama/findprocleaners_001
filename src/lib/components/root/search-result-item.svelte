<script>
    import Separator from "../ui/separator/separator.svelte";
    import StarRating from "./star-rating.svelte";

    import {
        Globe,
        House,
        Mail,
        Phone
    } from "@lucide/svelte";

    let { item } = $props();
    let { city, data } = item;
    // console.log('result item', item);
</script>

<div class="grid gap-3 border-1 border-gray-200 rounded-sm px-5 py-3 border-l-3 border-l-green-700/60 hover:border-gray-200 hover:border-l-green-700 hover:shadow-sm">
    <div class="grid gap-1 md:flex items-center justify-between">
        <h3 class="text-md font-semibold">{data.name}</h3>
        <StarRating rating={data.rating_ave} count={data.review_count} />
    </div>
    <Separator />

    <div class="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] justify-between gap-x-6 gap-y-2 border-0 border-green-500">
    <!-- <div class="mt-1 mb-5 sm:flex gap-x-2 gap-y-2 border-0 border-green-500"> -->
        {#each data.services as service}
        <!-- <div class="text-sm text-gray-500 px-2 py-1 bg-gray-50 rounded-sm border">
            {service.service_type.name}
        </div> -->
        <span class="w-full text-sm sm:text-xs pl-2 py-1 bg-gray-50 border-l-2 border-green-700">
            {service.service_type.name}
        </span>
        {/each}
    </div>

    <div class="grid gap-2">
        <div class="flex items-center gap-2 text-sm">
            <House size={16} />
            <span class="font-light">
                {data.address_1}{#if data.address_2}, {data.address_2}{/if}{#if data.city}, {data.city}{/if}
                {#if data.zip}{data.zip}{/if}
            </span>
        </div>

        <div class="grid gap-2 lg:gap-12 lg:flex lg:items-center text-sm">
            <div class="flex items-center gap-2 min-w-[200px]">
                <Phone size={16} />
                <span class="font-medium">{data.phone_1}</span>
            </div>
            
            <div class="flex items-center gap-2 min-w-[200px]">
                <Mail size={16} />
                <span class="font-light">
                    {data.email_1 || '-'}
                </span>
            </div>

            <div class="flex items-center gap-2 min-w-[200px]">
                <Globe size={16} />
                {#if data.website}
                    <a href={data.website} target="_blank" class="text-blue-600 underline">{data.website}</a>
                {:else}
                    <span>-</span>
                {/if}
            </div>
        </div>
    </div>

    {#if data.reviews.length > 0}
        <div class="flex flex-col gap-1 items-start mt-2 mb-4">
            <p class="text-sm text-gray-800 text-left font-normal leading-[1.25rem] tracking-[0.25px] pt-1">
                "{data.reviews[0].review_text}"
            </p>
            <div class="font-light flex justify-end italic text-gray-600 pb-1 border-b-0 border-gray-600">
                - {data.reviews[0].author_title}
            </div>
        </div>
    {/if}
</div>
<!-- </a> -->
