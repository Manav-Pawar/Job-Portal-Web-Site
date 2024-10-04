// import multer from "multer";

// const storage = multer.memoryStorage();
// export const singleUpload = multer({storage}).single("file");
import multer from 'multer';

// Setup multer memory storage
const storage = multer.memoryStorage();
export const singleUpload = multer({ storage }).single('file'); // 'file' should match the form field name in the request

export default singleUpload;
