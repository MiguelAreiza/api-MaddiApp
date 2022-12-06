const {getConexion, sql} = require('../SqlConexion/Conexion');

const ValidateUser = async (req, res) =>{

    try {
        const {User, Pass} = req.body;

        if (User == null || Pass == null) {
            return res.status(400).json({msg: 'bad Request. Error processing the request'})
        }

        const pool = await getConexion();
    
        const result = await pool.request().query(`exec SP_ValidateLogin '${User}', '${Pass}'`);/*Para consultas o ejecutar sp*/
    
        res.json(result.recordset);    
    } catch (err) {
        res.status(500).send('bad Request. Error processing the request');
    }

}

const CreateUser = async (req, res) =>{

    try {
        const {User, Pass, Doc, Name} = req.body;

        if (User == null || Pass == null || Doc == null || Name == null) {
            return res.status(400).json({msg: 'bad Request. Error processing the request'})
        }

        const pool = await getConexion();

        const result = await pool.request()
                                 .query(`exec SP_InsertUser '${User}', '${Pass}', '${Doc}', '${Name}'`);

        res.json(result.recordset);
    } catch (err) {
        res.status(500).send('bad Request. Error processing the request');
    }
}

module.exports.ValidateUser = ValidateUser;
module.exports.CreateUser = CreateUser;