import { getConnection } from "./../database/database";

const getEquiposCarrera = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT idEquipo FROM Carreraequipo WHERE idCarrera = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    getEquiposCarrera
};