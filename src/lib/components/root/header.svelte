<script>
    import * as Dialog from '$lib/components/ui/dialog/index';
    // import ContactForm from "./contact-form.svelte";

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
</script>

<div class="flex items-center justify-between my-2 md:my-4 mx-2 md:mx-auto md:w-[85%] md:max-w-6xl bg-white">
    <a href="/" title="FindProCleaners.nz - Find the best cleaners near you" target="_self">
        <div class="flex items-center gap-1 md:gap-2">
            <img src="/images/icons/find_pro_cleaners.svg" alt="Find Pro Cleaners" class="w-[20px] md:w-[36px] h-auto">
            <span class="header-logo font-semibold text-md md:text-2xl text-main">Find Pro Cleaners</span>
            <!-- <div class="flex items-end">
                <span class="font-medium text-lg md:text-xl text-green-600/70">Find</span>
                <span class="font-medium text-lg md:text-xl text-gray-700">Pro</span>
                <span class="font-medium text-lg md:text-xl text-green-600/70">Cleaners</span>
                <span class="font-medium text-lg md:text-xl text-gray-400">.nz</span>
            </div> -->
        </div>
    </a>
    <div class="hidden md:flex items-center gap-8">
        {#each links as link}
            <a href={link.url} title={link.text} class="text-sm font-normal text-green-700 pb-[2px] border-b-2 border-transparent
                hover:text-green-900 hover:border-green-900">{link.text}</a>
        {/each}

        <!-- <ContactForm /> -->
    </div>
</div>

<style>
    .header-logo {
        font-family: "Noto Serif", serif;
    }
</style>