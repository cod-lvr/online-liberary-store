import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import classes from './BookItem.module.css';

const Bookitem = () => {
    return (
        <div >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.15 } }}
                transition={{ duration: 0.2, delay: 0.15 }}
                style={{ pointerEvents: "auto" }} 
                className={classes.overlay} 
            >
                <Link to="/store/${book-name}" />
            </motion.div>
            <div className={classes["card-content-container open"]}>
                <motion.div className={classes["card-content"]} layoutId={`card-container`}>
                    <motion.div
                        className={classes["card-image-container"]}
                        layoutId={`card-image-container`}
                    >
                        {/* <img className={classes["card-image"]} src={`images/${id}.jpg`} alt="" /> */}
                    </motion.div>
                <motion.div
                    className={classes["title-container"]}
                    layoutId={`title-container`}
                >
                    <span></span>
                    <h2></h2>
                </motion.div>
                    <motion.div className={classes["content-container"]} animate>
                       
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
};

export default Bookitem;