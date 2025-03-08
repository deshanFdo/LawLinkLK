import bcrypt from "bcrypt";
import Lawyer from "../models/lawyer.model.js";
import generateToken from "../utills/generateToken.js";
import transporter from "../config/nodemailer.js";
import sodium from "libsodium-wrappers";

import dotenv from "dotenv";
import multer from "multer";
import path from "path";

dotenv.config();

function generateUniqueLawyerID() {
    return  'LAWYER-' + Math.random().toString(36).substr(2, 9).toUpperCase();
}
const lawyerID = generateUniqueLawyerID();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() +"-" + lawyerID + path.extname(file.originalname)); 
    }
});

const upload = multer({ storage: storage }).single('documentForVerification');

export const signup = async (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            return res.status(400).json({ msg: "File upload failed" });
        }

        try {
            const { fullName, password, confirmPassword, email, contact } = req.body;
            const documentForVerification = req.file ? req.file.path : "";

            if (password !== confirmPassword) {
                return res.status(400).json({ msg: "Passwords do not match" });
            }

            const existingLawyer = await Lawyer.findOne({ email });
            if (existingLawyer) {
                return res.status(400).json({ msg: "User already exists" });
            }

            const hashedPassword = await bcrypt.hash(password, 10);
            const username = fullName.toLowerCase().replace(/\s+/g, "");

            const otp = String(Math.floor(100000 + Math.random() * 900000));

            await sodium.ready;
        const keyPair = sodium.crypto_box_keypair();
        const publicKey = sodium.to_hex(keyPair.publicKey);
        const privateKey = sodium.to_hex(keyPair.privateKey);


    
            const newLawyer = new Lawyer({
                lawyerID,
                fullName,
                username,
                password: hashedPassword,
                email,
                contact,
                documentForVerification,
                verifyotp: otp,
                verifyOtpExpires: Date.now() + 5 * 60 * 1000,
                publicKey,
                privateKey,
            });

            await newLawyer.save();
            const savedLawyer = await Lawyer.findById(newLawyer._id);

            const mailOptions = {
                from: process.env.SENDER_EMAIL,
                to: email,
                subject: "Welcome to LawLink LK - Verify your email",
                html: `
                    <div style="text-align: center; margin: 10px 0;">
                        <img src="https://i.ibb.co/Tq6mb2M/img1.png" 
                            alt="LawLink LK Header Image" 
                            style="max-width: 100%; max-width: 640px; height: auto; border-radius: 10px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);">
                    </div>

                    <div style="background-color:rgb(232, 250, 255); padding: 40px 20px; font-family: 'Arial', sans-serif; color: #333; max-width: 600px; margin: 0 auto; border-radius: 10px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);">
                        <div>
                            <h2 style="color: #1e90ff; font-size: 28px;">Hi ${newLawyer.fullName},</h2>
                            <p style="font-size: 16px; color: #555;">
                                Welcome to <b>LawLink LK!</b><br>
                                Thank you for registering with us. To complete the account creation process, please use the OTP below:
                            </p>
                            <div style="font-size: 32px; font-weight: bold; color:rgb(81, 0, 255); background-color: #fff; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center;">
                                ${otp}
                            </div>
                            <p style="font-size: 14px; color: #777;">
                                This OTP will expire in <strong>2 minutes</strong> After that, it will expire, and you will need to request a new one.
                            </p>
            
                            <p style="font-size: 14px; color: #777; margin-top: 20px; ">
                                <b>How to verify:</b><br>
                                1. Enter the OTP in the verification field.<br>
                                2. Complete the process to finish verifying your account.
                            </p>
            
                            <p style="font-size: 14px; color: #555; margin-top: 20px;">
                                If you didn’t request this, please ignore this email. Your account remains safe.
                            </p>
            
                            <div style="margin-top: 30px; border-top: 1px solid #ddd; padding-top: 20px;">
                                <p style="font-size: 16px; color: #555;">
                                    If you need further assistance, contact us at
                                    <a href="mailto:support@lawlinklk.com" style="color: #1e90ff; text-decoration: none;">support@lawlinklk.com</a>.
                                </p>
                                <p style="font-size: 14px; color: #777;">Best regards,<br><b>LawLink LK Team</b><br>
                                    Visit us at <a href="https://www.lawlinklk.com" style="color: #1e90ff; text-decoration: none;">www.lawlinklk.com</a>
                                </p>
                            </div>
            
                            <img src="https://i.ibb.co/sHkgFsX/lawlink-hori-copy.png" alt="LawLink LK" style="width: 200px; margin-top: 20px;">
                        </div>
                    </div>
                `,
            };

            await transporter.sendMail(mailOptions);

            res.status(201).json({
                _id: savedLawyer._id, // Fixed variable name (savedUser → savedLawyer)
                fullName: savedLawyer.fullName,
                username: savedLawyer.username,
                msg: "User created successfully. Please check your email for the OTP.",
            });
        } catch (err) {
            console.error("Error in signup controller:", err.message);
            res.status(500).json({ msg: "Something went wrong" });
        }
    });
};

export const login = async(req, res) => {
    try{
        const { email, password } = req.body;
        const lawyer = await Lawyer.findOne({ email });
        if(!lawyer){
            return res.status(400).json({ msg: "User does not exist" });
        }
        const isMatch = await bcrypt.compare(password, lawyer.password);
        if(!isMatch){
            return res.status(400).json({ msg: "Invalid credentials" });
        }

        generateToken(lawyer._id, res);   

        if(!lawyer.isVerified){
            return res.status(400).json({ msg: "User does not verified" });
        }

        res.status(200).json({
            _id: lawyer._id,
            fullName: lawyer.fullName,
            username: lawyer.username,
            msg: "Logged in successfully",
        });
    }
    catch(err){
        console.error("Error in login controller:", err.message);
        res.status(500).json({ msg: "Something went wrong" });
    }   
    
};

export const logout = (req, res) => {
   try{
         res.clearCookie("jwt");
         res.status(200).json({ msg: "Logged out successfully" }); 
    }catch(err){
       console.error("Error in logout controller:", err.message);
       res.status(500).json({ msg: "Something went wrong" });
   }
};
export const sendVerifyOtp = async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ msg: "Missing email" });
    }

    try {
        const lawyer = await Lawyer.findOne({ email });

        if (!lawyer) {
            return res.status(400).json({ msg: "User does not exist" });
        }

        const otp = String(Math.floor(100000 + Math.random() * 900000));

        lawyer.verifyotp = otp;
        lawyer.verifyOtpExpires = Date.now() + 2 * 60 * 1000;

        await lawyer.save();

        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: lawyer.email,
            subject: "Welcome to LawLink LK - Verify your email - New OTP",
            html: `
             <            <div style="text-align: center; margin: 10px 0;">
                <img src="https://i.ibb.co/Tq6mb2M/img1.png" 
                    alt="LawLink LK Header Image" 
                    style="max-width: 100%; max-width: 640px; height: auto; border-radius: 10px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);">
            </div>

            <div style="background-color:rgb(232, 250, 255); padding: 40px 20px; font-family: 'Arial', sans-serif; color: #333; max-width: 600px; margin: 0 auto; border-radius: 10px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);">
               
                <div >
                    <h2 style="color: #1e90ff; font-size: 28px;">Hi ${lawyer.fullName},</h2>
                    <p style="font-size: 16px; color: #555;">
                        Welcome to <b>LawLink LK!</b><br>
                        Here is your new one-time password (OTP) for account creation process:
                    </p>
                    <div style="font-size: 32px; font-weight: bold; color:rgb(81, 0, 255); background-color: #fff; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center;">
                        ${otp}
                    </div>
                    <p style="font-size: 14px; color: #777;">
                        This OTP will expire in <strong>5 minutes</strong> After that, it will expire, and you will need to request a new one.
                    </p>
        
                    <p style="font-size: 14px; color: #777; margin-top: 20px; ">
                        <b>How to verify:</b><br>
                        1. Enter the OTP in the verification field.<br>
                        2. Complete the process to finish verifying your account.
                    </p>
        
                    <p style="font-size: 14px; color: #555; margin-top: 20px;">
                        If you didn’t request this, please ignore this email. Your account remains safe.
                    </p>
        
                    <div style="margin-top: 30px; border-top: 1px solid #ddd; padding-top: 20px;">
                        <p style="font-size: 16px; color: #555;">
                            If you need further assistance, contact us at
                            <a href="mailto:support@lawlinklk.com" style="color: #1e90ff; text-decoration: none;">support@lawlinklk.com</a>.
                        </p>
                        <p style="font-size: 14px; color: #777;">Best regards,<br><b>LawLink LK Team</b><br>
                      
                            Visit us at <a href="https://www.lawlinklk.com" style="color: #1e90ff; text-decoration: none;">www.lawlinklk.com</a>
                        </p>
                    </div>
        
                    <img src="https://i.ibb.co/sHkgFsX/lawlink-hori-copy.png" alt="LawLink LK" style="width: 200px; margin-top: 20px;">
                </div>
            </div>
            `,
        };
        
        await transporter.sendMail(mailOptions);
        

        res.status(200).json({ msg: "Otp sent successfully" });
       

    }catch(error){
        console.error("Error in sendRestPasswordOtp controller:", error.message);
        res.status(500).json({msg: "Something went wrong"});
    }
};

export const verifyEmail = async (req, res) => {
    const { email, otp } = req.body;

    if (!email || !otp) {
        return res.status(400).json({ msg: "Missing userId or otp" });
    }

    try {
        
        const lawyer = await Lawyer.findOne({ email });

        if (!lawyer) {
            return res.status(400).json({ msg: "User does not exist" });
        }

        if (lawyer.verifyotp !== otp) {
            return res.status(400).json({ msg: "Invalid otp" });
        }

        if (lawyer.verifyOtpExpires < Date.now()) {
            return res.status(400).json({ msg: "Otp has expired" });
        }

        lawyer.isVerified = true;
        lawyer.verifyotp = '';
        lawyer.verifyOtpExpires = 0;

        await lawyer.save();

      

        try{
            res.status(200).json({msg: "User is authenticated"});
        }catch(error){
            console.error("Error in isAuthenticated controller:", error.message);
            res.status(500).json({msg: "Something went wrong"});
        }

    } catch (err) {
        console.error("Error in verifyEmail controller:", err.message);
        res.status(500).json({ msg: "Something went wrong" });
        }
};


export const sendRestPasswordOtp = async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ msg: "Missing email" });
    }

    try {
        const lawyer = await Lawyer.findOne({ email });

        if (!lawyer) {
            return res.status(400).json({ msg: "User does not exist" });
        }

        const otp = String(Math.floor(100000 + Math.random() * 900000));

        lawyer.resetOtp = otp;
        lawyer.resetOtpExpires = Date.now() + 2 * 60 * 1000;

        await lawyer.save();

        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: lawyer.email,
            subject: "Reset your password",
            html: `
             <div style="text-align: center; margin: 10px 0;">
                <img src="https://i.ibb.co/Tq6mb2M/img1.png" 
                    alt="LawLink LK Header Image" 
                    style="max-width: 100%; max-width: 640px; height: auto; border-radius: 10px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);">
            </div>

            <div style="background-color:rgb(239, 247, 249); padding: 40px 20px; font-family: 'Arial', sans-serif; color: #333; max-width: 600px; margin: 0 auto; border-radius: 10px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);">
                <div style="text-align: center;">
                    <h2 style="color:rgb(2, 30, 57); font-size: 28px;">Hi ${lawyer.fullName},</h2>
                    <p style="font-size: 16px; color: #555;">
                        We received a request to reset your password. To proceed, please use the OTP below:
                    </p>
                    <div style="font-size: 32px; font-weight: bold; color:rgb(0, 8, 255); background-color: #fff; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        ${otp}
                    </div>
                    <p style="font-size: 14px; color: #777;">
                        This OTP will expire in <strong>2 minutes</strong>. Please use it before it expires.
                    </p>
        
                    <p style="font-size: 14px; color: #777; margin-top: 20px;">
                        <b>How to reset your password:</b><br>
                        1. Enter the OTP in the reset password field.<br>
                        2. Choose your new password and complete the process.
                    </p>
        
                    <p style="font-size: 14px; color: #555; margin-top: 20px;">
                        If you didn’t request a password reset, please ignore this email. Your account remains safe.
                    </p>
        
                    <div style="margin-top: 30px; border-top: 1px solid #ddd; padding-top: 20px;">
                        <p style="font-size: 16px; color: #555;">
                            For any help, contact our support team at
                            <a href="mailto:support@lawlinklk.com" style="color: #1e90ff; text-decoration: none;">support@lawlinklk.com</a>.
                        </p>
                        <p style="font-size: 14px; color: #777;">Best regards,<br><b>LawLink LK Team</b><br>
                      
                            Visit us at <a href="https://www.lawlinklk.com" style="color: #1e90ff; text-decoration: none;">www.lawlinklk.com</a>
                        </p>
                    </div>
        
                    <img src="https://i.ibb.co/sHkgFsX/lawlink-hori-copy.png" alt="LawLink LK" style="width: 200px; margin-top: 20px;">
                </div>
            </div>
            `,
        };
        
        await transporter.sendMail(mailOptions);
        

        res.status(200).json({ msg: "Otp sent successfully" });
       

    }catch(error){
        console.error("Error in sendRestPasswordOtp controller:", error.message);
        res.status(500).json({msg: "Something went wrong"});
    }
};

export const resetPassword = async (req, res) => {
    const { email, otp } = req.body;

    if (!email || !otp ) {
        return res.status(400).json({ msg: "Missing fields" });
    }

    

    try {
        const lawyer = await Lawyer.findOne({ email });

        if (!lawyer) {
            return res.status(400).json({ msg: "User does not found" });
        }

        if (lawyer.resetOtp !== otp || lawyer.resetOtp === '') {
            return res.status(400).json({ msg: "Invalid otp" });
        }

        if (lawyer.resetOtpExpires < Date.now()) {
            return res.status(400).json({ msg: "Otp has expired" });
        }

      

    } catch (err) {
        console.error("Error in resetPassword controller:", err.message);
        res.status(500).json({ msg: "Something went wrong" });
        }
        
    }

export const newPassword = async (req, res) => {
        try {
            const { email, newPassword } = req.body;
            
            if (!email || !newPassword) {
                return res.status(400).json({ msg: "Missing required fields" });
            }
    
            const lawyer = await Lawyer.findOne({ email });
    
            if (!lawyer) {
                return res.status(400).json({ msg: "User not found" });
            }
    
            const hashedPassword = await bcrypt.hash(newPassword, 10);
    
            lawyer.password = hashedPassword;
            lawyer.resetOtp = '';
            lawyer.resetOtpExpires = 0;
    
            await lawyer.save();
    
            res.status(200).json({ msg: "Password reset successfully" });
        } catch (error) {
            console.error("Error in newPassword controller:", error);
            res.status(500).json({ msg: "Something went wrong" });
        }
    };
