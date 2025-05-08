import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import logo from '@/assets/images/logo.png'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import { RouteSignIn } from "@/helpers/RouteName";
import { getEnv } from "@/helpers/getenv";
import { showToast } from "@/helpers/showToast";
const SignUP = () => {
  const navigate=useNavigate()


  const formSchema = z.object({
    username: z.string().min(3, { message: "Name must be 3 character long" }),
    email: z.string().email(),
    password: z.string().min(8, {
      message: "password must be length of 8 or more",
    }),
    confirmpassword: z
      .string()
      .refine((data) => data.password === data.confirmpassword, {
        message: `Password does&apos;t match`,
      }),
  });
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
  });
  async function onSubmit(values) {

    try {
      console.log(values);
      const response = await fetch(`${getEnv('VITE_API_BASE_URL')}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const data=await response.json()
      if(!response.ok){
        showToast('error',data.message)
        console.log(data.message);
      }
      navigate(RouteSignIn)
      showToast('success',data.message)

    } catch (error) {
      showToast('error',error.message)
      console.log(error.message);
    }
  }

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <Card className="w-[450px] p-5">
        <h1 className="text-2xl font-bold text-center mb-4 flex justify-center items-center">
          Create Account In <span className="text-green-500 flex justify-center items-center gap-2 ml-2"> <img src={logo} width={40} /> SnapWrite</span> 
        </h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="mb-3">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Your Username" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="mb-3">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Your Email" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="mb-3">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter Your PassWord"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="mb-3">
              <FormField
                control={form.control}
                name="confirmpassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter Your PassWord again"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="mt-5">
              <Button type="submit" className="w-full">
                SignUp
              </Button>
              <div className="mt-5 text-sm flex justify-center items-center gap-2 ">
                <p>Already have account</p>
                <Link
                  to={RouteSignIn}
                  className="text-green-500 hover:underline"
                >
                  SignIn
                </Link>
              </div>
            </div>
          </form>
        </Form>
      </Card>
    </div>
  );
};

export default SignUP;
