const Sector = require('../models/Sector');

class SectorController {
    async store(request, response) {
        
        const sector = await Sector.create({ title: request.body.title });

        return response.json(sector);
    }

    async show(request, response) {
        const sector = await Sector.findById(request.params.id).populate({
            path: 'files',
            options: { sort: {createdAt: -1 }}
        });

        return response.json(sector);
    }
}

module.exports = new SectorController();