const {
    Client
} = require("pg")
const dotenv = require("dotenv")
dotenv.config()
const connectDb = async () => {
    try {
        const client = new Client({
            user: 'davide',
            host: 'localhost',
            database: 'drone_db',
            password: 'davide',
            port: 5432
        })
        await client.connect()
        const res = await client.query(select)
        console.log(res)
        await client.end()
    } catch (error) {
        console.log(error)
    }
}
connectDb()

const text = `
     CREATE TABLE IF NOT EXISTS "drone_tb" (
 	    "drone_id" INT NOT NULL,
 	    "drone_speed" float NOT NULL,
 	    "drone_position" VARCHAR(15) NOT NULL
     );`;

const select = `select * from drone_tb;`

// execute(text).then(result => {
//     if (result) {
//         console.log('Table created');
//     }
// });