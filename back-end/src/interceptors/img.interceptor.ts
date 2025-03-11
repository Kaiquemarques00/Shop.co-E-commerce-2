import { diskStorage } from 'multer';
import { extname } from 'path';
import { FilesInterceptor } from '@nestjs/platform-express';

export const ImgInterceptor = () =>
  FilesInterceptor('product_imgs', 5, {
    // Permite até 5 imagens
    storage: diskStorage({
      destination: './uploads/products',
      filename: (req, file, callback) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const ext = extname(file.originalname);
        callback(null, `${uniqueSuffix}${ext}`);
      },
    }),
    limits: {
      fileSize: 5 * 1024 * 1024, // Limite de 5MB por imagem
    },
    fileFilter: (req, file, callback) => {
      if (!file.mimetype.match(/\/(jpg|jpeg|png|webp)$/)) {
        return callback(new Error('Formato de imagem inválido!'), false);
      }
      callback(null, true);
    },
  });
