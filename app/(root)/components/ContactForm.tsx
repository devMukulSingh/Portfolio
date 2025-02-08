"use client";
import { motion } from "framer-motion";
import useSWRMutation from "swr/mutation";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import toast from "react-hot-toast";
const formSchema = z.object({
  fullName: z.string().trim().min(1, {
    message: "Name is required",
  }),
  email: z.string().email().min(1, {
    message: "Email is required",
  }),
  message: z.string().trim().min(20, {
    message: "Message must be minimum 20 characters",
  }),
});
type formValues = z.infer<typeof formSchema>;

async function sendMail(url:string, { arg }: {arg:formValues}) {
  return await axios.post(url, arg);
}
const ContactForm = () => {
  const form = useForm<formValues>({
    resolver: zodResolver(formSchema),
    defaultValues:{
      email:"",
      fullName:"",
      message:""
    }
  });
  const { trigger,isMutating } = useSWRMutation(`/api/send-mail`,sendMail,{
    onError(e){
      toast.error(`Something went wrong, please try again later`)
      console.log(`Error in sendMail`,e);
    },
    onSuccess(){
      form.reset();
      toast.success(`Message send`);
    }
  });
  const onSubmit = async (data: formValues) => { 
    try{
      // trigger(data) 
    }
    catch(e){
      console.log(`Error in onSubmit`,e);
      toast.error(`Something went wrong`)
    }
     
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: -200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="flex flex-col gap-10"
    >
      <h1 className="text-4xl sm:text-5xl font-medium">Write a Message🖋️</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            disabled={isMutating}
            name="fullName"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full name</FormLabel>
                <FormControl>
                  <Input placeholder="Mukul singh bisht" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            disabled={isMutating}
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="mukulsingh2276@gmail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            disabled={isMutating}
            name="message"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="Write a message..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            disabled={isMutating}
            className="border w-full"
            variant="ghost"
          >
            Send
          </Button>
        </form>
      </Form>
    </motion.div>
  );
};

export default ContactForm;
