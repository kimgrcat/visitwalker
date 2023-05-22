const { Router } = require('express')
const Visitation = require('../../models/Visitation')

const router = Router()

router.get('/', async (req, res) => {
    try {
        const visitationList = await Visitation.find()
        console.log("get visitationList: ", visitationList);
        if (!visitationList) throw new Error('No Visitation List found')
        res.status(200).json(visitationList)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.post('/', async (req, res) => {
    const newVisitation = new Visitation(req.body)
    try {
        const visitation = await newVisitation.save()
        if (!visitation) throw new Error('Something went wrong saving the Visitation')
        console.log("post visitation: ", visitation);
        res.status(200).json(visitation)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const removed = await Visitation.findByIdAndDelete(id)
        if (!removed) throw Error('Something went wrong ')
        console.log("delete visitation: ", removed);
        res.status(200).json(removed)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router