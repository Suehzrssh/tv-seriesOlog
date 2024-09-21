import {db} from '../db.js';

export const getData = (req, res) => {

    const q = "SELECT * FROM tvseries";

    db.query(q, (err, data) => {
        if(err) return res.json(err);

        return res.json(data);
    });
};

export const getSingle = (req, res) => {
    const tvId = req.params.id;
    const q = "SELECT name, producer, season, chapter, year, cover FROM tvseries WHERE `id`=?";

    db.query(q, [tvId], (err, data) => {
        if(err) return res.json(err);

        return res.json(data);
    });

}

export const postData = (req, res) => {
    const name = req.body.name;
    const producer = req.body.producer;
    const season = req.body.season;
    const chapter = req.body.chapter;
    const year = req.body.year;
    const cover = req.body.cover;

    const q = "INSERT INTO tvseries (`name`,`producer`,`season`,`chapter`,`year`,`cover`) VALUES(?)";
    const values = [name, producer, season, chapter, year, cover];

    db.query(q, [values], (err, data) => {
        if(err) return res.json(err);

        return res.json("tv series is created");
    });
}



export const updateData = (req, res) => {
    const tvId = req.params.id;
    const name = req.body.name;
    const producer = req.body.producer;
    const season = req.body.season;
    const chapter = req.body.chapter;
    const year = req.body.year;
    const cover = req.body.cover;

    const q = "UPDATE tvseries SET `name`=?,`producer`=?,`season`=?,`chapter`=?,`year`=?,`cover`=? WHERE `id` =?";
    const values = [name, producer, season, chapter, year, cover];

    db.query(q, [...values, tvId], (err, data) => {
        if(err) return res.json(err);

        return res.json("tv series is updated");
    });
}

export const deleteData = (req, res) => {
    const tvId = req.params.id;

    const q = "DELETE FROM tvseries WHERE `id`=?";
    db.query(q, [tvId], (err, data) => {
        if(err) return res.json(err);

        return res.json("tv series is deleted");
    });
}