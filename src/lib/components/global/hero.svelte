<script>
    import * as Select from '$lib/components/ui/select/index';
    import Button from '../ui/button/button.svelte';
    import Separator from '../ui/separator/separator.svelte';

    const cities = [
        'Auckland',
        'Christchurch',
        'Dunedin',
        'Invercargill',
        'Marlborough',
        'Nelson',
        'Palmerston North',
        'Queenstown',
        'Te Anau',
        'Wellington'
    ];
    let value = $state('');
    const triggerContent = $derived(
        cities.find(f => f === value) ?? 'Select my city'
    );
</script>

<!-- Include this script tag or install `@tailwindplus/elements` via npm: -->
<!-- <script src="https://cdn.jsdelivr.net/npm/@tailwindplus/elements@1" type="module"></script> -->
<div class="bg-gray-900">
  <header class="absolute inset-x-0 top-0 z-50">
    <nav aria-label="Global" class="flex items-center justify-between p-6 pt-2 lg:px-8">
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 py-3">
          <!-- <span class="sr-only">Your Company</span> -->
          <!-- <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="" class="h-8 w-auto" /> -->
           <h2 class="font-regular tracking-wide text-2xl text-green-500 font-semibold py-2 px-4 bg-white rounded-lg">FindProCleaners</h2>
        </a>
      </div>
      <div class="flex lg:hidden">
        <button type="button" command="show-modal" commandfor="mobile-menu" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200">
          <span class="sr-only">Open main menu</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6">
            <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <a href="#" class="text-md font-semibold text-white">Blog</a>
        <a href="#" class="text-md font-semibold text-white">Write a Review</a>
        <a href="#" class="text-md font-semibold text-white">Advertise</a>
        <a href="#" class="text-md font-semibold text-white">Contact Us</a>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#" class="bg-white px-5 py-3 rounded-lg text-md font-semibold text-green-500">Log in <span aria-hidden="true">&rarr;</span></a>
      </div>
    </nav>
    <el-dialog>
      <dialog id="mobile-menu" class="backdrop:bg-transparent lg:hidden">
        <div tabindex="0" class="fixed inset-0 focus:outline-none">
          <el-dialog-panel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
            <div class="flex items-center justify-between">
              <a href="#" class="-m-1.5 p-1.5">
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
                  <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5">Blog</a>
                  <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5">Write a Review</a>
                  <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5">Advertise</a>
                  <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5">Company</a>
                </div>
                <div class="py-6">
                  <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-white/5">Log in</a>
                </div>
              </div>
            </div>
          </el-dialog-panel>
        </div>
      </dialog>
    </el-dialog>
  </header>

  <div class="hero-area relative isolate px-6 pt-14 lg:px-8">
    <!-- <div aria-hidden="true" class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
      <div style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" class="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"></div>
    </div> -->
    <div class="mx-auto max-w-2xl py-20 sm:py-18 lg:py-18">
      <div class="text-center">
        <h1 class="text-3xl text-white font-semibold tracking-[.25px] text-balance sm:py-4 sm:text-[2.5rem]">Find the best cleaners near you</h1>
        <div class="text-center rounded-lg sm:justify-center sm:flex sm:flex-row gap-2 items-center bg-white py-8">
            <h1 class="text-xl font-light tracking-tight text-balance sm:py-2 sm:text-xl">I live in</h1>
            <Select.Root type="single" bind:value>
                <Select.Trigger class="border-green-500 border-b-[1px] border-t-[0px] border-l-[0px] border-r-[0px] shadow-none bg-white w-[250px] rounded-none p-5 font-normal text-lg">
                    {triggerContent}
                </Select.Trigger>
                <Select.Content>
                    {#each cities as city}
                        <Select.Item value={city}>{city}</Select.Item>
                    {/each}
                </Select.Content>
            </Select.Root>
            <Button class="bg-green-700 p-5 rounded-sm hover:bg-green-800 font-normal cursor-pointer">Search</Button>
        </div>
        <!-- <p class="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.</p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <a href="#" class="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Get started</a>
          <a href="#" class="text-sm/6 font-semibold text-white">Learn more <span aria-hidden="true">→</span></a>
        </div> -->
      </div>
    </div>
    <!-- <div aria-hidden="true" class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
      <div style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" class="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"></div>
    </div> -->
  </div>
</div>

<style>
    .hero-area {
        background-image: linear-gradient(to bottom, rgba(0, 255, 0, 0.15) 0%, rgba(0, 255, 0, 0.15) 100%),
            url('/images/hero-01.jpg');
        /* background-image: url('/images/hero-01.jpg'); */
        background-size: cover;
    }
</style>