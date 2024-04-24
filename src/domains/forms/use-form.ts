import type z from "zod"
import { useForm } from "react-hook-form";
import type { UseFormProps } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export function useCustomForm<T extends z.Schema, Context>(schema: T, args: Omit<UseFormProps<z.infer<T>, Context>, "resolver">) {
    return useForm({
        resolver: zodResolver(schema),
        ...args,
    })
}
