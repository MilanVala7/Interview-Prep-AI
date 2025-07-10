import React, { useContext } from "react";
import Navbar from "./Navbar";
import { UserContext } from "../../context/UserContext";
import { motion, AnimatePresence } from "framer-motion";

const DashboardLayout = ({ children }) => {
    const { user } = useContext(UserContext);

    return (
        <div className="">
            <Navbar />
            <AnimatePresence mode="wait">
                {user && (
                    <motion.div
                        key="dashboard-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default DashboardLayout;
