const express = require('express')
const app = express();
const PORT = 3001;


app.listen(3001, (req, res) => {
    console.log(`The Server is now  running on port ${PORT}`)
})

const rappers = {
    'edo maajka': {
        'age': 44,
        'birthName': 'Edin Osmić',
        'birthLocation': 'Brčko'
    },
    'nas': {
        'age': 54,
        'birthName': 'Nasir bin Olu Dara Jones',
        'birthLocation': 'New York City'
    },
    'mos def': {
        'age': 51,
        'birthName': 'Yasiin Bey',
        'birthLocation': 'Brooklyn'
    },
    'xzibit': {
        'age': 59,
        'birthName': 'Alvin Nathaniel Joiner',
        'birthLocation': 'Detroit'
    },
}


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api', (req, res) => {
    res.json(rappers)
})

app.get('/api/:name', (req, res) => {
    const nameRapper = req.params.name.toLowerCase();
    if(rappers[nameRapper]) {
        res.json(rappers[nameRapper])
    }
    else {
        res.status(404).end()
    }
})