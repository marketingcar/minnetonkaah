
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import PageWrapper from '@/components/PageWrapper';
import { Heart, Stethoscope, Leaf } from 'lucide-react';
const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};
const Home = () => {
  return <PageWrapper title="Home" description="Personalized, compassionate veterinary care for every life stage. Extended visits and Fear Free Certified veterinarians.">
            {/* Hero Section */}
            <section className="relative pt-32 pb-8 md:pt-40 bg-brand-secondary-bg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-background via-transparent to-transparent z-10"></div>
                <div className="absolute inset-0 z-0">
                    <img className="w-full h-full object-cover opacity-30" alt="Golden Retriever dog running happily in a sunny park field, representing healthy active pets" src="https://horizons-cdn.hostinger.com/2159b5b2-c5e9-475c-b436-56f7fa5f20f0/lake_landscape_1-kCftT.jpg" />
                </div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
                    <motion.h1 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="text-4xl md:text-6xl text-brand-text mb-4">Compassionate Veterinary Care For Every Chapter Of Life</motion.h1>
                    <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} className="text-lg md:text-xl text-brand-text/80 max-w-3xl mx-auto mb-8">Family-owned veterinary care, combining expertise with Fear Free comfort for pets and their people.</motion.p>
                    <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.6
        }} className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button asChild size="lg">
                            <a href="https://olsr3.covetrus.com/#?AID=wwiFdl240LCLEGaU8EtCKNBCK&cl=1" target="_blank" rel="noopener noreferrer">Make an Appointment</a>
                        </Button>
                        <Button asChild size="lg" variant="pharmacy">
                            <a href="https://minnetonkaah.covetruspharmacy.com/" target="_blank" rel="noopener noreferrer">Online Pharmacy</a>
                        </Button>
                        <Button asChild size="lg" variant="team">
                            <Link to="/about/meet-the-team">Meet Our Team</Link>
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Key Values Section */}
            <section className="py-4 sm:py-8 bg-brand-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl text-brand-text">Our Commitment to You & Your Pet</h2>
                        <p className="mt-4 text-lg text-brand-text/80">Expert, heartfelt veterinary support.</p>
                    </div>
                    <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" initial="offscreen" whileInView="onscreen" viewport={{
          once: true,
          amount: 0.3
        }} staggerChildren={0.2}>
                        <motion.div variants={cardVariants} className="bg-brand-secondary-bg p-8 rounded-lg shadow-lg text-center">
                            <Heart className="mx-auto h-12 w-12 text-brand-highlight mb-4" />
                            <h3 className="text-xl text-brand-text mb-2">Boutique Clinic Experience</h3>
                            <p className="text-brand-text/80">Extended, unrushed appointments with a focus on both the pet and client experience.</p>
                        </motion.div>
                        <motion.div variants={cardVariants} className="bg-brand-secondary-bg p-8 rounded-lg shadow-lg text-center">
                            <Stethoscope className="mx-auto h-12 w-12 text-brand-highlight mb-4" />
                            <h3 className="text-xl text-brand-text mb-2">Fear Free & Cat Friendly</h3>
                            <p className="text-brand-text/80">Fear Free veterinarians, and a Cat Friendly approach to ensure a calm, positive visit for every animal.</p>
                        </motion.div>
                        <motion.div variants={cardVariants} className="bg-brand-secondary-bg p-8 rounded-lg shadow-lg text-center">
                            <Leaf className="mx-auto h-12 w-12 text-brand-highlight mb-4" />
                            <h3 className="text-xl text-brand-text mb-2">Personalized Care</h3>
                            <p className="text-brand-text/80">A fully present, collaborative team dedicated to creating the best plan for your pet.</p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </PageWrapper>;
};
export default Home;
