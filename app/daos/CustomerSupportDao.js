const connection = require('../config/dbconfig');
const CustomerSupportDao = {
    create: (req, res, table) => {
        console.log('req',req.body);
        if (!req.body.first_name || !req.body.last_name || !req.body.email) {
            res.json({
                "error": true,
                "message": "Missing Data"
            });
        }
        let fields = Object.keys(req.body);
        let values = Object.values(req.body);

        let sql = `INSERT INTO ${table} (${fields.join(',')})
        VALUES (${values.map(value => `"${value}"`).join(", ")})`;

        console.log('sql',sql);

        connection.execute(sql, (err, rows) => {
            console.log('err',err);
            if (err) {
                res.json({
                    "error": true,
                    "message": "No fields to create."
                });
            }
            if (rows && rows.warning_count > 0) {
                connection.execute('SHOW warnings', (err, rows) => {
                    res.json(rows);
                })
            }
            res.json(rows);
        });

    },


    updateById: (req, res) => {
        if (isNaN(req.params.id)) {
            res.json({
                "error": true,
                "message": "Id must be a number."
            });
        } else if (Object.keys(req.body).length === 0) {
            res.json({
                "error": true,
                "message": "No fields to update."
            });
        } else {
            const fields = Object.keys(req.body);
            const values = Object.values(req.body);
            
            connection.execute(
                `UPDATE customerSupport SET ${fields.join(' = ?, ')} = ? WHERE customerSupport = ?`,
                [...values, req.params.id],
                (error, dbres) => {
                    if(!error) {
                        res.send(`Changed ${dbres.changedRows} row(s)`);
                    } else {
                        console.log('DAO Error', error);
                        res.send('Error updating record.');
                    }
                }
            );
        }
    }
}

module.exports = CustomerSupportDao;