
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
interface emailBody{
   name:string,
   email:string,
   message:string
}
export const POST=async(req:Request)=>{
    try {
       const body:emailBody=await req.json()
       const {name,email,message} = body
       const transporter=nodemailer.createTransport({
       service:'gmail',
       auth:{
        user:process.env.EMAIL_USER as string,
        pass:process.env.EMAIL_PASSWORD as string
       }
       })
       const mailOptions={
        from:name,
        to:'mirmuniruzzaman303@gmail.com',
        subject:`New Email Submission from ${name}`,
        text:`Sender Name:${name }\n Sender Email:${email  }\n\n Message:${message}`
       }
       await transporter.sendMail(mailOptions)
       return NextResponse.json({
        success:true,
        message:'email has been sent'
       })
    } catch (error) {
       return NextResponse.json({
        success:false,
        message:'data is not created',
        error
       })
    }
}

//front-end code in email.tsx file