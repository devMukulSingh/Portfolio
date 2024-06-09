'use client'

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const ContactForm = () => {
    const formSchema = z.object({
        fullName:z.string().trim().min(1,{
            message:'Name is required'
        }),
        email:z.string().email().min(1,{
            message:'Email is required'
        }),
        message:z.string().trim().min(20,{
            message : 'Message must be minimum 20 characters'
        })
    })
    type formValues = z.infer<typeof formSchema>;
    const form = useForm<formValues>({
      resolver: zodResolver(formSchema),
    });
    const onSubmit = (data:formValues ) => {
        console.log(data);
    }
  return (
    <div className="flex flex-col gap-10">
        <h1 className="text-4xl font-medium">
            Write a Message🖋️
        </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
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
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your email</FormLabel>
                <FormControl>
                  <Input placeholder="mukulsingh2276@gmail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
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
            className="border w-full" 
            variant="ghost">
            Send
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default ContactForm