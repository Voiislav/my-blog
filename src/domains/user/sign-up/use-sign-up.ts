import { useCustomForm } from "~/domains/forms/use-form";
import { signUpSchema } from "./schema"

export function useSignUp() {
    return useCustomForm(signUpSchema, {})
}