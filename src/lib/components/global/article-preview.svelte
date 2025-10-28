<script>
    let {
        date = '20251028',
        text = 'This is a preview of a sample article from the blog. As time goes by, more articles will be written to provide valuable information for people wanting to clean their homes better.',
        title = 'Article'
    } = $props();

    let dt = $state(date);
    let articleDate = $derived.by((dt) => {
        let newDate = new Date(date.slice(0, 4), parseInt(date.slice(4,6)) - 1, date.slice(6));
        console.log(newDate);
        return Intl.DateTimeFormat('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }).format(newDate);
    });
</script>

<div class="grid">
    <h1 class="font-semibold text-lg text-green-700">{title}</h1>
    <span class="font-light text-sm">{articleDate}</span>
    <p class="mt-2">{text}</p>
</div>
