import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ProjectCard from './ProjectCard';

const AnimatedProjectCard = ({ project }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: '-50px' });

    // Variants pour l'animation
    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
            },
        },
    };

    return (
        <motion.div 
            ref={ref}
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            <ProjectCard 
                title={project.title} 
                description={project.description} 
                imageUrl={project.imageUrl} 
                gitUrl={project.gitUrl} 
                previewUrl={project.previewUrl}
            />
        </motion.div>
    );
};

export default AnimatedProjectCard;
