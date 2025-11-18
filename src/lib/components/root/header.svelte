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

<div class="flex items-end justify-between my-2 md:my-4 mx-2 md:mx-auto md:w-[90%] md:max-w-7xl bg-white">
    <a href="/" title="FindProCleaners.nz - Find the best cleaners near you" target="_self">
        <div class="flex items-start gap-2">
            <img src="/images/icons/findprocleaners.svg" alt="Find Pro Cleaners" class="w-[24px] h-auto">
            <div class="flex items-end">
                <span class="font-medium text-lg md:text-xl text-green-600/70">Find</span>
                <span class="font-medium text-lg md:text-xl text-gray-700">Pro</span>
                <span class="font-medium text-lg md:text-xl text-green-600/70">Cleaners</span>
                <span class="font-medium text-lg md:text-xl text-gray-400">.nz</span>
            </div>
        </div>
    </a>
    <div class="hidden md:flex items-center gap-8">
        {#each links as link}
            <a href={link.url} title={link.text} class="text-sm font-normal text-green-700 pb-[2px] border-b-2 border-transparent
                hover:text-green-900 hover:border-green-900">{link.text}</a>
        {/each}

        <ContactForm />
    </div>
    <div class="flex md:hidden">
        <button type="button" command="show-modal" commandfor="mobile-menu" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200">
        <span class="sr-only">Open main menu</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6">
            <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        </button>
    </div>
    <!-- <button type="button" command="close" commandfor="mobile-menu" class="-m-2.5 rounded-md p-2.5 text-gray-200 sm:hidden">
        <span class="sr-only">Close menu</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6">
        <path d="M6 18 18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    </button> -->

    <!-- <el-dialog>
        <dialog id="mobile-menu" class="backdrop:bg-transparent lg:hidden">
            <div tabindex="0" class="fixed inset-0 focus:outline-none">
                <el-dialog-panel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
                    <div class="flex items-center justify-between">
                        <a href="/" class="-m-1.5 p-1.5">
                            <span class="sr-only">Your Company</span>
                            <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="" class="h-8 w-auto" />
                        </a>
                        <button type="button" command="close" commandfor="mobile-menu" class="-m-2.5 rounded-md p-2.5 text-gray-200">
                            <span class="sr-only">Close menu</span>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6">
                            <path d="M6 18 18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div class="mt-6 flow-root">
                        <div class="-my-6 divide-y divide-white/10">
                            <div class="space-y-2 py-6">
                                <a href="/" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5">Blog</a>
                                <a href="/" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5">Review</a>
                                <a href="/" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5">Advertise</a>
                                <a href="/" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5">About Us</a>
                            </div>
                            <div class="py-6">
                                <a href="/" class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-white/5">Log in</a>
                            </div>
                        </div>
                    </div>
                </el-dialog-panel>
            </div>
        </dialog>
    </el-dialog> -->
</div>