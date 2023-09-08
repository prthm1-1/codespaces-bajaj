const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({
  extended:true
}))
app.get('/bfhl', (req, res) => {
 const response = {
  "operation_code":1
 }
  res.status(200).send(response)
})

function isLetter(str) {
  return str.length === 1 && str.match(/[a-z]/i);
}

app.post('/bfhl', (req, res) => {
  const {data} = req.body
  const response = {
    "is_success":true,
    "user_id":"pratham_pandey_2002",
    "email":"pp1583@srmist.edu.in",
    "roll_number":"RA2011026010177",
    "alphabets":[],
    "numbers":[],
    "highest_alphabet":[]
  }
  let max = "A"
  for(let i =0;i <data.length;i++){
    if(isLetter(data[i])){
      let c = data[i]
      c = c.toUpperCase()
      if(c.charCodeAt(0) > max.charCodeAt(0)){
        max = c;
      }
      response.alphabets.push(c)
      continue;
    }
    response.highest_alphabet.push(max)
    response.numbers.push(data[i])
  }

  res.send(response)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})