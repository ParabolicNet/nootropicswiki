<script>
    import {compounds} from "../compounds/data.js";
    import SearchBox from "./_SearchBox.svelte";
</script>

<main>
    <div class="gentle-flex">
    <div style="max-width:1400px;padding-left:15px;padding-right:15px;">
        <div class="gentle-flex">
            <img src="/images/nw_logo3.png" style="height:115px;" alt="logo">
        </div>
        <div style="">
        
        </div>
        <p style="max-width:300px;">
        An introductory edition of the Nootropics Wiki aimed at assembling relevant data in one place. <a href="https://github.com/ParabolicNet/nootropicswiki">Contribute</a><!-- Sponsored by <a href="https://neuroregen.org" target="_blank">neuroregen</a>.-->
        </p>

        <h3>Articles</h3>
        <ul>
            <li><a href="/article/learn-pharma">Article - Learning pharmacology</a></li>
            <li><a href="/article/dlpfc-modulation">Article - dlPFC Modulation</a></li>
        </ul>

        <h3>Search</h3>

        <SearchBox />

    </div>
    </div>
</main>