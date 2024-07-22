import { Dispatch, FormEvent, SetStateAction, useEffect, useRef, useState } from "react";
import Laptop from "../assets/Laptop.jpg"

import emailjs from '@emailjs/browser';
import { IoMdCheckmarkCircle } from "react-icons/io";
import {AnimatePresence, motion} from "framer-motion"
import { Image } from "@unpic/react";

const SuccessMessage = ({open , setOpen } : {open:boolean , setOpen:Dispatch<SetStateAction<boolean>>})=>{

    useEffect(()=>{
        if(open){
            setTimeout(()=>{
                setOpen(false)
            } , 4000)
        }
    },[open])
    return (
        <AnimatePresence>
            {open &&<motion.div initial={{opacity:0 }} animate={{opacity:1}} exit={{opacity:0}} className="w-auto h-14 rounded-lg fixed top-2 right-1/2 px-3  translate-x-1/2 text-darkmain bg-light text-md flex items-center">
                <IoMdCheckmarkCircle  className="text-green-500"/>
                Email successfuly sent 🥳
            </motion.div>}
        </AnimatePresence>
    )
}
export default function Contact(){
    const formRef = useRef<HTMLFormElement>(null);
    const user_name = useRef<HTMLInputElement>(null);
    const user_email = useRef<HTMLInputElement>(null);
    const user_message = useRef<HTMLTextAreaElement>(null);
    const [submitting , setSubmitting] = useState(false)

    const [open , setOpen] = useState(false)
    const sendEmail = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitting(true)
        if(!user_email.current?.value || !user_message.current?.value || !user_name.current?.value){
            return 
        }
        if(formRef .current){

            emailjs
              .sendForm('service_gx6vcos', 'template_4lc4l1t', formRef.current, {
                publicKey:'GYMGk_s0qp26_PCti'
              })
              .then(
                () => {
                  setOpen(true)
                  if(user_name.current){
                      user_name.current.value =''
                  }
                  if(user_email.current){
                      user_email.current.value =''
                  }
                  if(user_message.current){
                      user_message.current.value =''
                  }
                  setSubmitting(false)
                },
                (error) => {
                  console.log('FAILED...', error.text);
                  setSubmitting(false)
                },
              );
        }
      };
    
    return(
        <div id="contact" className="w-full border-b xs:py-0 py-5 xs:h-screen min-h-screen border-t flex border-dashed border-light/10">
            <div className="flex-1  px-5">
                <h1 className="md:text-5xl sm:text-4xl text-3xl  text-light mt-3">Contact Me👇</h1>
                <form ref={formRef} onSubmit={sendEmail} className="mt-5 px-5">
                    <label  className="font-bold text-md sm:text-lg">
                        Name
                    </label>
                    <br />
                    <input ref={user_name} name="user_name" type="text" placeholder="John,Mahmoud,Mohammed or etc.." className="lg:w-3/4 w-full text-xs sm:text-sm bg-warmmain border-light mt-1 border h-12 rounded-xl pl-3" />
                    <br />
                    <br />
                    <label  className="font-bold text-md sm:text-lg">
                        Email
                    </label>
                    <br />
                    <input ref={user_email} name='user_email' type="text" placeholder="example@example.com" className="lg:w-3/4 w-full text-xs sm:text-sm bg-warmmain border-light mt-1 border h-12 rounded-xl pl-3" />
                    <br />
                    <br />
                    <label  className="font-bold text-md sm:text-lg mt-3">
                        Message
                    </label>
                    <br />
                    <textarea ref={user_message} name="message" placeholder="example@example.com" className="lg:w-3/4 w-full h-32 text-xs sm:text-sm bg-warmmain border-light mt-1 border resize-x-none rounded-xl p-3" />
                    <br />
                    <br />
                        <button disabled={submitting} type="submit" className="lg:w-3/4 w-full py-2 disabled:opacity-70 bg-light hover:bg-slate-300 effect text-darkmain rounded-lg ">{submitting? "Processing.." :"Submit"}</button>
                </form>
            </div>
            <Image width={416} height={1080} loading="lazy" background="blur" src={Laptop} className="w-auto border-l-2 border-lightmain lg:flex hidden max-h-screen object-contain"/>
            <SuccessMessage open={open} setOpen={setOpen}/>
        </div>
    )
}