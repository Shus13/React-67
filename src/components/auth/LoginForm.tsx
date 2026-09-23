import { Link } from "react-router";
import { TextInputComponent } from "../ui/form/InputComponent";
import Button from "../ui/button/Button";
import { useForm } from "react-hook-form";

type CredentialsType = {
  username: string;
  password: string;
};

export default function LoginForm () {

  const {control, handleSubmit, formState: {isSubmitting, errors}} = useForm({
    defaultValues: {
      username: "", password: ""
    }
  })

  const handleLoginSubmit = (data: CredentialsType) => {
    console.log(data)
    // setIsSubmitting(true);
  };


    return(
        <>
            <form
              onSubmit={handleSubmit(handleLoginSubmit)}
              className="w-full flex flex-col gap-5 py-5"
            >
              <TextInputComponent
              control={control} errMsg= {errors?.username?.message}
                label={"Username:"}
                type={"username"}
                placeholder={"Enter your username"}
                name={"username"}
                
              ></TextInputComponent>

              <TextInputComponent
              control={control} errMsg= {errors?.password?.message}
                label={"Password:"}
                type={"password"}
                placeholder={"Enter your password"}
                name={"password"}
              ></TextInputComponent>

              <div className="w-full flex items-center justify-end">
                <div className="w-full">
                  <p>
                    By signing in, you agree with  
                    <Link to='/privacy-policy' className="text-teal-600 underline"> Privacy policy</Link> & <Link to='/terms-and-conditions' className="text-teal-600 underline">Terms and conditions</Link>
                  </p>
                </div>
                <Link
                  to="/forget-password"
                  className="text-sm italic text-teal-600 underline hover:scale-103 transition duration-300"
                >
                  Forget-Password
                </Link>
              </div>
              <div className="w-full flex justify-between">
                <Button
                  buttonName={"Cancel"}
                  type={"reset"}
                  disabled = {isSubmitting}
                  className={"bg-red-600 hover:bg-red-700 text-white"}
                ></Button>

                <Button
                  buttonName={"Submit"}
                  type={"submit"}
                  disabled = {isSubmitting}
                  className={"bg-green-600 hover:bg-green-700 text-white"}
                ></Button>
              </div>
            </form>
        </>
    )
}