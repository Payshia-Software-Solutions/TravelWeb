
"use client";

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from "@/hooks/use-toast";
import { LogIn } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z.string().min(1, { message: "Password is required." }),
});

export default function LoginPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(values);
    
    // In a real app, you would get a token from your auth server.
    // For now, we'll just set a flag in localStorage.
    localStorage.setItem('isLoggedIn', 'true');
    
    setIsSubmitting(false);
    
    toast({
      title: "Logged In!",
      description: "Welcome back!",
    });

    form.reset();
    router.push('/profile');
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 flex items-center justify-center min-h-[calc(100vh-5rem)] bg-white">
      <div className="w-full max-w-md bg-white">
        <Card className="shadow-lg bg-white">
          <CardHeader className="text-center">
            <LogIn className="mx-auto h-12 w-12 text-primary mb-4" />
            <CardTitle className="font-headline text-4xl">Login</CardTitle>
            <CardDescription className="text-lg">
              Access your account
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 ">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl className='bg-white'>
                        <Input type="email" placeholder="you@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem> 
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl className='bg-white'>
                        <Input type="password" placeholder="••••••••" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Logging in...' : 'Login'}
                </Button>
              </form>
            </Form>
            <div className="mt-6 text-center text-sm">
              <p className="text-muted-foreground">
                Don't have an account?{' '}
                <Link href="/signup" className="text-primary hover:underline font-semibold">
                  Sign up
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
