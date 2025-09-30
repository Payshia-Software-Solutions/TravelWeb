
"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from "@/hooks/use-toast";
import { Calendar as CalendarIcon, Send, User, Image as ImageIcon } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';
import type { Metadata } from 'next';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  date: z.date({
    required_error: "A date is required.",
  }),
  description: z.string().min(10, { message: "Description must be at least 10 characters." }).max(500, { message: "Description cannot exceed 500 characters." }),
  profileImage: z.instanceof(File).optional(),
  backgroundImage: z.instanceof(File).optional(),
});
const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

export default function FeedbackPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('travel_date', format(values.date, 'yyyy-MM-dd'));
    formData.append('description', values.description);
    
    if (values.profileImage) {
      formData.append('profile_image', values.profileImage);
    }
    if (values.backgroundImage) {
      formData.append('background_image', values.backgroundImage);
    }

    try {
      const response = await fetch(`${SERVER_URL}feedback`, {
        method: 'POST',
        body: formData,
        // Do not set Content-Type header for multipart/form-data, the browser will do it.
      });

      if (!response.ok) {
        let errorData;
        try {
            errorData = await response.json();
        } catch (e) {
            // If response is not JSON, use the raw text
            const textError = await response.text();
            throw new Error(textError || `HTTP error! status: ${response.status}`);
        }
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }
      
      toast({
        title: "Feedback Sent!",
        description: "Thank you for your valuable feedback. It will appear on the site after approval.",
      });

      form.reset();
      router.push('/');

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <User className="mx-auto h-12 w-12 text-primary mb-4" />
            <CardTitle className="font-headline text-4xl">Share Your Experience</CardTitle>
            <CardDescription className="text-lg">
              We'd love to hear about your journey with us!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Date of Travel</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Feedback</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Tell us about your experience..." className="min-h-[150px]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                    control={form.control}
                    name="profileImage"
                    render={({ field: { onChange, value, ...rest } }) => (
                        <FormItem>
                        <FormLabel>Your Profile Image</FormLabel>
                        <FormControl>
                            <div className="flex items-center gap-2">
                                <ImageIcon className="h-5 w-5 text-muted-foreground" />
                                <Input 
                                  type="file" 
                                  accept="image/*" 
                                  onChange={(e) => onChange(e.target.files?.[0])}
                                  {...rest}
                                />
                            </div>
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="backgroundImage"
                    render={({ field: { onChange, value, ...rest } }) => (
                        <FormItem>
                        <FormLabel>A Background Image</FormLabel>
                        <FormControl>
                            <div className="flex items-center gap-2">
                                <ImageIcon className="h-5 w-5 text-muted-foreground" />
                                <Input 
                                  type="file" 
                                  accept="image/*" 
                                  onChange={(e) => onChange(e.target.files?.[0])} 
                                  {...rest}
                                />
                            </div>
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    'Submitting...'
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Submit Feedback
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
