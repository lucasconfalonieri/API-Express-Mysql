import { getConnection } from "./../database/database";

const getCarreras = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM Carrera");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getCarrera = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM Carrera WHERE idCarrera = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addCarrera = async (req, res) => {
    try {
        const { idCarrera, vueltas } = req.body;

        if (idCarrera === undefined || vueltas === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }

        const carrera = { idCarrera, vueltas };
        const connection = await getConnection();
        await connection.query("INSERT INTO Carrera SET ?", carrera);
        res.json({ message: "Carrera added" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateCarrera = async (req, res) => {
    try {
        const { id } = req.params;
        const { idCarrera, vueltas } = req.body;

        if (idCarrera === undefined || vueltas === undefined || id === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field" });
        }

        const carrera = { idCarrera, vueltas };
        const connection = await getConnection();
        const result = await connection.query("UPDATE Carrera SET ? WHERE idCarrera = ?", [carrera, id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const deleteCarrera = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM Carrera WHERE idCarrera = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    getCarrera,
    getCarreras,
    addCarrera,
    updateCarrera,
    deleteCarrera
};