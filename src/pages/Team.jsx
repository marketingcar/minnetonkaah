
import React from 'react';
import PageWrapper from '@/components/PageWrapper';
import { motion } from 'framer-motion';
import { Users, PawPrint } from 'lucide-react';

const teamMembers = [
    {
      name: 'Dr. Angie Jung, DVM, CVA, CVFT',
      imageAlt: 'Portrait of Dr. Angie Jung, veterinarian at Minnetonka Animal Hospital, smiling warmly',
      imageDescription: 'Dr. Angie Jung, a veterinarian, smiling warmly',
      imageUrl: 'https://horizons-cdn.hostinger.com/2159b5b2-c5e9-475c-b436-56f7fa5f20f0/dr.-jung-ujEIs.jpg',
      bio: ['Dr. Jung is a Minnesota-born veterinarian providing a holistic approach to pet care. To her, client service and knowledge are key to excellent veterinary care. She values keeping an open line of communication and, as a Fear Free Certified veterinarian, creature comfort is crucial – she strives to give the best quality, compassionate care to her patients.', 'She graduated from the University of Minnesota’s College of Veterinary Medicine in 2011. Afterward, she attended Chi University for her credentials in acupuncture, food therapy, and herbal medicine. She continues to learn, combining research-based integrative medicine with an approachable, down-to-earth style.', 'Dr. Jung lives with her husband, daughter, two cats, and three fish. Outside of her passion for veterinary medicine, she enjoys reading, cooking, yoga, and music.']
    }, 
    {
      name: 'Dr. Julie Boero, DVM',
      imageAlt: 'Portrait of Dr. Julie Boero, veterinarian specializing in feline medicine',
      imageDescription: 'Dr. Julie Boero, a veterinarian, with a friendly expression',
      imageUrl: 'https://horizons-cdn.hostinger.com/2159b5b2-c5e9-475c-b436-56f7fa5f20f0/9a3a64a16e3214a6a8fd9777a8f36f8f.jpg',
      bio: ['Dr. Boero grew up near Scranton, Pennsylvania, where she first developed a love and respect for animals. She obtained a Bachelor of Science in Biology from Muhlenberg College in Allentown, PA, with the goal of pursuing a job in laboratory science, but soon realized she missed the daily interaction with people and pets.', 'She graduated from the University of Minnesota Veterinary School where she developed a special love for felines and became a certified “cat lady.” (Although she loves all furry critters!) Her veterinary interests include dentistry, geriatric care/pain management, and feline medicine.', 'Dr. Boero currently resides in Minneapolis with her four cats — Mr. Pants, Gary, Gabby, and Seymour, as well as her ever-growing plant collection. In her free time she enjoys gardening, reading, painting, and planning her next adventure.']
    },
    {
      name: 'Dr. Kelly Ryan, DVM',
      imageAlt: 'Portrait of Dr. Kelly Ryan, veterinarian with over 20 years of experience',
      imageDescription: 'Dr. Kelly Ryan, a veterinarian, smiling while holding a dog.',
      imageUrl: 'https://horizons-cdn.hostinger.com/2159b5b2-c5e9-475c-b436-56f7fa5f20f0/940b8da67dc354ad64ca41319a331f35.jpg',
      bio: ['Dr. Ryan decided to become a veterinarian at age three and never looked back. As a double alumna of the University of Minnesota–Twin Cities, she earned both her undergraduate degree and Doctor of Veterinary Medicine there. She has practiced for 20+ years, focusing on general practice with an emphasis on patient comfort and collaborative, client-centered care. Originally from Austin, Minnesota, she moved to the Twin Cities for college and now lives in Hopkins with her family. At home, she dotes on one dog—Trixie, a border collie–beagle mix—and two cats, Natasha and Paige, a mother-daughter pair who began as fosters and quickly became family.']
    },
    {
      name: 'Kellie L.',
      imageAlt: 'Portrait of Kellie L., certified veterinary technician and Reiki master',
      imageDescription: 'Kellie L., a veterinary technician, smiling',
      imageUrl: 'https://horizons-cdn.hostinger.com/2159b5b2-c5e9-475c-b436-56f7fa5f20f0/280d83bbb663e3b30a61e14ee5e91ed1.jpg',
      bio: ['Kellie joined our team in 2022 when they moved here from DC. They have more than two decades of experience in veterinary medicine including rescue, emergency, internal medicine, surgery, holistic, integrative, and general practice. Kellie is also a Reiki master and routinely performs healing sessions for animals and people.', 'In their free time, Kellie can be found spending time with their wife, four cats, and dog. Kellie is passionate about the ocean, Harry Potter, gardening, crystals, microbreweries, and the Green Bay Packers.']
    }, 
    {
      name: 'Megs',
      imageAlt: 'Veterinary technician Megs working with a patient',
      imageDescription: 'A generic placeholder image for Megs, a veterinary technician.',
      imageUrl: 'https://images.unsplash.com/photo-1597092118522-7f441ec188f6',
      bio: ['Megs is a dedicated veterinary technician with an Associate of Applied Science (A.A.S.) degree from Rochester Community and Technical College (RCTC). Before entering the veterinary field, she spent years riding and caring for horses, which sparked her passion for animal health and well-being.', 'Now, as a vet tech, she brings that same commitment and care to every patient she works with. Megs has a special love for cats and enjoys spending her downtime with her own feline companion, Kikyo.', 'When she’s not in the clinic, you’ll often find her hula hooping, attending music festivals, or soaking up the great outdoors.']
    },
    {
      name: 'Jenna B.',
      imageAlt: 'Portrait of Jenna B., veterinary assistant at Minnetonka Animal Hospital',
      imageDescription: 'Jenna B., a veterinary assistant, looking friendly',
      imageUrl: 'https://horizons-cdn.hostinger.com/2159b5b2-c5e9-475c-b436-56f7fa5f20f0/22e1ea927b66174d6cda658d957f41b3.jpg',
      bio: ['Jenna has spent her entire life in Minnesota so far and has been with the MAH staff since the end of 2022. She is now working full time in the clinic and is also in school working towards becoming a CVT.', 'She has two rescues at home, a beagle mix (Moki) and a boxer (Indie) as well as two chinchillas (Oli and Abu). When she’s not at work she likes to read, have game nights with friends, as well as hike and camp with her dogs.']
    }, 
    {
      name: 'Kirsten R.',
      imageAlt: 'Portrait of Kirsten R., veterinary assistant specializing in STEM mathematics',
      imageDescription: 'Kirsten R., a veterinary assistant, smiling at the camera',
      imageUrl: 'https://horizons-cdn.hostinger.com/2159b5b2-c5e9-475c-b436-56f7fa5f20f0/d078b8850273ae037615fc77cad81c16.jpg',
      bio: ['Kirsten joined Minnetonka Animal Hospital in 2024. She recently graduated from Hamline University, where she specialized in STEM Mathematics. Currently, she is working towards becoming a Certified Veterinary Technician (CVT), expanding her expertise in animal care.', 'Outside of work, Kirsten is a proud pet owner to two cats, Tux and Tiger, and two dogs, Fozzie and Oogie Boogie. In her free time, she enjoys reading and spending quality time with her beloved animals.']
    }, 
    {
      name: 'Gabriella W.',
      imageAlt: 'Portrait of Gabriella W., veterinary assistant with a passion for exotic pets',
      imageDescription: 'Gabriella W., a veterinary assistant, in the clinic',
      imageUrl: 'https://horizons-cdn.hostinger.com/2159b5b2-c5e9-475c-b436-56f7fa5f20f0/e3c6eab709385a313aae9e701616984d.jpg',
      bio: ['Gabriella has lived in Minnetonka her whole life and graduated from Minnetonka High School in 2022. She currently attends Union University in Jackson, TN, studying biology and chemistry with the plan of going to veterinary school after she graduates.', 'She has been working at Minnetonka Animal Hospital since the summer of 2023 as a veterinary assistant and absolutely loves it. She has three senior pets at home — two cats, Delilah and Sadie, and one guinea pig named Oracle.', 'Gabriella has owned guinea pigs since she was 10 and they hold a very special place in her heart! Although she loves all furry creatures, exotic and wildlife medicine is what she is most passionate about. In her free time, her favorite thing to do is to spend time outside, whether that is hiking, hammocking, or boating.']
    }
];

const hospitalCats = [
    {
      name: 'Binx',
      imageAlt: 'Binx the clinic cat, a black cat with a white patch, posing for a photo',
      imageDescription: 'Binx, a charming black cat with a small white patch on its chest, looking at the camera with a slight tongue out',
      imageUrl: 'https://horizons-cdn.hostinger.com/2159b5b2-c5e9-475c-b436-56f7fa5f20f0/cf7f8e87ea4eaad1708eb23e9be32d1b.png'
    },
    {
      name: 'Gizmo',
      imageAlt: 'Gizmo the clinic cat, a sleek black cat with green eyes',
      imageDescription: 'Gizmo, a sleek black cat with green eyes, lying on a wooden surface',
      imageUrl: 'https://horizons-cdn.hostinger.com/2159b5b2-c5e9-475c-b436-56f7fa5f20f0/c4c04c1877639657e9ad25c3bad9d42d.png'
    }
];

const TeamMemberCard = ({ member, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="bg-brand-background rounded-lg shadow-xl overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-1/3">
            <img className="w-full h-80 md:h-full object-cover" alt={member.imageAlt} src={member.imageUrl} />
        </div>
        <div className="p-8 md:w-2/3">
            <h3 className="text-2xl lg:text-3xl text-brand-text mb-4">{member.name}</h3>
            <div className="space-y-4 text-brand-text/90">
                {member.bio.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
            </div>
        </div>
    </motion.div>
);

const Team = () => {
    return (
        <PageWrapper title="Meet Our Team" description="Get to know the dedicated veterinarians, technicians, and assistants at Minnetonka Animal Hospital.">
            <div className="bg-brand-secondary-bg">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center mb-12">
                         <motion.div 
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.7, ease: "easeOut"}}
                            className="inline-block p-4 bg-brand-accent rounded-full mb-4">
                            <Users className="h-12 w-12 text-white" />
                        </motion.div>
                        <motion.h1 
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl md:text-5xl text-brand-text mb-4">
                            Meet Our Team
                        </motion.h1>
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="max-w-2xl mx-auto text-lg text-brand-text/80">
                            The dedicated, compassionate individuals who make our boutique clinic a home for healing.
                        </motion.p>
                    </div>

                    <section className="mb-16">
                        <h2 className="text-3xl md:text-4xl text-brand-text mb-8 text-center border-b-2 border-brand-accent pb-2">Veterinary Team</h2>
                        <div className="space-y-12">
                            {teamMembers.map((member, index) => (
                                <TeamMemberCard key={member.name} member={member} index={index} />
                            ))}
                        </div>
                    </section>
                    
                    <section>
                        <h2 className="text-3xl md:text-4xl text-brand-text mb-8 text-center border-b-2 border-brand-accent pb-2">Hospital Cats</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {hospitalCats.map((pet, index) => (
                                <motion.div
                                    key={pet.name}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-brand-background rounded-lg shadow-xl overflow-hidden text-center">
                                    <img className="w-full h-64 object-cover" alt={pet.imageAlt} src={pet.imageUrl} />
                                    <div className="p-4">
                                        <h3 className="text-xl text-brand-text flex items-center justify-center">
                                            <PawPrint className="w-5 h-5 mr-2 text-brand-highlight" />
                                            {pet.name}
                                        </h3>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                </div>
            </div>
        </PageWrapper>
    );
};

export default Team;
