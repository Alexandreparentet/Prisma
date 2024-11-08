import { PrismaClient } from '@prisma/client'; // Insert Into, Drop, Update, Select


const prisma = new PrismaClient();

const result = await prisma.user.create({
    data: {
        name: 'levy',
        email: 'ale@homail.com'
    }
})

console.log(result);
