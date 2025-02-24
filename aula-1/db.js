async function connect() {/* função assincrona, que permite que várias operações executadas 
    simulataneamente sem bloquear a execução de outras  tarefas*/

    if(global.connection)
        return global.connection.connect();

    const {Pool} = require("pg")
    const pool = new Pool({
        connectionString: process.env.CONNECTION_STRING
    })
    const Cliente = await pool.connect()
    console.log("criou o pool de conexão")

    const res = await Cliente.query("select now()");
    console.log(res.rows[0])
    Cliente.release()  // liberar conexão

    global.connection = pool;
    return pool.connect()
}
connect();//chamar a função connect

async function selectCustomers() {
    const Cliente = await connect()
    const res = await Cliente.query("select * from usuario");
    return res.rows;
    
}



module.exports = {
    selectCustomers
}