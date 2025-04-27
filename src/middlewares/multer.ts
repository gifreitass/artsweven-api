import multer from 'multer'

export const productImageUpload = multer({ dest: 'uploads/' })
