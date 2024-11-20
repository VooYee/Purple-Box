'use client'

// Library Import
import React, { useState } from 'react'
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
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

// Schemas Import
import { schedulaDemoFormSchema, schedulaDemoFormSchemaType } from '@/lib/schemas'
import { CalendarIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'

const ScheduleDemoDialog = ({
  isOpen,
  setIsOpen
}:{
  isOpen: boolean,
  setIsOpen: (boolean: boolean) => void
}) => {
  const [date, setDate] = useState<Date>()

  const form = useForm<schedulaDemoFormSchemaType>({
    resolver: zodResolver(schedulaDemoFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      date: new Date()
    }
  })

  function onSubmit(data: schedulaDemoFormSchemaType) {
    console.log(data)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className='shadow-royal-purple bg-purple-950 border-2 border-purple-300'>
        <DialogHeader>
          <DialogTitle>
            <span className='font-gotham font-bold text-2xl text-white'>
              Get Started
            </span>
          </DialogTitle>
          <DialogDescription>
            <span className='font-gotham font-medium text-white'>
              Let&apos;s get you started with Purple Box
            </span>
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
            <FormField 
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem className='font-gotham font-medium'>
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
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='font-gotham font-medium'>
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input 
                      {...field} 
                      className='bg-purple-900 border-white/50 focus-visible:ring-transparent placeholder:text-white/75 placeholder:font-agrandir'
                      placeholder='Enter your email'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField 
              control={form.control}
              name='phone'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='font-gotham font-medium'>
                    Website
                  </FormLabel>
                  <FormControl>
                    <Input 
                      {...field} 
                      className='bg-purple-900 border-white/50 focus-visible:ring-transparent placeholder:text-white/75 placeholder:font-agrandir'
                      placeholder='Enter your phone number'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField 
              control={form.control}
              name='phone'
              render={() => (
                <FormItem className='flex flex-col items-start gap-y-2'>
                  <FormLabel className='font-gotham font-medium'>
                    Pick a Date & Time
                  </FormLabel>
                  <FormControl>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal bg-purple-900 hover:bg-purple-800 text-white hover:text-white border-white/50 placeholder:text-white/75 placeholder:font-agrandir",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4 text-white/75" />
                          {date ? format(date, "PPP") : <span className='text-white/75'>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type='submit' className='w-full bg-purple-600 hover:bg-purple-700' size={"lg"}>
              <span className='font-gotham font-medium'>Get Started</span>
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default ScheduleDemoDialog