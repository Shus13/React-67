import { Link } from "react-router";
import Button from "../ui/button/Button";
import { TextInputComponent } from "../ui/form/InputComponent";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const ForgetPasswordSchema = z.object({
  email: z
    .email("Please enter a valid email address")
    .min(1, "Email is required"),
});

type ForgetPasswordType = z.infer<typeof ForgetPasswordSchema>;

export default function ForgetPasswordForm() {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<ForgetPasswordType>({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(ForgetPasswordSchema),
  });

  const handleForgetPasswordSubmit = (data: ForgetPasswordType) => {
    console.log(data);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(handleForgetPasswordSubmit)}
        className="w-full flex flex-col gap-5 py-5"
      >
        <TextInputComponent
          control={control}
          errMsg={errors.email?.message}
          label={"Email:"}
          type={"email"}
          placeholder={"Enter your registered email"}
          name={"email"}
        ></TextInputComponent>

        <div className="w-full flex justify-between">
          <Link to="/" className="w-full flex justify-between">
            <Button
              buttonName={"Cancel"}
              type={"reset"}
              className={"bg-red-600 hover:bg-red-700 text-white"}
              disabled={isSubmitting}
            ></Button>
          </Link>

          <Button
            buttonName={"Submit"}
            type={"submit"}
            className={"bg-green-600 hover:bg-green-700 text-white"}
            disabled={isSubmitting}
          ></Button>
        </div>
      </form>
    </>
  );
}
