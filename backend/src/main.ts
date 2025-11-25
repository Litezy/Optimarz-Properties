import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './common/filters/http-exception.filter';
import { ValidationPipe } from '@nestjs/common';
import fileUpload from 'express-fileupload';
import rateLimit from 'express-rate-limit';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Global exception filter
  app.useGlobalFilters(new AllExceptionsFilter());
  
  // Rate limiting
  const limiter = rateLimit({
    windowMs: 3 * 1000, // 15 minutes
    max: 2, // Limit each IP to 100 requests per windowMs
    message: {
      statusCode: 429,
      error: 'Too Many Requests',
      message: 'Too many requests from this IP, please try again later.',
    },
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  });

  // Apply rate limiting to all requests
  app.use(limiter);

  // File upload middleware
  app.use(fileUpload({
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
    abortOnLimit: true,
    createParentPath: true,
    useTempFiles: false, // Use memory storage (faster)
    safeFileNames: true,
    preserveExtension: true,
  }));

  // Global validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();