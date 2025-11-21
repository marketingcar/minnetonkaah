import React from 'react';
import PageWrapper from '@/components/PageWrapper';
import { motion } from 'framer-motion';
import { Heart, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
const NewClients = () => {
  return <PageWrapper title="New Clients" description="Welcome to Minnetonka Animal Hospital! Find all the information you need for your first visit, including forms and what to expect.">
                <div className="bg-brand-background">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                        <div className="text-center mb-12">
                            <motion.h1 initial={{
            y: 20,
            opacity: 0
          }} animate={{
            y: 0,
            opacity: 1
          }} transition={{
            duration: 0.5
          }} className="text-4xl md:text-5xl text-brand-text mb-4">Caring for pets like family</motion.h1>
                            <motion.p initial={{
            y: 20,
            opacity: 0
          }} animate={{
            y: 0,
            opacity: 1
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }} className="max-w-2xl mx-auto text-lg text-brand-text/80">
                                We are thrilled to welcome you and your pet to Minnetonka Animal Hospital. Here’s what to expect from your first visit with us.
                            </motion.p>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <motion.div initial={{
              x: -50,
              opacity: 0
            }} whileInView={{
              x: 0,
              opacity: 1
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.7
            }} className="bg-brand-secondary-bg p-8 rounded-lg shadow-md mb-12">
                                <div className="flex items-center text-brand-text mb-4">
                                    <Heart className="h-8 w-8 mr-3 text-brand-highlight" />
                                    <h2 className="text-2xl font-semibold">What to Expect</h2>
                                </div>
                                <p className="text-brand-text/90">
                                    Your first appointment will be an extended, 60-minute visit. This allows us to conduct a thorough examination, get to know you and your pet, and discuss your concerns without feeling rushed. We will review your pet's medical history and collaborate with you to create a personalized health plan.
                                </p>
                            </motion.div>

                            <motion.div initial={{
            y: 50,
            opacity: 0
          }} whileInView={{
            y: 0,
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.7
          }} className="text-center bg-brand-accent text-brand-background p-10 rounded-lg shadow-lg">
                                <MapPin className="mx-auto h-10 w-10 mb-3" />
                                <h2 className="text-3xl text-brand-background mb-4">Ready to Join Us?</h2>
                                <p className="max-w-xl mx-auto mb-6">
                                    We can't wait to meet you. Contact us today to schedule your first appointment and experience the difference of personalized, compassionate care.
                                </p>
                                <Button asChild size="lg" variant="secondary" className="bg-brand-background text-brand-accent hover:bg-brand-background/90">
                                    <a href="https://olsr3.covetrus.com/#?AID=wwiFdl240LCLEGaU8EtCKNBCK&cl=1" target="_blank" rel="noopener noreferrer">Make an Appointment</a>
                                </Button>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </PageWrapper>;
};
export default NewClients;