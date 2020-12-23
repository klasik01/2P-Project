import nodemailer from 'nodemailer';

export const sendEmail = (values) => {

    nodemailer.createTransport({
        host: '',
        port: 587,
        secure: false,
        auth: {
            user: '',
            pass: ''
        }
    });

    console.log('Email values', { values });
};