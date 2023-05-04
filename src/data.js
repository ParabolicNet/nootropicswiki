import md_bromantane from "./compounds/md/bromantane.md";
import md_tak_653 from "./compounds/md/tak-653.md";

export const compounds = {
    "bromantane": {
        name: "Bromantane",
        iupac: "N-(4-bromophenyl)adamantan-2-amine",
        pubchem_id: "4660557",
        smiles: "C1C2CC3CC1CC(C2)C3NC4=CC=C(C=C4)Br",
        other_names: [
            "Bromantan",
            "Ladasten"
        ],
        moa: "TH Disinhibitor",
        class: [
            "Dopamine Upregulator",
            "Pro-Testerone"
        ],
        related: [],
        interactions: [],
        md: md_bromantane
    },
    "tak-653": {
        name: "TAK-653",
        iupac: "9-(4-cyclohexyloxyphenyl)-7-methyl-3,4-dihydropyrazino[2,1-c][1,2,4]thiadiazine 2,2-dioxide",
        pubchem_id: "56655833",
        smiles: "CC1=CN2CCS(=O)(=O)N=C2C(=N1)C3=CC=C(C=C3)OC4CCCCC4",
        other_names: [
            "9E3TOE5RIZ",
            "1358751-06-0",
            "UNII-9E3TOE5RIZ"
        ],
        moa: "AMPA PAM",
        class: [
            "Pro-Cognition",
            "Pro-AMPA"
        ],
        related: [],
        interactions: [],
        md: md_tak_653
    }
}