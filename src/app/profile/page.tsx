
"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Mail, Phone, Home, Edit } from "lucide-react";
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    router.push('/login');
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white">
      <div className="max-w-2xl mx-auto bg-white">
        <Card className="shadow-lg bg-white">
          <CardHeader className="text-center">
            <Avatar className="mx-auto h-24 w-24 mb-4 border-4 border-primary">
              <AvatarImage src="https://placehold.co/100x100.png" alt="User avatar" data-ai-hint="person portrait" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <CardTitle className="font-headline text-4xl">John Doe</CardTitle>
            <CardDescription className="text-lg">
              Welcome to your profile
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">Your Details</h3>
                <Button variant="ghost" size="icon">
                    <Edit className="h-5 w-5" />
                </Button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <User className="h-5 w-5 text-muted-foreground" />
                <div className="w-full">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input id="fullName" defaultValue="John Doe" readOnly />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <div className="w-full">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" defaultValue="john.doe@example.com" readOnly />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <div className="w-full">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" defaultValue="+1234567890" readOnly />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Home className="h-5 w-5 text-muted-foreground" />
                <div className="w-full">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" defaultValue="123 Main St, Anytown" readOnly />
                </div>
              </div>
            </div>
            <Button className="w-full" variant="destructive" onClick={handleLogout}>Log Out</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
