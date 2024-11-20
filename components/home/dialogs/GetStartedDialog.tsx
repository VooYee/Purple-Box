'use client'

// Library Import
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

// Components Import
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

// Schemas Import
import { getStartedFormSchema, getStartedFormSchemaType } from '@/lib/schemas'

const GetStartedDialog = ({
  isOpen,
  setIsOpen,
}:{
  isOpen: boolean,
  setIsOpen: (boolean: boolean) => void,
}) => {
  const form = useForm<getStartedFormSchemaType>({
    resolver: zodResolver(getStartedFormSchema),
    defaultValues: {
      name: '',
      companyName: '',
      website: '',
    }
  })

  function onSubmit(data: getStartedFormSchemaType) {
    console.log(data)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className='shadow-royal-purple bg-purple-950 border-2 border-purple-300'>
        <DialogHeader>
          <DialogTitle>
            <p className='font-gotham font-bold text-2xl text-white'>
              Get Started
            </p>
          </DialogTitle>
          <DialogDescription>
            <p className='font-gotham font-medium text-white'>
              Let&apos;s get you started with Purple Box
            </p>
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
            <FormField 
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem className='font-gotham font-medium text-white'>
                  <FormLabel>
                    Name
                  </FormLabel>
                  <FormControl>
                    <Input 
                      {...field} 
                      className='bg-purple-900 border-white/50 focus-visible:ring-transparent placeholder:text-white/75 placeholder:font-agrandir'
                      placeholder='Enter your name'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField 
              control={form.control}
              name='companyName'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='font-gotham font-medium text-white'>
                    Company Name
                  </FormLabel>
                  <FormControl>
                    <Input 
                      {...field} 
                      className='bg-purple-900 border-white/50 focus-visible:ring-transparent placeholder:text-white/75 placeholder:font-agrandir'
                      placeholder='Enter your company name'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField 
              control={form.control}
              name='website'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='font-gotham font-medium text-white'>
                    Website
                  </FormLabel>
                  <FormControl>
                    <Input 
                      {...field} 
                      className='bg-purple-900 border-white/50 focus-visible:ring-transparent placeholder:text-white/75 placeholder:font-agrandir'
                      placeholder='Enter your website'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type='submit' className='w-full bg-purple-600 hover:bg-purple-700' size={"lg"}>
              <span className='font-gotham font-medium text-white'>Get Started</span>
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default GetStartedDialog