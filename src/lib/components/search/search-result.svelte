<script>
    import * as Dialog from '$lib/components/ui/dialog/index';
    import Badge from '../ui/badge/badge.svelte';
    import Button from '$lib/components/ui/button/button.svelte';
    // import Separator from "$lib/components/ui/separator/separator.svelte";
    import Textarea from '$lib/components/ui/textarea/textarea.svelte';

    import {
        Phone,
        SquareArrowUpRight,
        Star
    } from '@lucide/svelte';
    // import Mail from "@lucide/svelte/icons/mail";
    // import Phone from "@lucide/svelte/icons/phone";
    // import Star from "@lucide/svelte/icons/star";

    let { data } = $props();
    // console.log('search-result data', data);
    let featuredStyles = data.is_featured === true ?
        'bg-linear-to-b from-white to-green-100/20 shadow-sm hover:shadow-md' :
        'hover:rounded-md hover:bg-white hover:shadow-md duration-[150ms] ease-in-out';
</script>

<!-- <a href="{data.website}?refer=findprocleaners" target="_blank" class="cursor-pointer border-b-2 border-transparent hover:border-b-gray-100"> -->

<!-- <Dialog.Root>
    <Dialog.Trigger> -->
<!-- <div class="w-full grid grid-cols-[1fr_250px] gap-4 border-b-1 rounded-md py-2 px-6 py-4 {featuredStyles}"> -->
<div class="w-full grid gap-4 border-b-1 border-gray-300 md:px-4 pt-4 pb-5 {featuredStyles}">
    <div class="details grid gap-1">
        <a href="{data.website}?refer=findprocleaners" target="_blank"
            class="cursor-pointer border-b-2 border-transparent hover:border-b-gray-100">
            <h1 class="flex gap-2 items-center text-md text-green-700 font-semibold">
                <SquareArrowUpRight class="text-green-700" size={16} />
                {data.name}
            </h1>
        </a>
        <!-- <div class="flex items-center gap-2 w-full">
            {#each data.types.split(',') as dt}
                <div class="px-2 py-1 text-xs text-white bg-green-700 rounded-xl">{dt}</div>
            {/each}
        </div> -->
        <div class="grid gap-1 sm:flex items-center justify-between font-light">
            <!-- <div class="flex flex-row items-end gap-4"> -->
            <!-- <h2 class="text-gray-400 text-sm text-left">{data.city}</h2> -->
            <!-- <a href="{data.website}?refer=findprocleaners" target="_blank" class="cursor-pointer border-b-2 border-transparent hover:border-b-gray-100">
                <h1 class="text-sm text-gray-500 font-semibold">{data.name}</h1>
            </a> -->
            <!-- </div> -->
            <div class="flex flex-row items-center gap-1 pl-6">
                <span class="font-bold text-lg text-green-800">{(data.rating_ave || 0).toFixed(1)}</span>
                <Star class="fill-yellow-300" size={16} />
                <span class="text-xs"> out of {data.review_count || 0} reviews</span>
            </div>
            <div class="flex gap-2 items-center text-left pl-6">
                <Phone size={16} />
                {#if data.phone_1} <span class="text-sm">{data.phone_1}</span>
                {:else} <span class="text-sm italic text-gray-400 font-light">No phone information</span>
                {/if}
            </div>
        </div>
        <!-- <div class="mt-1 grid gap-1"> -->
            <!-- <div class="grid grid-cols-[32px_1fr] items-center text-left">
                <Phone size={20} />
                {#if data.phone_1} <span class="text-md">0{data.phone_1}</span>
                {:else} <span class="text-sm italic text-gray-400 font-light">No phone information</span>
                {/if}
            </div> -->
            <!-- <div class="grid grid-cols-[32px_1fr] items-center text-left">
                <Mail size={20} />
                {#if data.email_1} <span class="text-sm">{data.email_1}</span>
                {:else} <span class="text-sm italic text-gray-400 font-light">No email information</span>
                {/if}
            </div> -->
        <!-- </div> -->
        <div class="flex flex-col gap-1 items-start mt-4 pl-6">
            {#if data.fpc_reviews.length > 0}
                <span class="font-normal text-xs text-left text-gray-600 pb-1 border-b-1 border-green-600">Customer review from {data.fpc_reviews[0].author_title}</span>
                <p class="text-xs text-gray-800 text-left font-extralight leading-[1.25rem] tracking-wider px-2 pt-1">{data.fpc_reviews[0].review_text}</p>
            {:else}
                <!-- <p class="text-sm text-gray-500 italic text-left mb-2">Be the first one to review this cleaner!</p> -->
                <!-- <Dialog.Root>
                    <Dialog.Trigger>
                        <div class="bg-white cursor-pointer text-sm py-2 px-4 border-1 border shadow-sm rounded-md
                            hover:text-white hover:border-green-700 hover:bg-green-700 duration-[150ms] ease-in-out">
                            Write a review
                        </div>
                    </Dialog.Trigger>

                    <Dialog.Content class="absolute bg-white rounded-sm min-w-[800px] max-h-[550px] overflow-auto">
                        <h1 class="text-xl text-left font-normal text-gray-500">Write a review for <span class="text-green-700 font-bold">{data.name}</span></h1>
                        <div class="grid grid-cols-3 items-start px-4">
                        </div>
                    </Dialog.Content>
                </Dialog.Root> -->
            {/if}
        </div>
    </div>
    <!-- <div class="img w-full h-[180px] max-h-[200px] overflow-hidden object-none flex items-center bg-center">
        {#if data.image_url}
            <img src={data.image_url} class="w-full bg-white" alt={data.name} />
            -- <div class="h-[200px] max-h-[200px] overflow-hidden border bg-[url(/images/listings/{data.image_path})]">{data.image_path}</div> --
        {:else}
            <div class="h-[200px] border bg-gray-200"></div>
        {/if}
    </div> -->
</div>
    <!-- </Dialog.Trigger>

    <Dialog.Content class="bg-white rounded-lg min-w-[800px]" align="center">
        <h1 class="text-xl text-green-700 text-left font-bold">{data.name}</h1>
    </Dialog.Content>

</Dialog.Root> -->


<!-- </a> -->