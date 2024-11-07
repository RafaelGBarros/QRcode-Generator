import inquirer from 'inquirer'
import qr from 'qr-image'
import fs from 'fs'

inquirer
    .prompt([{
        message: "Digite seu URL: ",
        name: "URL"
    }])
    .then((answer)=>{
        const URL = answer.URL

        var qr_svg = qr.image(URL)
        qr_svg.pipe(fs.createWriteStream('qr_img.png'))
        
    })
    .catch((error) => {
        if(error.isTtyError){

        }else{

        }

    })  