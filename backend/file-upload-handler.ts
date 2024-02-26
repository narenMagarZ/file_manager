import multer, {memoryStorage} from 'multer'

const fileStorage = memoryStorage()
export const upload = multer({storage:fileStorage})

