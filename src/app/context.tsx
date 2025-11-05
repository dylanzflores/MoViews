import { createContext, useContext, useState, ReactNode } from "react";
import { Testimonial } from "./types";

interface TestimonialContextType {
  testimonials: Testimonial[];
  addTestimonial: (t: Testimonial) => void;
  deleteTestimonial: (id: string) => void;
}

const TestimonialContext = createContext<TestimonialContextType | 
undefined>(undefined);

export const TestimonialProvider = ({ children }: { children: ReactNode }) 
=> {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  const addTestimonial = (t: Testimonial) => 
setTestimonials([...testimonials, t]);
  const deleteTestimonial = (id: string) =>
    setTestimonials(testimonials.filter((t) => t.id !== id));

  return (
    <TestimonialContext.Provider value={{ testimonials, addTestimonial, 
deleteTestimonial }}>
      {children}
    </TestimonialContext.Provider>
  );
};

export const useTestimonials = () => {
  const context = useContext(TestimonialContext);
  if (!context) throw new Error("useTestimonials must be used within 
TestimonialProvider");
  return context;
};

