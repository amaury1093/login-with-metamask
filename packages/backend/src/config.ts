/**
 * JWT config.
 */
export const config = {
	algorithms: ['HS256' as const],
	secret: 'shhhh', // TODO Put in process.env
};
