

export const fileFilter = (req: Express.Request, file: Express.Multer.File, callback: Function) => {

    // console.log({ file });
    if (!file) return callback(new Error('File is empty'), false);

    const fileExtension = file.mimetype.split('/').at(1);
    const validExtesions = ['jpg', 'jpeg', 'png', 'gif'];

    if (validExtesions.includes(fileExtension)) {
        return callback(null, true);
    }

    callback(null, false);
}