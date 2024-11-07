import inquirer from 'inquirer' //CLI interativa
import qr from 'qr-image' //Criacao da im QR code
import fs from 'fs' // File System - interacao com arquivos

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