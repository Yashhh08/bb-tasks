"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { toast } from "../ui/use-toast";

const dynamicFieldSchema = z.object({
  key: z.string().min(1, { message: "Field name is required" }),
  value: z.string().min(1, { message: "Field value is required" }),
});

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({ message: "Invalid email address." }),
  contact: z.string().min(10, {
    message: "Contact number must be at least 10 characters",
  }),
  message: z.string().min(5, {
    message: "message must be at least 5 characters.",
  }),
  country: z.string().min(2, {
    message: "Country must be at least 2 characters.",
  }),
  state: z.string().min(2, {
    message: "State must be at least 2 characters.",
  }),
  city: z.string().min(2, {
    message: "City must be at least 2 characters.",
  }),
  dynamicFields: z.array(dynamicFieldSchema),
});

const ContactForm = () => {
  const [sending, setSending] = useState(false);

  const [values, setValues] = useState<{
    name: string;
    email: string;
    contact: string;
    message: string;
    country: string;
    state: string;
    city: string;
    dynamicFields: { key: string; value: string }[];
  }>({
    name: "",
    email: "",
    contact: "",
    message: "",
    country: "",
    state: "",
    city: "",
    dynamicFields: [],
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      contact: "",
      message: "",
      country: "",
      state: "",
      city: "",
      dynamicFields: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "dynamicFields",
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setSending(true);

      setValues(values);

      toast({
        variant: "success",
        title: "Thank you for reaching out! We will get back to you soon.",
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error sending email! Please try again.",
        description: error.message,
      });
    } finally {
      setSending(false);
      form.reset();
    }
  }

  const isFormDataEmpty = (data: any) => {
    return Object.values(data).every((value) =>
      Array.isArray(value) ? value.length === 0 : value === ""
    );
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex justify-between items-center gap-10">
          <div className="w-1/2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Name *"
                      className="border-0 border-b-2 rounded-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="w-1/2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Email *"
                      className="border-0 border-b-2 rounded-none"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <FormField
          control={form.control}
          name="contact"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Contact *"
                  className="border-0 border-b-2 rounded-none"
                  type="number"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="message *"
                  className="border-0 border-b-2 rounded-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-between items-center gap-10">
          <div className="w-1/3">
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Country *"
                      className="border-0 border-b-2 rounded-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="w-1/3">
            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="State *"
                      className="border-0 border-b-2 rounded-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="w-1/3">
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="City *"
                      className="border-0 border-b-2 rounded-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* Dynamic Fields */}
        <div className="space-y-4">
          {fields.map((field, index) => (
            <div key={field.id} className="flex items-center gap-4 flex-wrap">
              <input
                {...form.register(`dynamicFields.${index}.key`)}
                placeholder="Field Name"
                className="flex-1 border-0 border-b-2 rounded-none"
              />
              <input
                {...form.register(`dynamicFields.${index}.value`)}
                placeholder="Field Value"
                className="flex-1 border-0 border-b-2 rounded-none"
              />
              <button
                type="button"
                onClick={() => remove(index)}
                className="px-2 py-1 bg-red-700 text-white rounded"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="flex max-sm:justify-center items-center">
            <Button
              onClick={() => append({ key: "", value: "" })}
              className="rounded-xl bg-[#F9B31B] text-black transition-all hover:text-white text-base"
              size={"sm"}
            >
              Add More
            </Button>
          </div>
        </div>

        {/* Display Data */}

        {!isFormDataEmpty(values) && (
          <div className="">
            <h2>Submitted Data</h2>
            <pre>{JSON.stringify(values, null, 1)}</pre>
          </div>
        )}

        <Button
          className="rounded-xl text-[#F9B31B] transition-all hover:text-white text-base w-full text-center"
          disabled={sending}
          type="submit"
        >
          Contact Us
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
