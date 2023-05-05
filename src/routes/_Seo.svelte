<script>
    import SvelteSeo from "svelte-seo";

    export let title = "The Nootropics Wiki";
    export let description = "A Wiki to get all relevant Nootropics and Compound research into one place.";
  </script>
  
  <SvelteSeo
    title={title}
    description={description}
    keywords="nootropics, biohacking, neuroscience, pharmacology, wikipedia, wiki"
    openGraph={{
      title: {title},
      description: {description},
      image: "/favicon.png",
      url: "https://beta.nootropicswiki.org",
      type: "website",
      site_name: "The Nootropics Wiki",
      locale: "en_US"
    }}
    twitter={{
      card: "summary",
      title: {title},
      description: {description},
      image: "/favicon.png",
    }}
  />