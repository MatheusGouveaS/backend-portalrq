const File = require('../models/File');
const Sector = require('../models/Sector');

class FileController {
    async store(request, response) {
        const sector = await Sector.findById(request.params.id);

        const file = await File.create({
            title: request.file.originalname,
            path: request.file.key,
        });

        sector.files.push(file);

        await sector.save();

        request.io.sockets.in(sector._id).emit('file', file);

        return response.json(file);
    }
}

module.exports = new FileController();