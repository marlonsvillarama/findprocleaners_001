<script>
    import * as Dialog from '$lib/components/ui/dialog/index';
    import * as Sheet from '$lib/components/ui/sheet/index';
    import { buttonVariants } from '$lib/components/ui/button';
    import { MediaQuery } from 'svelte/reactivity';
    // import ContactForm from "./contact-form.svelte";

    import {
        ChevronRight,
        Menu
    } from '@lucide/svelte';

    const isMedium = new MediaQuery("(min-width: 768px)");
    let links = [
        {
            text: 'Home',
            url: '/'
        },
        {
            text: 'Find Cleaners by Region',
            url: '/search-professional-cleaners-by-region'
        },
        // {
        //     text: 'Search by Category',
        //     url: '/search-professional-cleaners-by-category'
        // },
        {
            text: 'Contact Us',
            url: '/contact'
        }
    ];

    let { data } = $props();
</script>

<div class="flex items-center justify-between my-2 md:my-4 mx-4 md:mx-auto md:w-[85%] md:max-w-6xl bg-white">
    <a href="/" title="FindProCleaners.nz - Find the best cleaners near you" target="_self">
        <div class="flex items-center gap-1 md:gap-2">
            <img src="/images/icons/find_pro_cleaners.svg" alt="Find Pro Cleaners" class="w-[20px] md:w-[36px] h-auto">
            <span class="header-logo font-semibold text-2xl md:text-3xl text-main">Find Pro Cleaners</span>
            <!-- <div class="flex items-end">
                <span class="font-medium text-lg md:text-xl text-green-600/70">Find</span>
                <span class="font-medium text-lg md:text-xl text-gray-700">Pro</span>
                <span class="font-medium text-lg md:text-xl text-green-600/70">Cleaners</span>
                <span class="font-medium text-lg md:text-xl text-gray-400">.nz</span>
            </div> -->
        </div>
    </a>

    {#if isMedium.current}
        <nav class="flex items-center gap-8">
            {#each links as link}
                <a href={link.url} title={link.text} class="text-sm font-normal text-green-700 pb-[2px] border-b-2 border-transparent
                    hover:text-green-900 hover:border-green-900">{link.text}</a>
            {/each}
        </nav>
    {:else}
        <Sheet.Root>
            <Sheet.Trigger class={buttonVariants({ variant:"ghost", size: "icon" })}>
                <Menu size={20} class="stroke-green-700" />
            </Sheet.Trigger>
            <Sheet.Content side="right">
                <Sheet.Header class="border-b-1 border-gray-200">
                    <Sheet.Title class="title text-2xl">Find Pro Cleaners</Sheet.Title>
                </Sheet.Header>
                <div class="grid gap-3 px-4 pb-4 max-h-[500px] overflow-scroll">
                    {#each links as link}
                        <div class="grid gap-2 items-center">
                            <a href={link.url} title={link.text} target="_self"
                                class="pl-5 text-md font-medium text-green-700 pb-[2px] border-b-2 border-transparent hover:text-green-900 hover:border-green-900">
                                {link.text}
                            </a>
                            {#if link.url.indexOf('region') > 0}
                                <div class="grid gap-2">
                                    {#each data as region}
                                        <a href="/professional-cleaners-in-{region.slug}" title={region.name} target="_self"
                                            class="pl-10 text-md font-light text-green-700 pb-[2px] border-b-2 border-transparent hover:text-green-900 hover:border-green-900">
                                            - {region.name}
                                        </a>
                                    {/each}
                                </div>
                            {/if}
                        </div>
                    {/each}
                </div>
            </Sheet.Content>
        </Sheet.Root>
    {/if}
</div>

<style>
    .header-logo,
    .title {
        font-family: "Gabarito", sans-serif;
    }
</style>