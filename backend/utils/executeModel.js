export const executeModelNoProps = (method, res) => {
    method((err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    })
}

export const executeModelWithId = (method, req, res) => {
    const { id } = req.params;
    method(id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
};

export const executeModelWithData = (method, req, res) => {
    const data = req.body;
    method(data, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
};

export const executeModelWithBoth = (method, req, res) => {
    const { id } = req.params;
    const data = req.body;
    method(data, id, (err, results) => {
        if(err) {
            res.send(err);
        } else {
            res.json(results);
        }
    })
}