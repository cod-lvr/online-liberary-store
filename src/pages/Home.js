import { motion } from 'framer-motion';
import HomePage from '../components/layout/HomePage';

const homeVarient = {
   visable: {
       opacity: 1
    },
   hidden: {
        opacity: 0
   },
   exit: {
        opacity: 0,
        x: "-100vw",
        transition: { duration: 1 },
   }
}

const Home = () => {
    return (
        <motion.div variants={homeVarient} exit="exit">
            <HomePage />
        </motion.div>
    )
    
}

export default Home;