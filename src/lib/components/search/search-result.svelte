<script>
    import * as Dialog from '$lib/components/ui/dialog/index';
    import Badge from '../ui/badge/badge.svelte';
    import Button from '$lib/components/ui/button/button.svelte';
    import Textarea from '$lib/components/ui/textarea/textarea.svelte';

    import {
        Phone,
        SquareArrowUpRight,
        Star
    } from '@lucide/svelte';

    let { data } = $props();
    let featuredStyles = data.is_featured === true ?
        'bg-linear-to-b from-white to-green-100/20 shadow-sm hover:shadow-md' :
        'hover:rounded-md hover:bg-white hover:shadow-md duration-[150ms] ease-in-out';
</script>

<div class="w-full grid gap-4 border-b-1 border-gray-300 md:px-4 pt-4 pb-5 {featuredStyles}">
    <div class="details grid gap-1">
        <a href="{data.website}?refer=findprocleaners" target="_blank"
            class="cursor-pointer border-b-2 border-transparent hover:border-b-gray-100">
            <h1 class="flex gap-2 items-center text-md text-green-700 font-semibold">
                <SquareArrowUpRight class="text-green-700" size={16} />
                {data.name}
            </h1>
        </a>
        <div class="grid gap-1 sm:flex items-center justify-between font-light">
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
        <div class="flex flex-col gap-1 items-start mt-4 pl-6">
            {#if data.fpc_reviews.length > 0}
                <span class="font-normal text-xs text-left text-gray-600 pb-1 border-b-1 border-green-600">Customer review from {data.fpc_reviews[0].author_title}</span>
                <p class="text-xs text-gray-800 text-left font-extralight leading-[1.25rem] tracking-wider px-2 pt-1">{data.fpc_reviews[0].review_text}</p>
            {/if}
        </div>
    </div>
</div>
