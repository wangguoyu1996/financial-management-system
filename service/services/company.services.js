var models = require('../model/db');
var util = require('../libs/commonMethod');
var mysql = require('mysql');
var $sql = require('../model/company.model');
var conn= mysql.createConnection(models.mysql);
conn.connect();

module.exports = {
    addCompany:function (req,res) {
        var sqlName = $sql.company.add;
        var value = req.body;

        util.getMaxID('company','company_id',function(id){
            conn.query(sqlName,[id,value.name,value.phone,value.landline,value.address,value.remark], function(err, result) {
                if (err) {
                    console.log(err);
                }
                if (result) {
                    util.jsonWrite(res, result);
                }
            },function (message) {
                console.log(message);
                res.send(message);
            });
        });
    },
    delete:function(req,res){
        var sqlName = $sql.company.delete;

        conn.query(sqlName,[req.body.id],function (err,result) {
            if(err) console.log(err);
            if(result) util.jsonWrite(res,result);
        })

    },
    update:function(req,res){
        var sqlName = $sql.company.update_company;
        var data = req.body;
        //UPDATE company SET name=?, phone=?,landLine=?, address=?, remark=? WHERE (company_id=?)
        conn.query(sqlName,[data.name,data.phone,data.landline,
            data.address,data.remark,data.company_id],function (err,result) {
            if(err) console.log(err);
            if(result) util.jsonWrite(res,result);
        })
    },
    getCompany:function (req, res) {
        var sqlName = $sql.company.select_all;

        conn.query(sqlName, function(err, result) {
            if (err) {
                console.log(err);
            }
            if (result) {
                util.jsonWrite(res, result);
            }
        })
    },
    getCompanyByName:function (req,res) {
        var value = req.body;
        var sqlName = $sql.company.select_fromName;

        conn.query(sqlName,value.name, function(err, result) {
            console.log(this.sql);
            if (err) {
                console.log(err);
            }
            if (result) {
                util.jsonWrite(res, result);
            }
        })
    },
    getCompanyById:function (req,res) {
        var value = req.body;
        var sqlName = $sql.company.select_fromID;

        conn.query(sqlName,value.id, function(err, result) {
            console.log(this.sql);
            if (err) {
                console.log(err);
            }
            if (result) {
                util.jsonWrite(res, result);
            }
        })
    }
};
