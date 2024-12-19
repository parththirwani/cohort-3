import { Client }  from "pg"
import express from "express"
const app = express();

const pgClient  = new Client("postgresql://test_owner:1zoHCE4Vqlgc@ep-twilight-wave-a13g3sji.ap-southeast-1.aws.neon.tech/test?sslmode=require")

app.use(express.json())
pgClient.connect();

app.post("/signup", async(req,res) => {
    const username = req.body.username;
    const password = req.body.password
    const email = req.body.email

    const city = req.body.city;
    const country = req.body.country
    const street= req.body.street
    const pincode = req.body.picode

try{
    const insertQuery= 'INSERT INTO users (username, email , password) VALUES ($1, $2, $3) RETURNING id;'
    const addressInsertQuery = 'INSERT INTO addresses (city , country , street , pincode , user_id) VALUES ($1, $2, $3 , $4, $5);'

    await pgClient.query("BEGIN;")

    const response = await pgClient.query(insertQuery, [username, email, password]);
    const userId = response.rows[0].id;
    const addressInsertResponse = await pgClient.query(addressInsertQuery, [city, country, street, pincode, userId])

    await pgClient.query("COMMIT;")

    res.json({
        message: "You have signed up"
    })
} catch (e){
    console.log(e)
    res.json({
        message : "Error while signing up"
    })
}

})

app.listen(3000);