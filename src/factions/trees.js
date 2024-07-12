const heroes = [
    {
        name: "Alarielle the Everqueen",
        unit_size: 1,
        points: 680,
        regiment_options: "0-1 Forest Sentinel, Any trees",
        base_size: "160mm",
        type: "hero",
        image: "/factions/trees/alarielleTheEverqueen.jpg"
    },
    {
        name: "Arch-Revenant",
        unit_size: 1,
        points: 170,
        regiment_options: "Any Gossamid Archers, Any Kurnothi",
        base_size: "40mm",
        type: "hero",
        image: "/factions/trees/druantiTheArchRevenant.jpg"
    },
    {
        name: "Belthanos, First Thorn of Kurnoth",
        unit_size: 1,
        points: 330,
        regiment_options: "Any trees",
        base_size: "150 × 95mm",
        type: "hero",
        image: "/factions/trees/belthanosFirstThornOfKurnoth.jpg"
    },
    {
        name: "Branchwych",
        unit_size: 1,
        points: 120,
        regiment_options: "Any Infantry",
        base_size: "32mm",
        type: "hero",
        image: "/factions/trees/branchwych.jpg"
    },
    {
        name: "Drycha Hamadreth",
        unit_size: 1,
        points: 310,
        regiment_options: "Any trees",
        base_size: "105 × 70mm",
        type: "hero",
        image: "/factions/trees/drychaHamadreth.jpg"
    },
    {
        name: "Spirit of Durthu",
        unit_size: 1,
        points: 330,
        regiment_options: "0-1 Forest Sentinel, Any trees",
        base_size: "105 × 70mm",
        type: "hero",
        image: "/factions/trees/spiritOfDurthu.jpg"
    },
    {
        name: "The Lady of Vines",
        unit_size: 1,
        points: 280,
        regiment_options: "Any trees",
        base_size: "80mm",
        type: "hero",
        image: "/factions/trees/ladyOfVines.jpg"
    },
    {
        name: "Treelord",
        unit_size: 1,
        points: 260,
        regiment_options: "Any trees",
        notes: "This Hero can join an eligible regiment as a Forest Sentinel",
        base_size: "105 × 70mm",
        type: "hero",
        image: "/factions/trees/treesTreelord.jpg"
    },
    {
        name: "Treelord Ancient",
        unit_size: 1,
        points: 320,
        regiment_options: "0-1 Forest Sentinel, Any trees",
        base_size: "105 × 70mm",
        type: "hero",
        image: "/factions/trees/treesTreelordAncient.jpg"
    },
    {
        name: "Warsong Revenant",
        unit_size: 1,
        points: 210,
        regiment_options: "Any trees",
        base_size: "105 × 70mm",
        type: "hero",
        image: "/factions/trees/warsongRevenant.jpg"
    }
];

const units = [
    {
        name: "Dryads",
        unit_size: 10,
        points: 110,
        relevant_keywords: "Infantry",
        base_size: "32mm",
        type: "unit",
        image: "/factions/trees/treesDryads.jpg"
    },
    {
        name: "Gossamid Archers",
        unit_size: 5,
        points: 120,
        relevant_keywords: "Infantry",
        base_size: "32mm",
        type: "unit",
        image: "/factions/trees/gossamidArchers.jpg"
    },
    {
        name: "Kurnoth Hunters with Kurnoth Greatbows",
        unit_size: 3,
        points: 200,
        relevant_keywords: "Kurnothi, Infantry",
        base_size: "50mm",
        type: "unit",
        image: "/factions/trees/kurnothHunters.jpg"
    },
    {
        name: "Kurnoth Hunters with Kurnoth Greatswords",
        unit_size: 3,
        points: 220,
        relevant_keywords: "Kurnothi, Infantry",
        base_size: "50mm",
        type: "unit",
        image: "/factions/trees/kurnothHunters.jpg"
    },
    {
        name: "Kurnoth Hunters with Kurnoth Scythes",
        unit_size: 3,
        points: 200,
        relevant_keywords: "Kurnothi, Infantry",
        base_size: "50mm",
        type: "unit",
        image: "/factions/trees/kurnothHunters.jpg"
    },
    {
        name: "Revenant Seekers",
        unit_size: 3,
        points: 200,
        relevant_keywords: "Cavalry",
        base_size: "60mm",
        type: "unit",
        image: "/factions/trees/revenantSeekers.jpg"
    },
    {
        name: "Spite-Revenants",
        unit_size: 5,
        points: 110,
        relevant_keywords: "Infantry",
        base_size: "32mm",
        type: "unit",
        image: "/factions/trees/spiteRevenants.jpg"
    },
    {
        name: "Spiterider Lancers",
        unit_size: 3,
        points: 210,
        relevant_keywords: "Cavalry",
        base_size: "60mm",
        type: "unit",
        image: "/factions/trees/spiteriderLancers.jpg"
    },
    {
        name: "The Twistweald",
        unit_size: 8,
        points: 130,
        relevant_keywords: "Infantry",
        notes: "This unit cannot be reinforced",
        base_size: "40mm [1], 32mm [4], 28.5mm [3]",
        type: "unit",
        image: "/factions/trees/branchwych.jpg"
    },
    {
        name: "Tree-Revenants",
        unit_size: 5,
        points: 110,
        relevant_keywords: "Infantry",
        base_size: "32mm",
        type: "unit",
        image: "/factions/trees/treeRevenants.jpg"
    }
];

export { heroes, units };
