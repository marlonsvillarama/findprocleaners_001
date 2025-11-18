<script>
    import ContactForm from "./contact-form.svelte";

    let links = [
        {
            text: 'Home',
            url: '/'
        },
        // {
        //     text: 'Listings',
        //     url: '/listings'
        // },
        // {
        //     text: 'Advertise',
        //     url: '/'
        // },
        // {
        //     text: 'Contact Us',
        //     url: '/contact'
        // },
    ];
</script>

<!-- <div class="bg-green-800 w-full py-12 text-white"> -->
<div class="bg-green-800 p-4 md:pt-10 pb-6 md:pb-12 text-white">
    <div class="flex flex-col my-2 md:my-4 mx-2 md:mx-auto md:w-[90%] md:max-w-7xl md:flex-row md:items-center justify-between gap-8">
    <!-- <div class="grid grid-cols-2 items-center justify-between mx-2 sm:mx-auto sm:w-[90%] sm:max-w-7xl"> -->
        <div class="grid gap-1">
            <h2 class="text-sm md:text-md">FindProCleaners.co.nz</h2>
            <h2 class="text-xs font-light md:text-sm">&copy; Copyright 2025</h2>
        </div>
        <div class="flex flex-col md:flex-row items-left md:items-center gap-2 md:gap-8 border-1 border-red-500">
            {#each links as link}
                <a href={link.url} title={link.text} class="text-xs md:text-sm font-light text-gray-200 pb-[2px] border-b-2 border-transparent
                    hover:text-white hover:border-white">{link.text}</a>
            {/each}

            <ContactForm isFooter={true} />
        </div>
    </div>
</div>