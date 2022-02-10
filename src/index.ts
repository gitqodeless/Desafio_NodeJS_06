/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
const db = require('../models/index.js')

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.listen(PORT, async () => {
	console.log(`Listening on port ${PORT}`);

	// CÓDIGO PARA ATENDER OS REQUERIMENTOS
	// R01, R02, R03, R04, R05

	var readlineSync = require('readline-sync');


	const getString = (texto: string) => readlineSync.question(texto);
	const getFloat = (texto: string) => parseFloat(readlineSync.question(texto));

	let n = parseInt(readlineSync.question("Infor3me a quantidade de alunos que deseja informar: "))

	for (let i = 0; i < n; i++) {
		let nome = getString("Digite o nome do aluno: ");
		let nota = getFloat("Digite a nota do aluno: ")

		await db.Aluno.create({
			nome,
			nota
		});

		console.log('Gravado com sucesso')
	}
});
