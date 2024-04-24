import { signUpSchema, FormState } from "~/domains/user/sign-up/schema";

export async function signUp(
  state: FormState,
  formData: { get: (arg0: string) => string }
) {
  const validatedInputs = signUpSchema.safeParse({
    email: formData.get("email"),
    displayName: formData.get("displayName"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  });

  if (!validatedInputs.success) {
    return {
      errors: validatedInputs.error.flatten().fieldErrors,
    };
  }

  const response = await fetch("/api/user", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: formData.get("displayName"),
        email: formData.get("email"),
        password: formData.get("password")
    })
  })

  if(response.ok) {
    console.log("Success")
  } else {
    console.error("Registration failed");
  }

}
