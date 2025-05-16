import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import logo from "@/assets/images/logo.png";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import { RouteIndex, RouteSignUP } from "@/helpers/RouteName";
import { showToast } from "@/helpers/showToast";
import { getEnv } from "@/helpers/getenv";
import GoogleLogin from "@/components/GoogleLogin";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/user/user.slice";


const SignIn = () => {
  const dispatch=useDispatch()
  const Navigate = useNavigate();
  const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8, {
      message: "password must be length of 8 or more",
    }),
  });
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  async function onSubmit(values) {
    try {
      console.log(values);
      const response = await fetch(
        `${getEnv("VITE_API_BASE_URL")}/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify(values),
        }
      );
      const data = await response.json();
      if (!response.ok) {
         return showToast("error", data.message);
        
      }
        dispatch(setUser(data.user))
        console.log(data);
        Navigate(RouteIndex);
        showToast("success", data.message);
      
      
      
    } catch (error) {
      showToast("error", error.message);
      console.log(error.message);
    }
  }

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <Card className="w-[450px] p-5">
        <h1 className="text-2xl font-bold text-center mb-4 flex justify-center items-center">
          Login Into{" "}
          <span className="text-green-500 flex justify-center items-center gap-2 ml-2">
            {" "}
            <img src={logo} width={40} /> SnapWrite
          </span>
        </h1>
        <div className="">
          <GoogleLogin/>
          <div className="border my-5 flex justify-center items-center">
            <span className="absolute bg-white text-sm">Or</span>
          </div>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                      <Input placeholder="Enter Your PassWord" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="mt-5">
              <Button type="submit" className="w-full">
                SignIn
              </Button>
              <div className="mt-5 text-sm flex justify-center items-center gap-2 ">
                <p>Don&apos;t have account</p>
                <Link
                  to={RouteSignUP}
                  className="text-green-500 hover:underline"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </form>
        </Form>
      </Card>
    </div>
  );
};

export default SignIn;
