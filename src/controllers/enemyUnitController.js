import EnemyUnit from "../models/EnemyUnit.js";

export const getEnemyUnit = async (req, res, next) => {
    try {
        const { id } = req.params;
        const enemyUnit = await EnemyUnit.findByPk(id);
        return res.status(200).json({
            enemyUnit,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export const getEnemyUnits = async (req, res, next) => {
    try {
        const enemyUnits = await EnemyUnit.findAll();
        return res.status(200).json({
            enemyUnits,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export const createEnemyUnit = async (req, res, next) => {
    try {
        const { name, description, health, damage, minimumDifficulty, armor } =
            req.body;
        const enemyUnit = await EnemyUnit.create({
            name,
            description,
            health,
            damage,
            minimumDifficulty,
            armor,
        });
        console.log(req.body);
        return res.status(201).json({
            enemyUnit,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export const updateEnemyUnit = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, description, health, damage, minimumDifficulty, armor } =
            req.body;

        const enemyUnit = await EnemyUnit.findByPk(id);

        if (!enemyUnit) {
            return res.status(404).json({ message: "Enemy unit not found" });
        }

        await enemyUnit.update({
            name,
            description,
            health,
            damage,
            minimumDifficulty,
            armor,
        });

        return res
            .status(200)
            .json({ message: "Enemy unit updated", enemyUnit });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export const deleteEnemyUnit = async (req, res, next) => {
    try {
        const { id } = req.params;
        const enemyUnit = await EnemyUnit.findByPk(id);

        if (!enemyUnit) {
            return res
                .status(404)
                .json({ message: "Enemy unit with this ID not found." });
        }

        await enemyUnit.destroy();
        return res.status(200).json({
            message: `Unit with id: ${req.params.id} deleted successfully`,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};
