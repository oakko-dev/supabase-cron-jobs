import prisma from "../../lib/prisma"

export default defineEventHandler(async (_) => {
	// Increment count for all HealthCheck records
	await prisma.healthCheck.updateMany({
		data: {
			count: {
				increment: 1,
			},
		},
	})

	// Fetch all HealthCheck records
	const healthChecks = await prisma.healthCheck.findMany()
	// Return as JSON
	return { healthChecks }
})
