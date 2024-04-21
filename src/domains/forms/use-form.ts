import type z from "zod"
import { useForm as useFormOriginal } from "react-hook-form";
import type { UseFormProps } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export function useForm<T extends z.Schema, Context>(schema: T, args: Omit<UseFormProps<z.infer<T>, Context>, "resolver">) {
    return useFormOriginal({
        resolver: zodResolver(UserSchema),
        ...args,
    })
}
