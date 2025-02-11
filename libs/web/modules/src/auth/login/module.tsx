"use client";
import { Button, CheckBox, TextField } from "@uninus/web/components";
import { signIn } from "next-auth/react";
import { FC, ReactElement, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { VSLogin, TVSLogin } from "@uninus/entities";

export const LoginUserModule: FC = (): ReactElement => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [getError, setError] = useState<string | undefined>(undefined);
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<TVSLogin & { aggreement?: boolean }>({
    mode: "all",
    resolver: zodResolver(VSLogin),
    defaultValues: {
      email: "",
      password: "",
      aggreement: false,
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    setIsLoading(true);
    try {
      const response = await signIn("login", {
        redirect: false,
        email: data?.email,
        password: data?.password,
      });
      if (response?.error) {
        setError(response.error);
        toast.error(`${response.error}`, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else {
        router.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  });

  return (
    <form
      key="auth-login"
      onSubmit={onSubmit}
      className="w-full px-5 lg:px-0 flex flex-col gap-y-8 py-8 lg:items-center flex-wrap"
    >
      <div className="flex flex-col p-4 xl:w-4/5 2xl:w-4/5 lg:mt-8 mt-0">
        {getError && (
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        )}
        <div className="flex flex-col 2xl:gap-y-2 ">
          <h1 className="font-bold text-xl xl:text-2xl 2xl:text-4xl text-center lg:text-start">
            Login
          </h1>
          <p className="text-grayscale-5 w-full text-xs lg:w-[35vw] 2xl:text-md lg:mb-1 text-center lg:text-left">
            Selamat Datang Calon Nusantara Muda
          </p>
        </div>

        <div className="flex flex-col w-full justify-center items-center mt-6 md:mt-0">
          <div className="justify-center w-full flex flex-col gap-5 md:gap-0">
            <TextField
              name="email"
              type="email"
              variant="md"
              label="Email"
              placeholder="Masukan email"
              control={control}
              required
              status={errors?.email ? "error" : undefined}
              message={errors?.email?.message}
            />
            <TextField
              name="password"
              type="password"
              variant="md"
              label="Password"
              control={control}
              placeholder="Masukan password"
              required
              status={errors?.password ? "error" : undefined}
              message={errors?.password?.message}
            />
          </div>
        </div>
        <div className="flex flex-col xl:gap-y-6 lg:gap-y-2 gap-y-5">
          <div className="flex justify-between md:justify-around lg:justify-between">
            <CheckBox
              name="aggreement"
              control={control}
              label="Ingat saya"
              variant="primary"
              size="md"
            />
            <Link
              href="/auth/forgot-password"
              className="text-grayscale-4 hover:text-grayscale-6 duration-300 text-[12px]"
            >
              Lupa password ?
            </Link>
          </div>
          <div className="flex justify-center">
            <Button
              loading={isLoading}
              disabled={!isValid}
              width="w-full"
              height="lg:h-5 xl:h-auto"
            >
              Masuk Sekarang
            </Button>
          </div>
          <div className="flex gap-2">
            <p className="text-grayscale-4 text-[12px]">Belum memiliki akun ?</p>
            <Link href="/auth/register" className="text-primary-green text-[12px]">
              Register
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export const LoginAdminModule: FC = (): ReactElement => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [getError, setError] = useState<string | undefined>(undefined);
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<TVSLogin & { aggreement?: boolean }>({
    mode: "all",
    resolver: zodResolver(VSLogin),
    defaultValues: {
      email: "",
      password: "",
      aggreement: false,
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    setIsLoading(true);
    try {
      const response = await signIn("login", {
        redirect: false,
        email: data?.email,
        password: data?.password,
      });
      if (response?.error) {
        setError(response.error);
        toast.error(`${response.error}`, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else {
        router.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  });

  return (
    <form
      key="auth-login"
      onSubmit={onSubmit}
      className="w-full px-5 lg:px-0 flex flex-col justify-center bg-grayscale-1 h-screen gap-y-8 py-8 lg:items-center flex-wrap"
    >
      <div className="flex flex-col p-4 lg:w-1/2 lg:mt-8 mt-0">
        {getError && (
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        )}
        <div className="flex flex-col 2xl:gap-y-2 mb-4">
          <h1 className="font-bold text-xl xl:text-2xl 2xl:text-4xl text-center lg:text-start">
            Masuk Admin
          </h1>
        </div>

        <div className="flex flex-col w-full justify-center items-center mt-6 md:mt-0">
          <div className="justify-center w-full flex flex-col gap-5 md:gap-0">
            <TextField
              name="email"
              type="email"
              variant="md"
              label="Email"
              placeholder="Masukan email"
              control={control}
              required
              status={errors?.email ? "error" : undefined}
              message={errors?.email?.message}
            />
            <TextField
              name="password"
              type="password"
              variant="md"
              label="Kata Sandi"
              control={control}
              placeholder="Masukkan Kata Sandi"
              required
              status={errors?.password ? "error" : undefined}
              message={errors?.password?.message}
            />
          </div>
        </div>
        <div className="flex flex-col xl:gap-y-6 lg:gap-y-2 gap-y-5">
          <div className="flex justify-between md:justify-around lg:justify-between">
            <CheckBox
              name="aggreement"
              control={control}
              label="Ingat saya"
              variant="primary"
              size="md"
            />
          </div>
          <div className="flex justify-center">
            <Button
              loading={isLoading}
              disabled={!isValid}
              width="w-full"
              height="lg:h-5 xl:h-auto"
            >
              Masuk
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};
