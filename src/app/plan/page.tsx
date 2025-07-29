
"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { ArrowRight, Info, MapPin, Search } from 'lucide-react';

const steps = [
  { id: 1, name: 'Destination' },
  { id: 2, name: 'Dates' },
  { id: 3, name: 'Travelers' },
  { id: 4, name: 'Interests' },
  { id: 5, name: 'Pace' },
  { id: 6, name: 'Budget' },
  { id: 7, name: 'Finish' },
];

export default function PlanPage() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">
            Let's Start Planning Your Adventure!
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Tell us about your dream destination and we'll create a personalized itinerary just for you
          </p>
        </div>

        <div className="max-w-4xl mx-auto mt-12">
          {/* Stepper */}
          <div className="flex items-center justify-between mb-12">
            {steps.map((step, index) => (
              <React.Fragment key={step.id}>
                <div className="flex flex-col items-center">
                  <div
                    className={cn(
                      'w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300',
                      currentStep >= step.id ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                    )}
                  >
                    {step.id}
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className={cn(
                    "flex-1 h-0.5 transition-colors duration-300",
                    currentStep > step.id ? 'bg-primary' : 'bg-muted'
                  )}></div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Step Content */}
          <Card className="shadow-lg">
            <CardContent className="p-8">
              {currentStep === 1 && (
                <div>
                  <h2 className="text-2xl font-headline font-semibold flex items-center gap-2 mb-6">
                    <MapPin className="text-primary" />
                    Where do you want to go?
                  </h2>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Search destinations (e.g., Kandy, Sigiriya)"
                      className="pl-10 text-base"
                    />
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                    <Info className="h-4 w-4" />
                    <span>Start typing to see destination suggestions</span>
                  </div>
                  <div className="flex justify-end mt-8">
                    <Button onClick={handleNext}>
                      Continue <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
