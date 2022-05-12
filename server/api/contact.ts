import {createTransport} from "nodemailer"
export default defineEventHandler(async (event) => {

    let transporter = createTransport({
        host: process.env.SMTPHOST,
        port: parseInt(process.env.SMTPPORT) || 465,
        secure: true,
        auth:{
            user: process.env.SMTPUSER,
            pass: process.env.SMTPPASSWORD
        }
    })
    //TODO: Add Validation
    const body = await useBody(event)

    const messageInfo = await transporter.sendMail({
        from: process.env.SMTPFROMUSER,
        to: process.env.SMTPTOUSERS,
        subject: "Contact Message Received",
        text: `Name: ${body.firstName} ${body.lastName}
               Email: ${body.email}
               Message: ${body.message}`, 
        html: `Name: ${body.firstName} ${body.lastName}
               Email: ${body.email}
               Message: ${body.message}`, 
    })

    return {
     success:true
    }
})

