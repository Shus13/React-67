import * as z from "zod";


export const LoginSchema = z.object({
  username: z
    .string("Please enter the valid email adress")
    .min(1, "Email is required"),
  password: z.string().min(1, "Password is required").min(8, "Password must be of 8 characters"),
});

export type CredentialsType = z.infer<typeof LoginSchema >

// const stringPassword = /^(?=.*[a-z])(?=.*[A-z])(?=.*[\d])(?=.*[^a-zA-Z\d]).{8,32}$/;

export const SignupSchema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    age: z.number(),
    address: z.string().min(1, "address is required"),
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

export type SignupType = z.infer<typeof SignupSchema>;

export const ForgetPasswordSchema = z.object({
  email: z
    .email("Please enter a valid email address")
    .min(1, "Email is required"),
});

export type ForgetPasswordType = z.infer<typeof ForgetPasswordSchema>;

export interface IUserDetail {
  id: string,
  firstName: string,
  lastName: string,
  maidenName: string,
  birthDate: string,
  gender: string,
  email: string,
  phone: string,
  username: string,
  image: string,

  address: {
    address: string,
    city: string,
    state: string,
    country: string,
  };
  role: string,
}

export interface IAuthContext {
  login(data: CredentialsType): Promise<void | IUserDetail>,
  loggedInUser: null | IUserDetail,
  getLoggedInUserDetail(): Promise < void | IUserDetail>
}

export type LoginResponseType = {
  accessToken: string,
  refreshToken: string,
}