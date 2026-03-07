import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";

const connectionString = process.env.DATABASE_URL!;

const prismaClientSingleton = () => {
	const adapter = new PrismaPg({ connectionString });
	return new PrismaClient({ adapter });
};

declare global {
	var prismaGlobal: ReturnType<typeof prismaClientSingleton> | undefined;
}

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

// cache in development
if (process.env.NODE_ENV !== "production") {
	globalThis.prismaGlobal = prisma;
}
