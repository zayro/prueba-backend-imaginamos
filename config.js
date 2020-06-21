// Update with your config settings.

module.exports = {
	development: {
	  client: 'pg',
	  connection: 'postgres://postgres:zayro8905@localhost:5432/imaginamos'
	},
	production: {
	  client: 'pg',
	  connection: process.env.PG_CONNECTION_STRING
	},
	port: process.env.PORT || 3000,
	db: process.env.PG_CONNECTION_STRING || 'postgres://postgres:zayro8905@localhost:5432/imaginemos',
	dblocal:  'postgres://postgres:zayro8905@localhost:5432/imaginemos',
	dbremoto:  'postgres://wmffzqhqrxkdpj:d57ffa3a7d9cac8988441c71610e8bc49a9f75d6628b27ee43e7114a914b3e00@ec2-34-197-141-7.compute-1.amazonaws.com:5432/ddbmpbq8o1jpgg'	
}
