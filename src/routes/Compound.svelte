<script>
    import {compounds} from "../data.js";
    import Markdown from "./_Markdown.svelte";

    export let compound_code;
    let compound = compounds[compound_code];
    console.log(compound)

</script>

<main>
    <div class="gentle-flex">
        <div class="content" style="width:100%;">
            <div class="compound-attributes">
                <a href="/">Back to Main Page</a><br><br>
                <h1 style="margin:0;">{compound.name}</h1>

                {#if compound.moa}
                <h2>Primary MOA</h2>
                <p>{compound.moa}</p>
                {/if}

                {#if compound.iupac}
                <h2>IUPAC <span style="font-size: 15px;"> {#if compound.pubchem_id} (<a target="_blank" href="https://pubchem.ncbi.nlm.nih.gov/compound/{compound.pubchem_id}">PubChem</a>){/if}</span></h2>
                <small>{compound.iupac}</small>
                {/if}

                <h2>Class</h2>
                <p>
                    <span>{#each compound.class as classs, i}{#if i != 0}, {/if}{classs}{/each}</span>
                </p>
            </div>
            <br><hr>
            <Markdown markdown={compound.md} />
        </div>
    </div>
</main>

<style>
    p {
        margin: 0px;
    }
</style>