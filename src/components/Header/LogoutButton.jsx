import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

function LogoutBtn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
      navigate("/"); // take user to homepage after logout
    });
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={logoutHandler}
      className="
        bg-gradient-to-r from-red-500 to-red-700
        text-white font-semibold
        px-6 py-2 rounded-full
        shadow-md hover:shadow-lg
        transition-all duration-300 ease-in-out
      "
    >
      Logout
    </motion.button>
  );
}

export default LogoutBtn;
