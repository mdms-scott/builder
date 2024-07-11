const heroes = [
    {
        name: "Bloab Rotspawned",
        unit_size: 1,
        points: 320,
        regiment_options: "0-1 Rotbringer Lord, Any Maggotkin of Nurgle",
        base_size: "100mm",
        type: "hero"
    },
    {
        name: "Great Unclean One",
        unit_size: 1,
        points: 480,
        regiment_options: "Any Maggotkin of Nurgle",
        base_size: "130mm",
        type: "hero"
    },
    {
        name: "Gutrot Spume",
        unit_size: 1,
        points: 180,
        regiment_options: "0-1 Rotbringer Lord, Any Rotbringers",
        base_size: "40mm",
        type: "hero"
    },
    {
        name: "Harbinger of Decay",
        unit_size: 1,
        points: 200,
        regiment_options: "0-1 Rotbringer Lord, Any Rotbringers",
        base_size: "75 × 42mm",
        type: "hero"
    },
    {
        name: "Horticulous Slimux",
        unit_size: 1,
        points: 150,
        regiment_options: "Any Daemon",
        base_size: "105 × 70mm",
        type: "hero"
    },
    {
        name: "Lord of Afflictions",
        unit_size: 1,
        points: 220,
        regiment_options: "Any Plague Drones, Any Pusgoyle Blightlords",
        base_size: "60mm",
        type: "hero"
    },
    {
        name: "Lord of Blights",
        unit_size: 1,
        points: 170,
        regiment_options: "Any Rotbringers Infantry",
        notes: "This Hero can join an eligible regiment as a Rotbringer Lord",
        base_size: "40mm",
        type: "hero"
    },
    {
        name: "Lord of Plagues",
        unit_size: 1,
        points: 170,
        regiment_options: "Any Rotbringers Infantry",
        notes: "This Hero can join an eligible regiment as a Rotbringer Lord",
        base_size: "40mm",
        type: "hero"
    },
    {
        name: "Morbidex Twiceborn",
        unit_size: 1,
        points: 320,
        regiment_options: "0-1 Rotbringer Lord, Any Maggotkin of Nurgle",
        base_size: "100mm",
        type: "hero"
    },
    {
        name: "Orghotts Daemonspew",
        unit_size: 1,
        points: 340,
        regiment_options: "0-1 Rotbringer Lord, Any Maggotkin of Nurgle",
        base_size: "100mm",
        type: "hero"
    },
    {
        name: "Poxbringer, Herald of Nurgle",
        unit_size: 1,
        points: 130,
        regiment_options: "Any Daemon",
        base_size: "32mm",
        type: "hero"
    },
    {
        name: "Rotbringer Sorcerer",
        unit_size: 1,
        points: 120,
        regiment_options: "0-1 Rotbringer Lord, Any Rotbringers",
        base_size: "32mm",
        type: "hero"
    },
    {
        name: "Rotigus",
        unit_size: 1,
        points: 500,
        regiment_options: "Any Maggotkin of Nurgle",
        base_size: "130mm",
        type: "hero"
    },
    {
        name: "Sloppity Bilepiper, Herald of Nurgle",
        unit_size: 1,
        points: 110,
        regiment_options: "Any Daemon",
        base_size: "32mm",
        type: "hero"
    },
    {
        name: "Spoilpox Scrivener, Herald of Nurgle",
        unit_size: 1,
        points: 100,
        regiment_options: "Any Daemon",
        base_size: "40mm",
        type: "hero"
    },
    {
        name: "The Glottkin",
        unit_size: 1,
        points: 550,
        regiment_options: "0-1 Rotbringer Lord, Any Maggotkin of Nurgle",
        base_size: "130mm",
        type: "hero"
    }
];

const units = [
    {
        name: "Beasts of Nurgle",
        unit_size: 1,
        points: 150,
        relevant_keywords: "Daemon, Beast",
        base_size: "60mm",
        type: "unit"
    },
    {
        name: "Nurglings",
        unit_size: 3,
        points: 110,
        relevant_keywords: "Daemon, Infantry",
        base_size: "40mm",
        type: "unit"
    },
    {
        name: "Plague Drones",
        unit_size: 3,
        points: 180,
        relevant_keywords: "Daemon, Cavalry",
        base_size: "60mm",
        type: "unit"
    },
    {
        name: "Plaguebearers",
        unit_size: 10,
        points: 140,
        relevant_keywords: "Daemon, Infantry",
        base_size: "32mm",
        type: "unit"
    },
    {
        name: "Pusgoyle Blightlords",
        unit_size: 2,
        points: 250,
        relevant_keywords: "Rotbringers, Cavalry",
        base_size: "60mm",
        type: "unit"
    },
    {
        name: "Pusgoyle Blightlords (1 model)",
        unit_size: 1,
        points: 130,
        relevant_keywords: "Rotbringers, Cavalry",
        notes: "You can include 1 unit of this type for each Lord of Afflictions in your army.",
        base_size: "60mm",
        type: "unit"
    },
    {
        name: "Putrid Blightkings",
        unit_size: 5,
        points: 200,
        relevant_keywords: "Rotbringers, Infantry",
        base_size: "40mm",
        type: "unit"
    },
    {
        name: "Rotmire Creed",
        unit_size: 10,
        points: 130,
        relevant_keywords: "Rotbringers, Infantry",
        notes: "This unit cannot be reinforced.",
        base_size: "32mm [2], 28.5mm [8]",
        type: "unit"
    }
];

export { heroes, units };
