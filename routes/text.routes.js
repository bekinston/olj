const {Router} = require('express')
const Text = require('../models/Text')
const Subject = require('../models/Subject')
const Event = require('../models/Event')
const router = Router()

router.post('/addsubject', async(req, res) =>{
  try {

    const {name, officehours, contact, mark, state} = req.body
    const subject = new Subject({state , name, officehours, contact, mark})
    subject.save()

    res.status(201).json({ message:"обьект создан" })
  } catch (e) {

  }
})

router.post('/addevent', async(req, res) =>{
  try {

    const {name, date, place, type, state} = req.body
    const event1 = new Event({name, date, place, type, state})
    event1.save()

    res.status(201).json({ message:"обьект создан" })
  } catch (e) {

  }
})


router.post('/delsubject', async (req, res) => {
  try {

    const {name} = req.body
    const delsubject = await Subject.updateOne({name}, {$set: {state : "0"}})

    res.status(201).json({message:name})
  } catch (e) {
    res.status(500).json({e})
  }
})

router.post('/takesubject', async (req, res) => {
  try {

    const {name} = req.body
    const takesubject = await Subject.updateOne({name}, {$set: {state : "1"}})

    res.status(201).json({message:name})
  } catch (e) {
    res.status(500).json({e})
  }
})


router.get('/getevent1', async(req,res)=>{
  try {

    const type = "развлекательные"

    const event1 = await Event.find({type:type})
    res.json(event1)

  } catch (e) {

  }
})

router.get('/getevent2', async(req,res)=>{
  try {

    const type = "учебные"

    const event1 = await Event.find({type:type})
    res.json(event1)

  } catch (e) {

  }
})

router.get('/getsubject', async(req,res)=>{
  try {

    const state = "1"

    const subject = await Subject.find({state:state})
    res.json(subject)

  } catch (e) {

  }
})

router.get('/getsubject0', async(req,res)=>{
  try {

    const state = "0"

    const subject = await Subject.find({state:state})
    res.json(subject)

  } catch (e) {

  }
})


module.exports = router
