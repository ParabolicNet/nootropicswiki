<script>
    import {search} from "../search.js";
    import {compounds} from "../compounds/data.js";

    export let height = 700;

    let sorted_compounds = Object.keys(compounds).sort();

    let search_query = "";
    let results = [];

    const update_results = () => {
        results = search(search_query);
        results = results;
    }
</script>

<div style="width:292.4px;">
    <form on:submit|preventDefault={() => {if(results.length == 1) { window.location = "/details/"+results[0] }}}>
      <input style="width:252px;" type="text" id="search_query" bind:value={search_query} on:keyup={() => update_results()} placeholder="Search for nootropics ({Object.keys(compounds).length})"/>
    </form>
    <div class="search-results" style="max-height: {height}px">
    {#if search_query == "" || results.length == sorted_compounds.length}
      {#each sorted_compounds as codename}
      <a title="More details about {compounds[codename].name}" href="details/{codename}"><div class="result-link">{compounds[codename].name}</div></a>
      {/each}
    {:else}
      {#each results as codename, num}
          <a title="More details about {compounds[codename].name}" href="details/{codename}"><div class="result-link">{compounds[codename].name} [{compounds[codename].moa}]</div></a>
      {/each}
    {/if}
    </div>
    {#if results.length == 0 && search_query.length != 0} ... {/if}
</div>