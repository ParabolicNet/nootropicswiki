import {compounds} from "./compounds/data.js";

export const search = (query) => {
    // Wipe previous results
    let results = [];
    // Debug
    console.log(query);
    let query_to_lower = query.toLowerCase().trim();

    // First query algo (exact spelling)
    for(let i=0; i < Object.keys(compounds).length; i++) {
      let compound = compounds[Object.keys(compounds)[i]];
      let compound_to_lower = compound.name.toLowerCase();
      
      let compound_no_dash = compound_to_lower.replace(/-/g, '');
      let compound_dash_to_space = compound_to_lower.replace(/-/g, ' ');
      let compound_space_to_dash = compound_to_lower.replace(' ', '-');
      let compound_space_to_none = compound_to_lower.replace(' ', '');

      if (
        query_to_lower == compound_to_lower ||
        query_to_lower == compound_no_dash ||
        query_to_lower == compound_space_to_dash ||
        query_to_lower == compound_space_to_none ||
        query_to_lower == compound_dash_to_space ||
        query == compound.iupac ||
        query_to_lower == compound.smiles.toLowerCase() ||
        query == compound.pubchem_id ||
        query.startsWith(`https://pubchem.ncbi.nlm.nih.gov/compound/${compound.pubchem_id}`)
      ) {
        results.push(Object.keys(compounds)[i]);

      } else {
        let temp_other_names = [];
        for(let x=0; x < compound.other_names.length; x++) {
          temp_other_names.push(compound.other_names[x].toLowerCase())
        }

        if (compound.other_names.length != 0 && temp_other_names.includes(query.toLowerCase())) {
          results.push(Object.keys(compounds)[i])
        }
      }
    }

    // Second search algo (appended to bottom)
    for(let i=0; i < Object.keys(compounds).length; i++) {
        let noot_to_lower = compounds[Object.keys(compounds)[i]].name.toLowerCase();
  
        if (
          !results.includes(Object.keys(compounds)[i]) &&
          //search_to_lower.length > 2 &&
          //(compounds[Object.keys(compounds)[i]].name.length-query.length) < 3 &&
          (compounds[Object.keys(compounds)[i]].name.length-search.length) > -3 &&
          (noot_to_lower.startsWith(query_to_lower) || noot_to_lower.endsWith(query_to_lower))
        ) {
          results.push(Object.keys(compounds)[i])
        }
      }

    return results;
}