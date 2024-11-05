import React, { useEffect } from 'react'
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Login from '@/components/login';
import Signup from '@/components/signup';
// import {urlState} from '@/context'

const Auth = () => {
    let [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const longLink = searchParams.get("createNew");
    // const {isAuthenticated, loading} = urlState()

    // Use-Effect
    // useEffect(() => {
    //     if (isAuthenticated && !loading){
    //         navigate(`/dashboard?${longLink? `createNew=${longLink}` : ""}`);
    //     }
    // }, [isAuthenticated, loading, navigate]);

    return (
        <div className='mt-36 flex flex-col items-center gap-10'>
            <h1 className='text-5xl font-extrabold'>
                {/* Ensure user has an account before accessing the URL METRICS Feature */}
                {
                    searchParams.get("createNew") ?
                        "Hold up! You need an account to access the URL Metrics feature" :
                        "Login | Signup"
                }
            </h1>

            <Tabs defaultValue="login" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="login">Login</TabsTrigger>
                    <TabsTrigger value="signup">Signup</TabsTrigger>
                </TabsList>
                <TabsContent value="login">
                    <Login />
                </TabsContent>
                <TabsContent value="signup">
                    <Signup />
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default Auth;