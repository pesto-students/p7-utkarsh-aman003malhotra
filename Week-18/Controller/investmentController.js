const multer = require("multer");
const InvestmentModel = require('../Model/Investments');
const mongoose = require('mongoose');
const dotenv = require("dotenv");

dotenv.config();


var SibApiV3Sdk = require('sib-api-v3-sdk');
SibApiV3Sdk.ApiClient.instance.authentications['api-key'].apiKey = process.env.MAIL_API_KEY;

exports.addInvestment = async (req, res) => {
    const newInvestment = new InvestmentModel({
        type: req?.body?.type?.trim()?.toLowerCase(),
        value: req?.body?.value?.trim()?.toLowerCase(),
        description: req?.body?.description?.trim()?.toLowerCase(),
        title: req?.body?.title?.trim()?.toLowerCase(),
        user: req?.body?.user_id,
        document: req?.file?.filename
    });
    newInvestment
        .save()
        .then((data) => {
            new SibApiV3Sdk.TransactionalEmailsApi().sendTransacEmail(
                {
                  'subject':'New Investment Added',
                  'sender' : {'email':'aman003malhotra@gmail.com', 'name':'Aman Malhotra'},
                  'replyTo' : {'email':'aman003malhotra@gmail.com', 'name':'Aman Malhotra'},
                  'to' : [{'email':req.user.email}],
                  'htmlContent' : `<html><body><h1>New Investment has been added ${data}</h1></body></html>`,
                  'params' : {'bodyMessage':'Made just for you!'}
                }
              ).then(function(data) {
                console.log(data);
              }, function(error) {
                console.error(error);
              });
            return res.status(200).send({ message: "New Investmen Details Added", data: data })
        })
        .catch(err => {
            return res.status(500).send({ message: "Error Adding the data" })
        })
}


exports.findInvestmentbyId = async (req, res) => {
    InvestmentModel.findById(req.params.investmentId)
        .then((data) => {
            return res.status(200).send({ data: data })
        })
        .catch(err => {
            return res.status(500).send({ message: "Error finding the data" })
        })
}


exports.findInvestmentbyname = async (req, res) => {
    InvestmentModel.find({ name: req.params.investmentName })
        .then((data) => {
            return res.status(200).send({ data: data })
        })
        .catch(err => {
            return res.status(500).send({ message: "Error finding the data" })
        })
}


exports.updateInvestment = async (req, res) => {
    InvestmentModel.findByIdAndUpdate(req.params.investmentId,
        {
            type: req?.body?.type,
            value: req.body?.value,
            description: req?.body?.description,
            title: req?.body?.name,
            document: req?.file?.filename
        },
        { new: true }
    )
        .then((data) => {
            new SibApiV3Sdk.TransactionalEmailsApi().sendTransacEmail(
                {
                  'subject':'Investment Updated',
                  'sender' : {'email':'aman003malhotra@gmail.com', 'name':'Aman Malhotra'},
                  'replyTo' : {'email':'aman003malhotra@gmail.com', 'name':'Aman Malhotra'},
                  'to' : [{'email':req.user.email}],
                  'htmlContent' : `<html><body><h3> Investment has been updated ${data}</h3></body></html>`,
                  'params' : {'bodyMessage':'Made just for you!'}
                }
              ).then(function(data) {
                console.log(data);
              }, function(error) {
                console.error(error);
              });
            return res.status(200).send({ message: "Investment updated successfully", data: data })
        })
        .catch((err) => {
            return res.status(500).send({ error: "There is some internal error" })
        })
}

exports.uploadfile = async (req, res) => {
    InvestmentModel.findByIdAndUpdate(req.params.investmentId,
        {
            document: req.file.filename
        },
        { new: true }
    )
        .then((data) => {
            return res.status(200).send({ message: "File uploaded successfully", data: data })
        })
        .catch((err) => {
            return res.status(500).send({ error: err })
        })
}

exports.deleteInvestment = async (req, res) => {
    InvestmentModel.findByIdAndDelete(req.params.investmentId)
        .then((data) => {
            return res.status(200).send({ message: "Investment deleted successfully" })
        })
        .catch((err) => {
            return res.status(500).send({ error: "There is some internal error" })
        })
}


exports.findInvestmentbyUserId = async (req, res) => {
    InvestmentModel.find({ user: req.params.userId })
        .then((data) => {
            return res.status(200).send({ data: data })
        })
        .catch(err => {
            return res.status(500).send({ message: "Error finding the data" })
        })
}

exports.findInvestmentCurrentFinYear = async (req, res) => {
    let userId = new mongoose.Types.ObjectId(req.params.userId)
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    InvestmentModel.aggregate([{
        $match: {
            createdAt: {
                $gte: new Date(`${currentYear}-01-01`),
                $lt: new Date(`${currentYear + 1}-01-01`)
            },
            user: { $eq: userId }
        }
    }])
        .exec()
        .then(result => {
            return res.status(200).send({ data: result });
        })
        .catch(err => {
            return res.status(500).send({ message: "Internal error" })
        })
}

exports.findInvestmentByFilter = async (req, res) => {
    let userId = new mongoose.Types.ObjectId(req.params.userId)
    const year = req.body.year ? req.body.year : new Date().getFullYear();

    if (req.body.month) {
        InvestmentModel.aggregate([{
            $match: {
                createdAt: {
                    $gte: new Date(`${year}-${req.body.month}-01`),
                    $lt: new Date(`${year}-${req.body.month + 1}-01`)
                },
                user: { $eq: userId }
            }
        }])
            .exec()
            .then(result => {
                return res.status(200).send({ data: result });
            })
            .catch(err => {
                return res.status(500).send({ message: "Internal error" })
            })
    } else {
        InvestmentModel.aggregate([{
            $match: {
                createdAt: {
                    $gte: new Date(`${year}-01-01`),
                    $lt: new Date(`${year + 1}-01-01`)
                },
                user: { $eq: userId }
            }
        }])
            .exec()
            .then(result => {
                return res.status(200).send({ data: result });
            })
            .catch(err => {
                return res.status(500).send({ message: "Internal error" })
            })
    }

}

exports.detailedBreakdown = async (req, res) => {
    let userId = new mongoose.Types.ObjectId(req.params.userId)
    const year = req.body.year ? req.body.year : new Date().getFullYear();

    if (req.body.month) {
        InvestmentModel.aggregate([
            {
                $match: {
                    createdAt: {
                        $gte: new Date(`${year}-${req.body.month}-01`),
                        $lt: new Date(`${year}-${req.body.month + 1}-01`)
                    },
                    user: { $eq: userId }
                }
            },
            {
                $group: {
                    _id: "$type",
                    totalValue: { $sum: "$value" },
                    avgValue: { $avg: "$value" },
                    count: { $sum: 1 }
                }
            }

        ])
            .exec()
            .then(result => {
                return res.status(200).send({ data: result });
            })
            .catch(err => {
                return res.status(500).send({ message: "Internal error" })
            })
    } else {
        InvestmentModel.aggregate([
            {
                $match: {
                    createdAt: {
                        $gte: new Date(`${year}-01-01`),
                        $lt: new Date(`${year + 1}-01-01`)
                    },
                    user: { $eq: userId },
                }
            },
            {
                $group: {
                    _id: "$type",
                    totalValue: { $sum: "$value" },
                    avgValue: { $avg: "$value" },
                    count: { $sum: 1 }
                }
            }

        ])
            .exec()
            .then(result => {
                return res.status(200).send({ data: result });
            })
            .catch(err => {
                return res.status(500).send({ message: "Internal error" })
            })
    }
}