import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function createuser(){
    await client.user.create({
        data: {
            username: "parth",
            password: "1334",
            age : 21
        }
    })
}

createuser();