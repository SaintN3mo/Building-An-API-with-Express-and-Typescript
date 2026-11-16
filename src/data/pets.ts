export type Pet = {
    id: number;
    name: string;
    species: string;
    breed: string;
    age: number;
    adopted: boolean;
    intakeDate: Date;
    adoptionDate?: Date;
    medicalHistory: {
        vaccinations: string[];
        weightKg: number;
        microchipId: string | null;
    };
    photo: string;
};

export const pets: Pet[] = [

    {
        id: 1,
        name: "Fluffy",
        species: "Dog",
        breed: "Golden Retriever",
        age: 3,
        adopted: true,
        intakeDate: new Date("2026-01-15"),
        adoptionDate: new Date("2026-03-20"),
        medicalHistory: {
            vaccinations: ["Rabies", "Distemper", "Parvovirus"],
            weightKg: 12.5,
            microchipId: null
        },
        photo: "https://images.unsplash.com/photo-1558788353-f76d92427f16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
        id: 2,
        name: "Fido",
        species: "Dog",
        breed: "Labrador",
        age: 5,
        adopted: false,
        intakeDate: new Date("2025-11-20"),
        adoptionDate: undefined,
        medicalHistory: {
            vaccinations: ["Rabies", "Distemper"],
            weightKg: 20.0,
            microchipId: "1234567890"
        },
        photo: "https://images.unsplash.com/photo-1601758123927-1c3f0b8c9f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
        id: 3,
        name: "Goldie",
        species: "Fish",
        breed: "Goldfish",
        age: 1,
        adopted: true,
        intakeDate: new Date("2026-02-10"),
        adoptionDate: new Date("2026-04-15"),
        medicalHistory: {
            vaccinations: [],
            weightKg: 0.1,
            microchipId: null
        },
        photo: "https://images.unsplash.com/photo-1617196031870-1f3e5b8c9f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }
];