import { Input } from '../components/ui/input';
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import * as Yup from "yup";
// import Error from './error';
import { Button } from './ui/button';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BeatLoader } from "react-spinners";
import UseFetch from '@/hooks/use-fetch';
import Error from './error';
import { login } from '@/db/apiAuth';
import { urlState } from '@/context';

const Login = () => {
    let [searchParams] = useSearchParams();
    const longLink = searchParams.get("createNew");

    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const { data, error, loading, fn: fnLogin } = UseFetch(login, formData);
    const { fetchUser } = urlState();

    useEffect(() => {
        if (error === null && data) {
            navigate(`/dashboard?${longLink ? `createNew=${longLink}` : ""}`);
            fetchUser();
        }
    }, [data, error])

    const handleLogin = async () => {
        setErrors([]);
        try {
            const schema = Yup.object().shape({
                email: Yup.string()
                    .email("Invalid Email")
                    .required("Email is Required"),
                password: Yup.string()
                    .min(6, "Password muat be at least 6 characters")
                    .required("Password is required")
            });

            await schema.validate(formData, { abortEarly: false });
            await fnLogin();
        } catch (err) {
            const newErrors = {};

            err?.inner?.forEach((err) => {
                newErrors[err.path] = err.message;
            });

            setErrors(newErrors)
        }
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>Login to your account if you have one</CardDescription>
                {error && <Error message={error.message} />}
            </CardHeader>
            <CardContent className="space-y-2">
                <div className='space-y-1'>
                    <Input
                        name="email"
                        type="email"
                        placeholder="Enter Email"
                        onChange={handleInputChange}
                    />
                    {errors.email && <Error message={errors.email} />}
                </div>
                <div className='space-y-1'>
                    <Input
                        name="password"
                        type="password"
                        placeholder="Enter Password"
                        onChange={handleInputChange}
                    />
                    {errors.password && <Error message={errors.password} />}
                </div>
            </CardContent>
            <CardFooter>
                <Button onClick={handleLogin}>
                    {loading ? <BeatLoader size={10} color='red' /> : "Login"}
                </Button>
            </CardFooter>
        </Card>
    )
}

export default Login