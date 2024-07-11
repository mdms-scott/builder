const heroes = [
    {
        name: "Lord Kroak",
        unit_size: 1,
        points: 460,
        regiment_options: "0-1 Skink Starpriest or Favoured Spawning, Any Seraphon",
        base_size: "80mm",
        type: "hero"
    },
    {
        name: "Ripperdactyl Chief",
        unit_size: 1,
        points: 150,
        regiment_options: "0-1 Monster, 0-1 Beast, Any Skink Cavalry",
        base_size: "50mm",
        type: "hero"
    },
    {
        name: "Saurus Astrolith Bearer",
        unit_size: 1,
        points: 150,
        regiment_options: "Any Saurus",
        notes: "This Hero can join an eligible regiment as a Favoured Spawning",
        base_size: "40mm",
        type: "hero"
    },
    {
        name: "Saurus Oldblood",
        unit_size: 1,
        points: 130,
        regiment_options: "0-1 Favoured Spawning, Any Saurus",
        base_size: "32mm",
        type: "hero"
    },
    {
        name: "Saurus Oldblood on Carnosaur",
        unit_size: 1,
        points: 330,
        regiment_options: "0-1 Favoured Spawning, Any Monster, Any Saurus",
        base_size: "120 × 92mm",
        type: "hero"
    },
    {
        name: "Saurus Scar-Veteran on Aggradon",
        unit_size: 1,
        points: 180,
        regiment_options: "0-1 Favoured Spawning, Any Saurus",
        base_size: "90 × 52mm",
        type: "hero"
    },
    {
        name: "Saurus Scar-Veteran on Carnosaur",
        unit_size: 1,
        points: 270,
        regiment_options: "0-1 Favoured Spawning, 0-1 Monster, Any Saurus",
        base_size: "120 × 92mm",
        type: "hero"
    },
    {
        name: "Skink Oracle on Troglodon",
        unit_size: 1,
        points: 280,
        regiment_options: "0-1 Monster, 0-1 Beast, Any Kroxigor, Any non-Monster Skink",
        base_size: "120 × 92mm",
        type: "hero"
    },
    {
        name: "Skink Starpriest",
        unit_size: 1,
        points: 110,
        regiment_options: "0-1 Monster, 0-1 Beast, Any Kroxigor, Any non-Monster Skink",
        notes: "This Hero can join Lord Kroak’s or a Slann Starmaster’s regiment",
        base_size: "25mm",
        type: "hero"
    },
    {
        name: "Skink Starseer",
        unit_size: 1,
        points: 150,
        regiment_options: "0-1 Monster, Any Beast, Any Kroxigor, Any non-Monster Skink",
        base_size: "50mm",
        type: "hero"
    },
    {
        name: "Slann Starmaster",
        unit_size: 1,
        points: 280,
        regiment_options: "0-1 Skink Starpriest or Favoured Spawning, Any Seraphon",
        base_size: "50mm",
        type: "hero"
    },
    {
        name: "Stegadon Chief",
        unit_size: 1,
        points: 260,
        regiment_options: "0-1 Monster, Any Kroxigor, Any non-Monster Skink",
        base_size: "120 × 92mm",
        type: "hero"
    },
    {
        name: "Terradon Chief",
        unit_size: 1,
        points: 150,
        regiment_options: "0-1 Monster, 0-1 Beast, Any Skink Cavalry",
        base_size: "50mm",
        type: "hero"
    }
];

const units = [
    {
        name: "Aggradon Lancers",
        unit_size: 3,
        points: 210,
        relevant_keywords: "Saurus, Cavalry",
        base_size: "75 × 42mm",
        type: "unit"
    },
    {
        name: "Bastiladon with Ark of Sotek",
        unit_size: 1,
        points: 270,
        relevant_keywords: "Skink, Monster",
        base_size: "120 × 92mm",
        type: "unit"
    },
    {
        name: "Bastiladon with Solar Engine",
        unit_size: 1,
        points: 290,
        relevant_keywords: "Skink, Monster",
        base_size: "120 × 92mm",
        type: "unit"
    },
    {
        name: "Engine of the Gods",
        unit_size: 1,
        points: 210,
        relevant_keywords: "Skink, Monster",
        base_size: "120 × 92mm",
        type: "unit"
    },
    {
        name: "Hunters of Huanchi with Dartpipes",
        unit_size: 5,
        points: 80,
        relevant_keywords: "Skink, Infantry",
        notes: "This unit cannot be reinforced",
        base_size: "28.5mm [1], 25mm [4]",
        type: "unit"
    },
    {
        name: "Hunters of Huanchi with Starstone Bolas",
        unit_size: 5,
        points: 90,
        relevant_keywords: "Skink, Infantry",
        notes: "This unit cannot be reinforced",
        base_size: "28.5mm [2], 25mm [3]",
        type: "unit"
    },
    {
        name: "Kroxigor",
        unit_size: 3,
        points: 220,
        relevant_keywords: "Kroxigor, Infantry",
        base_size: "50mm",
        type: "unit"
    },
    {
        name: "Kroxigor Warspawned",
        unit_size: 3,
        points: 220,
        relevant_keywords: "Kroxigor, Infantry",
        base_size: "50mm",
        type: "unit"
    },
    {
        name: "Raptadon Chargers",
        unit_size: 5,
        points: 140,
        relevant_keywords: "Skink, Cavalry",
        base_size: "60 × 35mm",
        type: "unit"
    },
    {
        name: "Raptadon Hunters",
        unit_size: 5,
        points: 140,
        relevant_keywords: "Skink, Cavalry",
        base_size: "60 × 35mm",
        type: "unit"
    },
    {
        name: "Ripperdactyl Riders",
        unit_size: 3,
        points: 120,
        relevant_keywords: "Skink, Cavalry",
        base_size: "50mm",
        type: "unit"
    },
    {
        name: "Saurus Guard",
        unit_size: 5,
        points: 110,
        relevant_keywords: "Saurus, Infantry",
        base_size: "32mm",
        type: "unit"
    },
    {
        name: "Saurus Warriors",
        unit_size: 10,
        points: 170,
        relevant_keywords: "Saurus, Infantry",
        base_size: "32mm",
        type: "unit"
    },
    {
        name: "Skinks",
        unit_size: 10,
        points: 100,
        relevant_keywords: "Skink, Infantry",
        base_size: "25mm",
        type: "unit"
    },
    {
        name: "Spawn of Chotec",
        unit_size: 1,
        points: 170,
        relevant_keywords: "Skink, Beast",
        base_size: "90mm [1], 25mm [3]",
        type: "unit"
    },
    {
        name: "Stegadon",
        unit_size: 1,
        points: 240,
        relevant_keywords: "Skink, Monster",
        base_size: "120 × 92mm",
        type: "unit"
    },
    {
        name: "Terradon Riders",
        unit_size: 3,
        points: 110,
        relevant_keywords: "Skink, Cavalry",
        base_size: "50mm",
        type: "unit"
    },
    {
        name: "Terrawings",
        unit_size: 3,
        points: 100,
        relevant_keywords: "Beast",
        notes: "This unit cannot be reinforced",
        base_size: "32mm",
        type: "unit"
    }
];

export { heroes, units };
