<script>
    import * as Dialog from '$lib/components/ui/dialog/index';
    import Separator from "../ui/separator/separator.svelte";

    import Mail from "@lucide/svelte/icons/mail";
    import Phone from "@lucide/svelte/icons/phone";
    import Star from "@lucide/svelte/icons/star";

    let { data } = $props();
</script>

<a href="{data.website}?refer=findprocleaners" target="_blank" class="cursor-pointer border-b-2 border-transparent hover:border-b-gray-100">

<!-- <Dialog.Root>
    <Dialog.Trigger> -->
<div class="cursor-pointer w-full grid grid-cols-[1fr_250px] gap-4 border-1 border-transparent border-b-1 border-b-gray-200
    hover:bg-white hover:rounded-sm hover:border-1 hover:shadow-sm duration-[150ms] ease-in-out">
    <div class="details py-2 px-4">
        <div class="flex flex-row items-center justify-between">
            <!-- <div class="flex flex-row items-end gap-4"> -->
            <!-- <a href="{data.website}?refer=findprocleaners" target="_blank" class="cursor-pointer border-b-2 border-transparent hover:border-b-gray-100"> -->
                <h1 class="text-xl text-green-700 font-semibold">{data.name}</h1>
            <!-- </a> -->
                <!-- <a href="{data.website}?refer=findprocleaners" target="_blank" class="cursor-pointer border-b-2 border-transparent hover:border-b-gray-100">
                    <h1 class="text-sm text-gray-500 font-semibold">{data.name}</h1>
                </a> -->
            <!-- </div> -->
            <div class="flex flex-row items-center gap-1">
                <span class="font-extrabold text-xl text-green-800">{data.rating.toFixed(1)}</span>
                <Star class="fill-yellow-300" />
                <span class="text-sm">of {data.reviews} reviews</span>
            </div>
        </div>
        <h2 class="text-gray-400 text-sm text-left">{data.city}</h2>
        <div class="mt-3 grid gap-1">
            <div class="grid grid-cols-[32px_1fr] items-center text-left">
                <Phone size={20} /> <span class="text-sm">{data.phone}</span>
            </div>
            <div class="grid grid-cols-[32px_1fr] items-center text-left">
                <Mail size={20} /> <span class="text-sm">{data.email}</span>
            </div>
        </div>
        <div class="mt-4 grid gap-1">
            <span class="font-semibold text-sm text-left text-gray-600">Customer review:</span>
            <p class="text-sm text-gray-500 italic text-left">{data.comment}</p>
        </div>
    </div>
    <div class="img py-2 pr-2">
        <div class="h-[200px] border">img (if any)</div>
    </div>
</div>
    <!-- </Dialog.Trigger>

    <Dialog.Content class="bg-white rounded-lg min-w-[800px]" align="center">
        <h1 class="text-xl text-green-700 text-left font-bold">{data.name}</h1>
    </Dialog.Content>

</Dialog.Root> -->


</a>