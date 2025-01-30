import { create } from 'zustand'
import { axiosInstance } from '../lib/Axios'
import toast from 'react-hot-toast'

export const userControllerStore = create((set) => ({
    authUser: null, //check whether user authenticated or not
    isCheckingAuth: true, //state to check the authentication (initially set the value to true bcz asoonas we refresh the pg we will check whether the user is authenticated, with this the authUser value change)
    isSigningUp: false,
    // isLogingIn: false,
    OTPVerified: null,
    isOTPVerified: false,

    // check user is authenticated on every change/routes
    checkAuth: async () => {
        try {
            const res = await axiosInstance.get("/user/check")
            if (res) {
                set({ authUser: res.data || null })
            }
        } catch (error) {
            set({ authUser: null })
            console.error("Error in checking auth, ", error.response?.data?.message || error.message)
        } finally {
            set({ isCheckingAuth: false })
        }
    },
    // user signup
    signup: async (data) => {
        try {
            set({ isSigningUp: true })
            const res = await axiosInstance.post("/user/signup", data)
            if (res) {
                set({ authUser: res.data })
                return toast.success("Account created successfully")
            }
        } catch (error) {
            console.error("Error signing up user, ", error.response?.data?.message || error.message)
            return toast.error(error.response?.data?.message || error.message || "Error in signing up user")
        } finally {
            set({ isSigningUp: false })
        }
    },

    // verify OTP
    verifyOTP: async (data) => {
        try {
            set({ isOTPVerified: true })
            const res = await axiosInstance.post("/user/verifyotp", data)
            if (res) {
                console.log("OTPVerified: ", res)
                set({ OTPVerified: res.data || null })
                return toast.success("OTP verified successfully")
            }
        } catch (error) {
            set({ OTPVerified: null })
            console.error(error.response?.data?.message || error.message || "Error in verifying OTP")
            return toast.error("Error verifying OTP")
        } finally {
            set({ isOTPVerified: false })
        }
    }
}))