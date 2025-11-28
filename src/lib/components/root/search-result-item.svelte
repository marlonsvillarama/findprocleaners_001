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

<a href={data.website} target="_blank">
    <div class="border-1 border-gray-200 border-l-3 border-l-green-700/60 hover:border-gray-200 hover:border-l-green-700 hover:shadow-sm rounded-sm px-5 py-3">
        <div class="grid gap-1 md:flex items-center justify-between">
            <h3 class="text-xl font-semibold">{data.name}</h3>
            <StarRating rating={data.rating_ave} count={data.review_count} />
        </div>
        <Separator />

        <div class="mt-1 mb-5 flex gap-x-2 gap-y-2 border-0 border-green-500">
            {#each data.services as service}
            <span class="text-sm text-gray-500 px-2 py-1 bg-gray-50 rounded-sm border">
                {service.service_type.name}
            </span>
            {/each}
        </div>

        <div class="mb-2 flex items-center gap-2">
            <House size={16} />
            <span class="font-semibold">
                {data.address_1}{#if data.address_2}, {data.address_2}{/if}{#if data.city}, {data.city}{/if}
                {#if data.zip}{data.zip}{/if}
            </span>
        </div>

        <div class="mb-5 grid gap-2 lg:gap-12 lg:flex lg:items-center">
            <div class="flex items-center gap-2 min-w-[200px]">
                <Phone size={16} />
                <span class="font-semibold">{data.phone_1}</span>
            </div>
            
            <div class="flex items-center gap-2 min-w-[200px]">
                <Mail size={16} />
                <span class="">
                    {data.email_1 || '-'}
                </span>
            </div>

            <div class="flex items-center gap-2 min-w-[200px]">
                <Globe size={16} />
                <span class="text-blue-600 underline">{data.website || '-'}</span>
            </div>
        </div>

        {#if data.reviews.length > 0}
            <div class="flex flex-col gap-1 items-start mt-4 mb-4">
                <span class="font-normal text-left text-gray-600 pb-1 border-b-1 border-gray-600">
                    Customer review from {data.reviews[0].author_title}
                </span>
                <p class="text-sm text-gray-800 italic text-left font-light leading-[1.25rem] tracking-wider px-2 pt-1">
                    "{data.reviews[0].review_text}"
                </p>
            </div>
        {/if}
    </div>
</a>
