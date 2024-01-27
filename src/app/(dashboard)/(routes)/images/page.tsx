'use client'

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import axios from "axios";
import * as z from "zod";
import { formSchema } from "./constants";
import { UserAvatar } from '@/components/user-avatar';

interface ChatCompletionRequestMessage {
    role: 'user' | 'assistant' | 'system';
    content: string;
    name?: string;
}

const ImagePage = () => {
    const router = useRouter();
    const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: ""
        }
    });

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values);
        try {
            const userMessage: ChatCompletionRequestMessage = {
                role: "user",
                content: values.prompt
            };
            const newMessages = [...messages, userMessage];

            const response = await axios.post("/api/conversation", { messages: newMessages });
            setMessages((current) => [...current, userMessage, response.data]);

        } catch (error: any) {
            //TODO OPEN PRO MODAL
            console.log(error);
        } finally {
            router.refresh();
        }
    };

    return (
        <div className="flex items-center justify-center flex-col w-full mt-10">
            <div className="text-4xl font-bold text-center mb-4">
                Image 💬
            </div>
            <div className="space-y-4 mt-4 bottom-0">
                <div className="flex flex-col-reverse gap-y-4">
                    {messages.map((message) => (
                        <div key={message.content}>
                            <p className='text-sm'>
                                {message.content}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="px-4 lg:px-8 flex items-center absolute inset-x-0 bottom-0 h-16">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="rounded-lg border border-black w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2 sm:w-full"
                    >
                        <FormField
                            name="prompt"
                            render={({ field }) => (
                                <FormItem className="col-span-12 lg:col-span-10">
                                    <Input
                                        className="border-0
                                            outline-none 
                                            focus-visible:ring-0 
                                            focus-visible:ring-transparent
                                            "
                                        disabled={isLoading}
                                        placeholder="Turn Prompt into Image"
                                        {...field}
                                    />
                                </FormItem>
                            )}
                        />
                        <Button className="col-span-12 lg:col-span-2 w-full">
                            Generate
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    );
};

export default ImagePage;

