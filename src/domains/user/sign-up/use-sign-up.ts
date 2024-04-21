import { useForm } from "~/domains/forms/use-form";
import { signUpSchema } from "./schema"

export function useSignUp() {
    return useForm(signUpSchema, {})
}