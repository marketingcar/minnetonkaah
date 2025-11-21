
import React from 'react';
import PageWrapper from '@/components/PageWrapper';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <PageWrapper title="Contact & Appointments" description="Contact us to book an appointment. Find our address, phone number, and a convenient contact form.">
      <div className="bg-brand-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
              <motion.h1 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl md:text-5xl text-brand-text mb-4"
              >
                  Contact & Book an Appointment
              </motion.h1>
              <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="max-w-2xl mx-auto text-lg text-brand-text/80"
              >
                  We'd love to hear from you. Reach out to schedule a visit or ask any questions you may have.
              </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div 
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-brand-secondary-bg p-8 rounded-lg shadow-md"
            >
              <h2 className="text-3xl text-brand-text mb-6">Clinic Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-brand-highlight mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-brand-text">Address</p>
                    <p className="text-brand-text/90">17408 Minnetonka Blvd, Minnetonka, MN 55345</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-brand-highlight mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-brand-text">Phone</p>
                    <p className="text-brand-text/90">952.473.1239</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-brand-highlight mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-brand-text">Email</p>
                    <p className="text-brand-text/90">info@minnetonkaanimal.com</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-brand-accent/20">
                <h3 className="text-brand-text">Hours</h3>
                <p className="text-brand-text/90">Monday – Friday: 8 a.m. – 5 p.m.</p>
                <p className="text-brand-text/90">Saturday: Closed</p>
                <p className="text-brand-text/90">Sunday: Closed</p>
              </div>
            </motion.div>

            {/* Google Map */}
            <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-brand-secondary-bg rounded-lg shadow-md overflow-hidden"
            >
              <iframe
                src="https://maps.google.com/maps?q=17408%20Minnetonka%20Blvd,%20Minnetonka,%20MN%2055345&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Minnetonka Animal Hospital Location"
                className="min-h-[450px] md:min-h-full"
              ></iframe>
            </motion.div>
          </div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-center bg-brand-accent text-brand-background p-10 rounded-lg shadow-lg mt-12"
          >
            <Calendar className="mx-auto h-10 w-10 mb-3" />
            <h2 className="text-3xl text-brand-background mb-4">Ready to See Us?</h2>
            <p className="max-w-xl mx-auto mb-6">
              Click the button below to schedule your visit through our online booking portal.
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-brand-background text-brand-accent hover:bg-brand-background/90">
              <a href="https://olsr3.covetrus.com/#?AID=wwiFdl240LCLEGaU8EtCKNBCK&cl=1" target="_blank" rel="noopener noreferrer">Make an Appointment</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Contact;
