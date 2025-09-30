
"use client";

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Mail, Phone, Home, Edit } from "lucide-react";
import type { Metadata } from 'next';

type UserProfile = {
  full_name: string;
  email: string;
  phone_number: string;
  address: string;
};

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<UserProfile | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (isLoggedIn === 'true' && storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Failed to parse user data from localStorage", error);
        handleLogout();
      }
    } else {
      router.push('/login');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
    router.push('/login');
  };

  if (!user) {
    return (
        <div className="flex items-center justify-center h-screen">
            <p>Loading...</p>
        </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white">
      <div className="max-w-2xl mx-auto bg-white">
        <Card className="shadow-lg bg-white">
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-4xl">{user.full_name}</CardTitle>
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
                  <Input id="fullName" value={user.full_name} readOnly />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <div className="w-full">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" value={user.email} readOnly />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <div className="w-full">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" value={user.phone_number} readOnly />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Home className="h-5 w-5 text-muted-foreground" />
                <div className="w-full">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" value={user.address} readOnly />
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
