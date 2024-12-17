import { Client }  from "pg"

const pgClient  = new Client("postgresql://test_owner:1zoHCE4Vqlgc@ep-twilight-wave-a13g3sji.ap-southeast-1.aws.neon.tech/test?sslmode=require")

async function main(){
await pgClient.connect();
const response = await pgClient.query("SELECT * FROM users;")
console.log(response.rows);
}
main();