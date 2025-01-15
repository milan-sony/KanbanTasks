import { create } from 'zustand'
import { axiosInstance } from '../lib/Axios'
import toast from 'react-hot-toast'

export const userControllerStore = create((set) => ({
    authUser: null, //check whether user authenticated or not
    isCheckingAuth: true, //state to check the authentication (initially set the value to true bcz asoonas we refresh the pg we will check whether the user is authenticated, with this the authUser value change)
    isSigningUp: false,
    isLogingIn: false,
    isOTPVerified: false,

    // check user is authenticated on every change/routes
    checkAuth: async () => {
        try {
            const res = await axiosInstance.get("/user/check")
            set({ authUser: res.data })
        } catch (error) {
            set({ authUser: null })
            console.error("Error in checking auth, ", error.response.data.message)
        } finally {
            set({ isCheckingAuth: false })
        }
    },

    // user signup
    signup: async (data) => {
        set({ isSigningUp: true })
        try {
            const res = await axiosInstance.post("/user/signup", data)
            set({ authUser: res.data })
            console.log("Data: ", data)
            console.log("Response data: ", res.data)
            return toast.success("Account created successfully")
        } catch (error) {
            console.error("Error signing up user, ", error.response.data.message)
            return toast.error("Error signing up user")
        } finally {
            set({ isSigningUp: false })
        }
    },

    // verify OTP
    verifyOTP: async (data) => {
        set({ isOTPVerified: true })
        try {
            await axiosInstance.post("/user/verifyotp", data)
            return toast.success("OTP verified successfully")
        } catch (error) {
            console.error("Error verifying OTP, ", error.response.data.message)
            return toast.error("Error verifying OTP")
        } finally {
            set({ isOTPVerified: false })
        }
    }
}))