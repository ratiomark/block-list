import { config } from 'dotenv'
config()
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	const config = new DocumentBuilder().setTitle('Block List Doc').build()
	const document = SwaggerModule.createDocument(app, config)
	SwaggerModule.setup('api', app, document)

	const PORT = process.env.PORT || 3000
	await app.listen(PORT, () => console.log(`Server started on port ${PORT} \n ${process.env.DATABASE_URL}`));
}
bootstrap();
