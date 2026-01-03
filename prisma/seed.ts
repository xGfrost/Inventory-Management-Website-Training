import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
    const demoUserId = "759c436c-956e-4ec7-8ba4-7588ba4c6742"

    await prisma.product.createMany({
        data: Array.from({ length: 25}).map((_, i) => ({
            userId: demoUserId,
            name: `Product ${i + 1}`,
            price: (Math.random() * 90 + 10).toFixed(2),
            quantity: Math.floor(Math.random() * 20),
            lowStockAt: 5,
            createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * (i * 5) ),
            
        })),
    });
}

main()
.catch((e) => {
    console.error(e);
    process.exit(1);
})
.finally(async () => {
    await prisma.$disconnect();
});