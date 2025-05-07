import multer from 'multer'

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        const fileName = Date.now()
        cb(null, fileName + '.png')
    }
})

export const productImageUpload = multer({ storage: storage })

