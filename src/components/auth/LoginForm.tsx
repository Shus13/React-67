import { TextInputComponent } from "../ui/form/InputComponent";
import Button from "../ui/button/Button";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type CredentialsType = {
  username: string;
  password: string;
};

const LoginSchema = z.object({
  username: z
    .email("Please enter the valid email adress")
    .min(1, "Email is required"),
  password: z.string().min(1, "Password is required").min(8, "Password must be of 8 characters"),
});

export default function LoginForm() {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<CredentialsType>({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: zodResolver(LoginSchema),
  });

  const handleLoginSubmit = (data: CredentialsType) => {
    console.log(data);
    // setIsSubmitting(true);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(handleLoginSubmit)}
        className="w-full flex flex-col gap-5 py-5"
      >
        <TextInputComponent
          control={control}
          errMsg={errors?.username?.message}
          label={"Username:"}
          type={"text"}
          placeholder={"Enter your username"}
          name={"username"}
        ></TextInputComponent>

        <TextInputComponent
          control={control}
          errMsg={errors?.password?.message}
          label={"Password:"}
          type={"password"}
          placeholder={"Enter your password"}
          name={"password"}
        ></TextInputComponent>

        <div className="w-full flex items-center justify-end">
          <div className="w-full">
            <p>
              By signing in, you agree with
              <a href="/privacy-policy" className="text-teal-600 underline">
                {" "}
                Privacy policy
              </a>{" "}
              &{" "}
              <a
                href="/terms-and-conditions"
                className="text-teal-600 underline"
              >
                Terms and conditions
              </a>
            </p>
          </div>
          <a
            href="/forget-password"
            className="text-sm italic text-teal-600 underline hover:scale-103 transition duration-300"
          >
            Forget-Password
          </a>
        </div>
        <div className="w-full flex justify-between">
          <Button
            buttonName={"Cancel"}
            type={"reset"}
            disabled={isSubmitting}
            className={"bg-red-600 hover:bg-red-700 text-white"}
          ></Button>

          <Button
            buttonName={"Submit"}
            type={"submit"}
            disabled={isSubmitting}
            className={"bg-green-600 hover:bg-green-700 text-white"}
          ></Button>
        </div>

        <div className="flex items-center justify-center">
          <h1 className="font-bold">OR</h1>
        </div>

        <div className="flex justify-center">
          <a href="/signup" className="bg-teal-800 text-white p-3 border rounded-lg">Signup</a>
        </div>
      </form>
    </>
  );
}
