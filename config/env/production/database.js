module.exports =  ({ env }) => ({
	connection: {
		client: 'mysql',
		connection: {
		host: env('DATABASE_HOST', 'epic-type.ru'),
			port: env.int('DATABASE_PORT', -Infinity),
			database: env('DATABASE_NAME', 'strapi'),
			user: env('DATABASE_USERNAME', 'strapi'),
			password: env('DATABASE_PASSWORD', '3625814'),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});
