<script>
    import * as Dialog from '$lib/components/ui/dialog/index';
    import Button from '$lib/components/ui/button/button.svelte';
    import Separator from "$lib/components/ui/separator/separator.svelte";
    import Textarea from '$lib/components/ui/textarea/textarea.svelte';

    import Mail from "@lucide/svelte/icons/mail";
    import Phone from "@lucide/svelte/icons/phone";
    import Star from "@lucide/svelte/icons/star";

    let { data } = $props();
    let featuredStyles = data.is_featured === true ?
        'bg-linear-to-b from-white to-green-100/20 shadow-sm hover:shadow-md' :
        'border-b-gray-200 border-transparent hover:bg-white hover:border-1 hover:shadow-sm duration-[150ms] ease-in-out';
</script>

<!-- <a href="{data.website}?refer=findprocleaners" target="_blank" class="cursor-pointer border-b-2 border-transparent hover:border-b-gray-100"> -->

<!-- <Dialog.Root>
    <Dialog.Trigger> -->
<div class="w-full grid grid-cols-[1fr_250px] gap-4 border-1 border-b-1 rounded-md py-2 {featuredStyles}">
    <div class="details pb-2 px-4">
        <div class="flex flex-row items-center justify-between">
            <!-- <div class="flex flex-row items-end gap-4"> -->
            <a href="{data.website}?refer=findprocleaners" target="_blank" class="cursor-pointer border-b-2 border-transparent hover:border-b-gray-100">
                <h1 class="text-xl text-green-700 font-semibold">{data.name}</h1>
            </a>
                <!-- <a href="{data.website}?refer=findprocleaners" target="_blank" class="cursor-pointer border-b-2 border-transparent hover:border-b-gray-100">
                    <h1 class="text-sm text-gray-500 font-semibold">{data.name}</h1>
                </a> -->
            <!-- </div> -->
            <div class="flex flex-row items-center gap-1">
                <span class="font-extrabold text-xl text-green-800">{(data.review_ave || 0).toFixed(1)}</span>
                <Star class="fill-yellow-300" />
                <span class="text-sm">of {data.reviews_count || 0} reviews</span>
            </div>
        </div>
        <h2 class="text-gray-400 text-sm text-left">{data.city}</h2>
        <div class="mt-3 grid gap-1">
            <div class="grid grid-cols-[32px_1fr] items-center text-left">
                <Phone size={20} />
                {#if data.phone_1} <span class="text-sm">0{data.phone_1}</span>
                {:else} <span class="text-sm italic text-gray-400 font-light">No phone information</span>
                {/if}
            </div>
            <div class="grid grid-cols-[32px_1fr] items-center text-left">
                <Mail size={20} />
                {#if data.email_1} <span class="text-sm">{data.email_1}</span>
                {:else} <span class="text-sm italic text-gray-400 font-light">No email information</span>
                {/if}
            </div>
        </div>
        <div class="mt-4 flex flex-col gap-1 items-start">
            {#if data.comment}
                <span class="font-semibold text-sm text-left text-gray-600">Customer review:</span>
                <p class="text-sm text-gray-500 italic text-left">{data.comment}</p>
            {:else}
                <p class="text-sm text-gray-500 italic text-left mb-2">Be the first one to review this cleaner!</p>
                <Dialog.Root>
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
                </Dialog.Root>
            {/if}
        </div>
    </div>
    <div class="img py-2 pr-4">
        {#if data.image_path}
            <img src="/images/listings/{data.image_path}" class="w-full h-[180px] max-h-[200px] overflow-hidden border object-none" alt={data.name} />
            <!-- <div class="h-[200px] max-h-[200px] overflow-hidden border bg-[url(/images/listings/{data.image_path})]">{data.image_path}</div> -->
        {:else}
            <div class="h-[200px] border bg-gray-200"></div>
        {/if}
    </div>
</div>
    <!-- </Dialog.Trigger>

    <Dialog.Content class="bg-white rounded-lg min-w-[800px]" align="center">
        <h1 class="text-xl text-green-700 text-left font-bold">{data.name}</h1>
    </Dialog.Content>

</Dialog.Root> -->


<!-- </a> -->