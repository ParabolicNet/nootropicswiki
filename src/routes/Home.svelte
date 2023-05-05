<script>
    import {compounds} from "../compounds/data.js";
    import Seo from "./_Seo.svelte";
    import SearchBox from "./_SearchBox.svelte";
</script>

<Seo title="The Nootropics Wiki" />

<main>
    <div class="gentle-flex">
    <div style="max-width:1400px;padding-left:15px;padding-right:15px;">
        <h2>The Nootropics Wiki</h2>
  
        <p style="max-width:300px;">
        A crude first version of the Nootropics Wiki to get all relevant information into one place. <a href="https://github.com/ParabolicNet/nootropicswiki">Contribute</a><!-- Sponsored by <a href="https://neuroregen.org" target="_blank">neuroregen</a>.-->
        </p>

        <SearchBox />

        <br>
        <a href="/article/learn-pharma">Article Example - Learn pharma</a>
    </div>
    </div>
</main>