<script>
    import { page } from '$app/stores';

    let {
        title = 'Find Professional Cleaners Near You',
        description = 'Find the best professional cleaning service providers near you. Browse through our curated list of professional cleaners across New Zealand.',
            image = 'https://findprocleaners.co.nz/images/icons/findprocleaners.svg'
    } = $props();
</script>

<svelte:head>
    <title>{title} | Find Pro Cleaners</title>
    <meta name="description" content={description}>
    <link rel="canonical" href="https://findprocleaners.co.nz">
    <meta property="og_site_name" content="FindProCleaners.co.nz">
    <meta property="og:locale" content="en-NZ">
    <meta property="og:url" content="https://findprocleaners.co.nz{$page.url.pathname.toString()}">
    <meta property="og:type" content="website">
    <meta property="og:title" content={title}>
    <meta property="og:description" content={description}>
    <meta property="og:image" content={image}>

    <meta name="twitter:card" content="FindProCleaners.co.nz">
    <meta property="twitter:domain" content="findprocleaners.co.nz">
    <meta property="twitter:url" content="https://findprocleaners.co.nz{$page.url.pathname.toString()}">
    <meta name="twitter:title" content="{title}">
    <meta name="twitter:description" content={description}>
    <meta name="twitter:image" content={image}>

    {@html `  <script type="application/ld+json">{
    "@context": "https://schema.org",
    "@type": "Website",
    "name": "${title} | findprocleaners.co.nz",
    "url": "https//findprocleaners.co.nz${$page.url.pathname}",
    "logo": ${image}  }</script>`}
</svelte:head>