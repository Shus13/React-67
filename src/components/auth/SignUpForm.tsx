import { Link } from "react-router";
import Button from "../ui/button/Button";
import * as z from "zod";
import { TextInputComponent } from "../ui/form/InputComponent";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";


const SignupSchema = z.object({
  name: z.string("Name can't be empty").min(4, "Nmae must be of 4 character"),
  email: z
  .email("Please enter a valid email address")
    .min(1, "Email is required"),
    phone: z.string().min(1, "Phone numbet is required").min(10, "Phone number must be of 10 digit"),
    password: z
    .string()
    .min(4, "Password is required")
    .min(8, "Password must be of 8 Characters"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  }).refine((data) => data.password === data.confirmPassword, {
    message: "Password doesn't match",
    path: ["confirmPassword"]
  })
  
  type CredentialsType = z.infer<typeof SignupSchema>;

  export default function SignupForm() {
    const {
      control,
      handleSubmit,
      formState: { isSubmitting, errors },
    } = useForm<CredentialsType>({
      defaultValues: {
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      },
      resolver: zodResolver(SignupSchema),
    });
    
    
  const handleLoginSubmit = (data: CredentialsType) => {
    console.log(data);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(handleLoginSubmit)}
        className="w-full flex flex-col gap-5 py-5"
      >
        <TextInputComponent
          control={control}
          errMsg={errors?.name?.message}
          label={"Name:"}
          type={"text"}
          placeholder={"Enter your Name"}
          name={"name"}
        ></TextInputComponent>

        <TextInputComponent
          control={control}
          errMsg={errors?.email?.message}
          label={"Email:"}
          type={"email"}
          placeholder={"Enter your email"}
          name={"email"}
        ></TextInputComponent>

        <TextInputComponent
          control={control}
          errMsg={errors?.phone?.message}
          label={"Phone:"}
          type={"text"}
          placeholder={"Enter your phone"}
          name={"phone"}
        ></TextInputComponent>

        <TextInputComponent
          control={control}
          errMsg={errors?.password?.message}
          label={"Password:"}
          type={"password"}
          placeholder={"Enter your Password"}
          name={"password"}
        ></TextInputComponent>

        <TextInputComponent
          control={control}
          errMsg={errors?.confirmPassword?.message}
          label={"confirmPassword:"}
          type={"password"}
          placeholder={"Enter your Password again"}
          name={"confirmPassword"}
        ></TextInputComponent>

        <div className="w-full flex items-center justify-end">
          <div className="w-full">
            <p>
              By signing up, you agree with
              <Link to="/privacy-policy" className="text-teal-600 underline">
                Privacy policy
              </Link>
              &
              <Link
                to="/terms-and-conditions"
                className="text-teal-600 underline"
              >
                Terms and conditions
              </Link>
            </p>
          </div>
        </div>
        <div className="w-full flex justify-between">
          <Button
            buttonName={"Cancel"}
            type={"reset"}
            className={"bg-red-600 hover:bg-red-700 text-white"}
            disabled={isSubmitting}
          ></Button>

          <Button
            buttonName={"Create"}
            type={"submit"}
            className={"bg-green-600 hover:bg-green-700 text-white"}
            disabled={isSubmitting}
          ></Button>
        </div>

        <div className="flex justify-center">
          <p>
            Already have an account?{" "}
            <Link
              to="/"
              className="text-sm italic text-teal-600 underline hover:scale-103 transition duration-300"
            >
              Login
            </Link>
          </p>
        </div>
      </form>
    </>
  );
}
