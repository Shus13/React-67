import { Link } from "react-router";
import Button from "../ui/button/Button";
import * as z from "zod";
import { TextInputComponent } from "../ui/form/InputComponent";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axiosClient from "../../lib/services/HttpService";

// const stringPassword = /^(?=.*[a-z])(?=.*[A-z])(?=.*[\d])(?=.*[^a-zA-Z\d]).{8,32}$/;

const SignupSchema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    age: z.string().min(1, "Age is required"),
    // name: z.string("Name can't be empty").min(4, "Nmae must be of 4 character"),
    // email: z
    //   .email("Please enter a valid email address")
    //   .min(1, "Email is required"),
    // phone: z
    //   .string()
    //   .min(1, "Phone numbet is required")
    //   .min(10, "Phone number must be of 10 digit")
    //   .max(10, "Phone number max length is of 10 digit"),
    // password: z
    //   .string()
    //     .regex(stringPassword, "Password must be between 8 to 32 character with one number, symbol, small and capital words"),
      // .min(8, "Password must be of 8 Characters")
      // .max(32, "Password can't be more than 32 characters")
      // .regex(/[a-z]/, "Password must contain one small letter")
      // .regex(/[A-Z]/, "Password must contain one capital letter")
      // .regex(/[\d]/, "Password must contain one number")
      // .regex(/[^a-zA-Z\d]/, "Password must contain one symbol"),
    // confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  // .refine((data) => data.password === data.confirmPassword, {
  //   message: "Password doesn't match",
  //   path: ["confirmPassword"],
  // });

type CredentialsType = z.infer<typeof SignupSchema>;

export default function SignupForm() {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<CredentialsType>({
    defaultValues: {
      firstName: "",
      lastName: "",
      age: ""
      // name: "",
      // email: "",
      // phone: "",
      // password: "",
      // confirmPassword: "",
    },
    resolver: zodResolver(SignupSchema),
  });

  const handleLoginSubmit = async (data: CredentialsType) => {
    try{
      const detail = await axiosClient.post("users/add", data)
      console.log({detail: detail.data})


    }catch(exception){
      console.log({exception})
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(handleLoginSubmit)}
        className="w-full flex flex-col gap-5 py-5"
      >
        <TextInputComponent
          control={control}
          errMsg={errors?.firstName?.message}
          label={"First Name:"}
          type={"text"}
          placeholder={"Enter your first Name"}
          name={"firstName"}
        ></TextInputComponent>

        <TextInputComponent
          control={control}
          errMsg={errors?.lastName?.message}
          label={"Last Name:"}
          type={"text"}
          placeholder={"Enter your Last Name"}
          name={"lastName"}
        ></TextInputComponent>

        <TextInputComponent
          control={control}
          errMsg={errors?.age?.message}
          label={"Age:"}
          type={"text"}
          placeholder={"Enter your Age"}
          name={"age"}
        ></TextInputComponent>
        {/* <TextInputComponent
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
          type={"tel"}
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
        ></TextInputComponent> */}

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
          <p className="pt-2 text-lg italic">
            Already have an account?{" "}
          </p>
        </div>

        <div className="flex justify-center">
          <Link
              to="/"
              className="bg-teal-800 text-white p-3 rounded-lg underline hover:scale-103 transition duration-30"
            >
              Login
            </Link>
        </div>
      </form>
    </>
  );
}
