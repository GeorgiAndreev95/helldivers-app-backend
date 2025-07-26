import Faction from "../models/Faction.js";
import deleteFile from "../../utils/file.js";

export const createFaction = async (req, res, next) => {
    const { name, description } = req.body;

    try {
        if (!req.file) {
            return res.status(400).json({
                message: "Attached file is not an image.",
                oldInput: { name, description },
            });
        }

        const imageUrl = `/images/${req.file.filename}`; // alternatively const imageUrl = req.file.path.replace(/\\/g, "/");

        await Faction.create({
            name,
            description,
            image: imageUrl,
        });

        res.status(201).json({
            message: "Faction created.",
            faction: {
                name,
                description,
                image: imageUrl,
            },
        });
    } catch (error) {
        if (req.file) {
            deleteFile(`/images/${req.file.filename}`);
        }

        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export const getFaction = async (req, res, next) => {
    const { id } = req.params;

    try {
        const faction = await Faction.findByPk(id);
        if (!faction) {
            return res.status(404).json({ message: "Faction not found" });
        }
        res.status(200).json({ faction });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to fetch faction" });
    }
};

export const getFactions = async (req, res, next) => {
    try {
        const factions = await Faction.findAll();
        res.status(200).json({ factions });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to fetch factions" });
    }
};

export const updateFaction = async (req, res, next) => {
    const { id } = req.params;
    const { name, description } = req.body;

    try {
        const faction = await Faction.findByPk(id);

        if (!faction) {
            return res.status(404).json({ message: "Faction not found" });
        }

        const updates = {
            name,
            description,
        };

        if (req.file) {
            const newImageUrl = `/images/${req.file.filename}`;

            if (faction.image && faction.image !== newImageUrl) {
                deleteFile(faction.image);
            }

            updates.image = newImageUrl;
        }

        await faction.update(updates);

        return res.status(200).json({
            message: "Faction updated",
            faction,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export const deleteFaction = async (req, res, next) => {
    const { id } = req.params;

    try {
        const faction = await Faction.findByPk(id);

        if (!faction) {
            return res.status(404).json({ message: "Faction not found" });
        }

        if (faction.image) {
            deleteFile(faction.image);
        }

        await faction.destroy();

        res.status(200).json({ message: "Faction deleted" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to delete faction" });
    }
};
