
"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { ArrowRight, Info, MapPin, Search, Calendar as CalendarIcon, Users, Minus, Plus, ArrowLeft } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

function DiamondIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-primary"
    >
      <path d="M12 2L2 12l10 10 10-12L12 2z" />
    </svg>
  );
}


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
  const [fromDate, setFromDate] = useState<Date>();
  const [toDate, setToDate] = useState<Date>();
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);


  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const NumberInput = ({ label, value, onDecrement, onIncrement, description }: { label: string, value: number, onDecrement: () => void, onIncrement: () => void, description: string }) => (
    <div className="bg-muted/50 p-4 rounded-lg flex-1">
        <p className="font-semibold">{label}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="flex items-center justify-center gap-4 mt-2">
            <Button size="icon" variant="outline" onClick={onDecrement} disabled={value <= (label === 'Adults' ? 1 : 0)}>
                <Minus className="h-4 w-4" />
            </Button>
            <span className="text-lg font-bold w-8 text-center">{value}</span>
            <Button size="icon" variant="outline" onClick={onIncrement}>
                <Plus className="h-4 w-4" />
            </Button>
        </div>
    </div>
  );

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
          <div className="flex items-center justify-between mb-8">
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

          {currentStep === 2 && (
             <Card className="mb-8 bg-muted/30 border-dashed">
                <CardContent className="p-4 flex items-center gap-4">
                    <DiamondIcon className="h-5 w-5" />
                    <p className="text-sm text-muted-foreground">Please note that it will take a minimum of 4 days for your selected options to be processed.</p>
                </CardContent>
            </Card>
          )}

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
               {currentStep === 2 && (
                <div className="space-y-8">
                    <div>
                        <h2 className="text-2xl font-headline font-semibold flex items-center gap-2 mb-6">
                            <CalendarIcon className="text-primary" />
                            When do you plan to travel?
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button variant="outline" className={cn("justify-start text-left font-normal h-12", !fromDate && "text-muted-foreground")}>
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                        {fromDate ? format(fromDate, "MM/dd/yyyy") : <span>From</span>}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                    <Calendar mode="single" selected={fromDate} onSelect={setFromDate} initialFocus />
                                </PopoverContent>
                            </Popover>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button variant="outline" className={cn("justify-start text-left font-normal h-12", !toDate && "text-muted-foreground")}>
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                        {toDate ? format(toDate, "MM/dd/yyyy") : <span>To</span>}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                    <Calendar mode="single" selected={toDate} onSelect={setToDate} disabled={(date) => date < (fromDate || new Date())} initialFocus />
                                </PopoverContent>
                            </Popover>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-headline font-semibold flex items-center gap-2 mb-6">
                            <Users className="text-primary" />
                            Who are you traveling with?
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <button className="p-1">
                                            <Info className="h-4 w-4 text-muted-foreground" />
                                        </button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Specify the number of travelers.</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </h2>
                        <div className="flex flex-col md:flex-row gap-4">
                           <NumberInput label="Adults" description="18+ years" value={adults} onDecrement={() => setAdults(v => v > 1 ? v-1 : 1)} onIncrement={() => setAdults(v => v+1)} />
                           <NumberInput label="Children" description="2-17 years" value={children} onDecrement={() => setChildren(v => v > 0 ? v - 1 : 0)} onIncrement={() => setChildren(v => v + 1)} />
                           <NumberInput label="Infants" description="Under 2" value={infants} onDecrement={() => setInfants(v => v > 0 ? v - 1 : 0)} onIncrement={() => setInfants(v => v + 1)} />
                        </div>
                    </div>
                     <div className="flex justify-between mt-8">
                        <Button variant="outline" onClick={handleBack}>
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back
                        </Button>
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
