import { useSignUp } from "~/domains/user/sign-up/use-sign-up"
import { Input } from "~/components/input"
import styles from "./index.module.css"

export default function SignUpPage() {
    const form = useSignUp()
    
    return (
        <div className={styles.wrapper}>
            <form onSubmit={form.handleSubmit((form) => {
                console.log(form)
                // @todo send to backend
            })}>
                <Input {...form.register("displayName")} />
                <Input {...form.register("email")} />
                <Input {...form.register("password")} />
                <Input {...form.register("confirmPassword")} />
                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}