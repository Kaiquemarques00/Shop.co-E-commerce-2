import { Module } from '@nestjs/common';
import { CloudinaryService } from './cloudinary.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule], // Importa o ConfigModule
  providers: [CloudinaryService],
  exports: [CloudinaryService], // Exporta para uso em outros módulos
})
export class CloudinaryModule {}
