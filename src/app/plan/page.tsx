
"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { ArrowRight, Info, MapPin, Search, Calendar as CalendarIcon, Users, Minus, Plus, ArrowLeft, Check } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Image from 'next/image';

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

const interests = [
    { name: 'Adventure', image: 'https://placehold.co/400x500.png', aiHint: 'river rafting' },
    { name: 'Culture', image: 'https://placehold.co/400x500.png', aiHint: 'traditional dancer' },
    { name: 'Relaxation', image: 'https://placehold.co/400x500.png', aiHint: 'woman relaxing' },
    { name: 'Food', image: 'https://placehold.co/400x500.png', aiHint: 'food platter' },
    { name: 'City Exploration', image: 'https://placehold.co/400x500.png', aiHint: 'city skyline' },
    { name: 'Nature', image: 'https://placehold.co/400x500.png', aiHint: 'mountain landscape' },
];

const adventureActivities = [
  { name: 'Rafting', location: 'Anuradapura', image: 'https://placehold.co/400x300.png', aiHint: 'river rafting' },
  { name: 'Surfing', location: 'Anuradapura', image: 'https://placehold.co/400x300.png', aiHint: 'surfing wave' },
  { name: 'Hiking', location: 'Anuradapura', image: 'https://placehold.co/400x300.png', aiHint: 'hiking trail' },
  { name: 'Adventure Zone', location: 'Anuradapura', image: 'https://placehold.co/400x300.png', aiHint: 'zip line' },
];

const culturalActivities = [
  { name: 'Dance Show', location: 'Anuradapura', image: 'https://placehold.co/400x300.png', aiHint: 'traditional dance' },
  { name: 'Village Food', location: 'Anuradapura', image: 'https://placehold.co/400x300.png', aiHint: 'sri lankan food' },
];

const accommodationTypes = [
  { name: 'Hotel', image: 'https://placehold.co/400x300.png', aiHint: 'luxury hotel' },
  { name: 'Resort', image: 'https://placehold.co/400x300.png', aiHint: 'beach resort' },
  { name: 'Rental', image: 'https://placehold.co/400x300.png', aiHint: 'vacation rental' },
  { name: 'Village Home', image: 'https://placehold.co/400x300.png', aiHint: 'village house' },
  { name: 'Camping', image: 'https://placehold.co/400x300.png', aiHint: 'camping tent' },
];

const budgetRanges = [
    'Less than RON. 3000',
    'RON. 3000-5000',
    'RON. 5000-8000',
    'RON. 8000-10,000',
    'RON. 10,000 to Above',
];

const amenities = [
  { name: 'Free WiFi', image: 'https://placehold.co/200x200.png', aiHint: 'wifi symbol' },
  { name: 'Pool', image: 'https://placehold.co/200x200.png', aiHint: 'swimming pool' },
  { name: 'Parking', image: 'https://placehold.co/200x200.png', aiHint: 'parking sign' },
  { name: 'Breakfast', image: 'https://placehold.co/200x200.png', aiHint: 'breakfast food' },
  { name: 'Pet-friendly', image: 'https://placehold.co/200x200.png', aiHint: 'dog cat' },
  { name: 'Gym', image: 'https://placehold.co/200x200.png', aiHint: 'gym equipment' },
];

export default function PlanPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [fromDate, setFromDate] = useState<Date>();
  const [toDate, setToDate] = useState<Date>();
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
  const [selectedAccommodation, setSelectedAccommodation] = useState<string | null>(null);
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);


  const toggleInterest = (interestName: string) => {
    setSelectedInterests(prev => 
      prev.includes(interestName) 
        ? prev.filter(item => item !== interestName)
        : [...prev, interestName]
    );
  };
  
  const toggleActivity = (activityName: string) => {
    setSelectedActivities(prev =>
      prev.includes(activityName)
        ? prev.filter(item => item !== activityName)
        : [...prev, activityName]
    );
  };

  const toggleAmenity = (amenityName: string) => {
    setSelectedAmenities(prev =>
      prev.includes(amenityName)
        ? prev.filter(item => item !== amenityName)
        : [...prev, amenityName]
    );
  };

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
  
  const ActivityCard = ({ name, location, image, aiHint, isSelected, onSelect }: { name: string, location: string, image: string, aiHint: string, isSelected: boolean, onSelect: () => void }) => (
    <Card
      className={cn(
        "relative rounded-lg overflow-hidden cursor-pointer group border-2",
        isSelected ? 'border-primary' : 'border-transparent'
      )}
      onClick={onSelect}
    >
      <Image src={image} alt={name} width={400} height={300} className="h-48 w-full object-cover group-hover:scale-105 transition-transform" data-ai-hint={aiHint} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute top-2 right-2 w-6 h-6 rounded-full border-2 border-white bg-white/30 flex items-center justify-center">
        {isSelected && <Check className="h-4 w-4 text-white" />}
      </div>
      <div className="absolute bottom-0 left-0 p-4 text-white">
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-sm flex items-center gap-1"><MapPin className="h-3 w-3" /> {location}</p>
      </div>
    </Card>
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

          {(currentStep >= 2 && currentStep <= 5) && (
             <Card className="mb-8 bg-muted/30 border-dashed">
                <CardContent className="p-4 flex items-center gap-4">
                    <DiamondIcon className="h-5 w-5" />
                    <p className="text-sm text-muted-foreground">
                        {currentStep === 2 && "Please note that it will take a minimum of 4 days for your selected options to be processed."}
                        {currentStep === 3 && "Select any ind of activity category and then you can choose specific activities in Next Step."}
                        {currentStep === 4 && "Select any ind of activities you want to Experience. (This suggestions based on Previous categories you chosen)"}
                        {currentStep === 5 && "Select any type accommodation and amenities."}
                    </p>
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
               {currentStep === 3 && (
                <div>
                  <h2 className="text-2xl font-headline font-semibold mb-2">What do you want to do?</h2>
                  <p className="text-muted-foreground mb-6">Select the activities you're most interested in. This helps us tailor your trip to your preferences.</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {interests.map((interest) => (
                      <Card 
                        key={interest.name} 
                        className={cn(
                          "relative rounded-lg overflow-hidden cursor-pointer group border-2",
                          selectedInterests.includes(interest.name) ? 'border-primary' : 'border-transparent'
                        )}
                        onClick={() => toggleInterest(interest.name)}
                      >
                        <Image src={interest.image} alt={interest.name} width={400} height={500} className="h-48 w-full object-cover group-hover:scale-105 transition-transform" data-ai-hint={interest.aiHint} />
                        <div className="absolute inset-0 bg-black/40" />
                        <div className="absolute top-2 right-2 w-6 h-6 rounded-full border-2 border-white bg-white/30 flex items-center justify-center">
                          {selectedInterests.includes(interest.name) && <Check className="h-4 w-4 text-white" />}
                        </div>
                        <div className="absolute bottom-0 left-0 p-4">
                          <h3 className="text-white font-bold text-lg">{interest.name}</h3>
                        </div>
                      </Card>
                    ))}
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
              {currentStep === 4 && (
                <div>
                  <h2 className="text-2xl font-headline font-semibold mb-2">What do you want to Experience?</h2>
                  <p className="text-muted-foreground mb-6">Select the activities you're most interested in. This helps us tailor your trip to your preferences.</p>
                  
                  <div className="space-y-8">
                    {selectedInterests.includes('Adventure') && (
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Adventure Activities</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {adventureActivities.map((activity) => (
                                <ActivityCard 
                                    key={activity.name}
                                    {...activity}
                                    isSelected={selectedActivities.includes(activity.name)}
                                    onSelect={() => toggleActivity(activity.name)}
                                />
                                ))}
                            </div>
                        </div>
                    )}
                    
                    {selectedInterests.includes('Culture') && (
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Cultural Activities</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {culturalActivities.map((activity) => (
                                <ActivityCard 
                                    key={activity.name}
                                    {...activity}
                                    isSelected={selectedActivities.includes(activity.name)}
                                    onSelect={() => toggleActivity(activity.name)}
                                />
                                ))}
                            </div>
                        </div>
                    )}
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
              {currentStep === 5 && (
                <div className="space-y-8">
                   <div>
                        <h2 className="text-2xl font-headline font-semibold mb-2">Where to Stay?</h2>
                        <p className="text-muted-foreground mb-6">Select what kind of accommodation do you want.</p>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                            {accommodationTypes.map((type) => (
                                <Card 
                                    key={type.name} 
                                    className={cn(
                                        "relative rounded-lg overflow-hidden cursor-pointer group border-2",
                                        selectedAccommodation === type.name ? 'border-primary' : 'border-transparent'
                                    )}
                                    onClick={() => setSelectedAccommodation(type.name)}
                                >
                                    <Image src={type.image} alt={type.name} width={400} height={300} className="h-32 w-full object-cover group-hover:scale-105 transition-transform" data-ai-hint={type.aiHint} />
                                    <div className="absolute inset-0 bg-black/40" />
                                     <div className="absolute top-2 right-2 w-6 h-6 rounded-full border-2 border-white bg-white/30 flex items-center justify-center">
                                        {selectedAccommodation === type.name && <Check className="h-4 w-4 text-white" />}
                                    </div>
                                    <div className="absolute bottom-0 left-0 p-2">
                                        <h3 className="text-white font-bold text-base">{type.name}</h3>
                                    </div>
                                </Card>
                            ))}
                        </div>
                   </div>
                   <div>
                        <h3 className="text-xl font-semibold mb-4">Budget Range</h3>
                         <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {budgetRanges.map((range) => (
                                <Button 
                                    key={range} 
                                    variant={selectedBudget === range ? "default" : "outline"}
                                    onClick={() => setSelectedBudget(range)}
                                    className="justify-start"
                                >
                                    {range}
                                </Button>
                            ))}
                        </div>
                   </div>
                   <div>
                        <h3 className="text-xl font-semibold mb-4">Amenities</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {amenities.map((amenity) => (
                                <Card 
                                    key={amenity.name} 
                                    className={cn(
                                        "relative rounded-lg overflow-hidden cursor-pointer group border-2",
                                        selectedAmenities.includes(amenity.name) ? 'border-primary' : 'border-transparent'
                                    )}
                                    onClick={() => toggleAmenity(amenity.name)}
                                >
                                    <Image src={amenity.image} alt={amenity.name} width={200} height={200} className="h-24 w-full object-cover" data-ai-hint={amenity.aiHint}/>
                                    <div className="absolute inset-0 bg-black/40" />
                                    <div className="absolute top-2 right-2 w-5 h-5 rounded-full border border-white bg-white/30 flex items-center justify-center">
                                        {selectedAmenities.includes(amenity.name) && <Check className="h-3 w-3 text-white" />}
                                    </div>
                                    <div className="absolute bottom-2 left-2">
                                        <h3 className="text-white font-semibold text-sm">{amenity.name}</h3>
                                    </div>
                                </Card>
                            ))}
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

