"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@workspace/ui/components/form";
import { Input } from "@workspace/ui/components/input";
import { Textarea } from "@workspace/ui/components/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import { Checkbox } from "@workspace/ui/components/checkbox";
import { RadioGroup, RadioGroupItem } from "@workspace/ui/components/radio-group";
import { Button } from "@workspace/ui/components/button";
import { Alert, AlertDescription, AlertTitle } from "@workspace/ui/components/alert";
import { cn } from "@workspace/ui/lib/utils";
import { CheckCircle2 } from "lucide-react";

const onboardingSchema = z.object({
  fullName: z
    .string()
    .min(2, "Let us know who we’ll be speaking with.")
    .max(120, "That name looks a little long."),
  email: z.string().email("Use a business email so we can reach you."),
  company: z
    .string()
    .min(2, "Add your company or product name.")
    .max(120, "Keep it under 120 characters."),
  website: z
    .string()
    .trim()
    .optional()
    .refine(
      (value) => !value || /^https?:\/\/.+/i.test(value),
      "Enter a full URL including https://"
    ),
  productStage: z.string().min(1, "Select where the product is today."),
  projectTypes: z.array(z.string()).min(1, "Choose at least one focus area."),
  timeline: z.string().min(1, "Pick the timeline that fits best."),
  budgetRange: z.string().min(1, "Pick a budget range to help us plan."),
  goals: z
    .string()
    .min(12, "Share a little more about the outcomes you need.")
    .max(1200, "Trim this down to 1,200 characters."),
  extraNotes: z
    .string()
    .max(1200, "Trim this down to 1,200 characters.")
    .optional(),
  subscribe: z.boolean(),
});

const productStages = [
  { value: "idea", label: "Idea only" },
  { value: "mvp", label: "MVP in progress" },
  { value: "launched", label: "Launched – growing" },
  { value: "scale", label: "Replatform / scale-up" },
];

const projectTypeOptions = [
  { value: "saas", label: "SaaS product" },
  { value: "marketplace", label: "Marketplace" },
  { value: "ecommerce", label: "E-commerce" },
  { value: "internal", label: "Internal tool" },
];

const projectTypeCopy: Record<string, string> = {
  saas: "Multi-tenant foundations, billing, and customer onboarding.",
  marketplace: "Two-sided onboarding, payouts, and discovery.",
  ecommerce: "Storefronts, promotions, and high-converting checkout.",
  internal: "Workflow automation, dashboards, and integrations for teams.",
};

const timelineOptions = [
  { value: "now", title: "Ready now", description: "Kickoff within 1–2 weeks." },
  { value: "quarter", title: "This quarter", description: "Start in the next 4–8 weeks." },
  { value: "later", title: "Exploring", description: "Gathering estimates and roadmaps." },
];

const budgetRanges = [
  { value: "<5k", label: "Under $5k" },
  { value: "5-10k", label: "$5k – $10k" },
  { value: "10-25k", label: "$10k – $25k" },
  { value: "25-50k", label: "$25k – $50k" },
  { value: "50-100k", label: "$50k – $100k" },
  { value: "100k+", label: "$100k+" },
];

type OnboardingFormValues = z.infer<typeof onboardingSchema>;

const defaultValues: OnboardingFormValues = {
  fullName: "",
  email: "",
  company: "",
  website: "",
  productStage: "",
  projectTypes: [],
  timeline: "",
  budgetRange: "",
  goals: "",
  extraNotes: "",
  subscribe: true,
};

export function OnboardingForm({ className }: { className?: string } = {}) {
  const [isPending, startTransition] = useTransition();
  const [showSuccess, setShowSuccess] = useState(false);

  const form = useForm<OnboardingFormValues>({
    resolver: zodResolver(onboardingSchema),
    defaultValues,
  });

  const onSubmit = (values: OnboardingFormValues) => {
    startTransition(() => {
      setTimeout(() => {
        console.info("Onboarding submission", values);
        setShowSuccess(true);
        form.reset(defaultValues);
      }, 750);
    });
  };

  return (
    <div className={cn("space-y-6", className)}>
      {showSuccess ? (
        <Alert className="border-primary/40 bg-primary/5 text-primary-foreground/90 dark:bg-primary/10">
          <CheckCircle2 className="text-primary" />
          <AlertTitle>Thanks — we’re on it.</AlertTitle>
          <AlertDescription>
            The team will review your brief and reach out shortly with a kickoff invite. Need to add
            anything else? Reply to the confirmation email and we&apos;ll include it in the plan.
          </AlertDescription>
        </Alert>
      ) : null}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full name</FormLabel>
                  <FormControl>
                    <Input placeholder="Priya Sharma" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Work email</FormLabel>
                  <FormControl>
                    <Input type="email" autoComplete="email" placeholder="you@company.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product or company name</FormLabel>
                  <FormControl>
                    <Input placeholder="Acme Billing" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="website"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Current site / deck (optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="https://..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="productStage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Where is the product today?</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="w-full justify-between">
                      <SelectValue placeholder="Select the current stage" />
                    </SelectTrigger>
                    <SelectContent>
                      {productStages.map((stage) => (
                        <SelectItem key={stage.value} value={stage.value}>
                          {stage.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="projectTypes"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What are we building together?</FormLabel>
                <div className="grid gap-3 sm:grid-cols-2">
                  {projectTypeOptions.map((option) => {
                    const isSelected = field.value?.includes(option.value);
                    return (
                      <label
                        key={option.value}
                        className={cn(
                          "flex w-full cursor-pointer items-start gap-3 rounded-xl border border-border/70 px-4 py-3 transition-colors hover:border-primary/50",
                          isSelected && "border-primary text-primary"
                        )}
                      >
                        <Checkbox
                          checked={isSelected}
                          onCheckedChange={(checked) => {
                            const nextValue = checked
                              ? [...field.value, option.value]
                              : field.value.filter((value) => value !== option.value);
                            field.onChange(nextValue);
                          }}
                          className="mt-1"
                        />
                        <span className="space-y-1 text-sm leading-snug text-foreground">
                          <span className="block font-medium">{option.label}</span>
                          <span className="block text-muted-foreground">
                            {projectTypeCopy[option.value]}
                          </span>
                        </span>
                      </label>
                    );
                  })}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="space-y-6">
            <FormField
              control={form.control}
              name="timeline"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preferred timeline</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={field.value}
                      className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3"
                    >
                      {timelineOptions.map((option) => (
                        <FormItem
                          key={option.value}
                          className={cn(
                            "flex h-full flex-col gap-1 rounded-xl border border-border/70 px-4 py-3 text-left transition-colors hover:border-primary/50",
                            field.value === option.value && "border-primary text-primary"
                          )}
                        >
                          <div className="flex items-start gap-2">
                            <FormControl>
                              <RadioGroupItem value={option.value} className="mt-1" />
                            </FormControl>
                            <div>
                              <FormLabel className="font-medium leading-tight">
                                {option.title}
                              </FormLabel>
                              <p className="text-xs text-muted-foreground">{option.description}</p>
                            </div>
                          </div>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="budgetRange"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Budget guidance (USD)</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full justify-between">
                        <SelectValue placeholder="Choose a range" />
                      </SelectTrigger>
                      <SelectContent>
                        {budgetRanges.map((range) => (
                          <SelectItem key={range.value} value={range.value}>
                            {range.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="goals"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What does success look like?</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Share the outcomes, metrics, or customer experience you’re targeting."
                    rows={4}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="extraNotes"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Links, infrastructure, or team context (optional)</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Repositories, analytics access, internal stakeholders, preferred tools…"
                    rows={3}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="subscribe"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start gap-3 rounded-xl border border-border/70 px-4 py-3">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={(checked) => field.onChange(checked === true)}
                  />
                </FormControl>
                <div className="space-y-1 leading-snug">
                  <FormLabel className="font-medium">Keep me in the loop</FormLabel>
                  <p className="text-sm text-muted-foreground">
                    Send occasional product delivery tips and case studies (you can unsubscribe anytime).
                  </p>
                </div>
              </FormItem>
            )}
          />

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">
              We’ll review and reply within one business day. If it&apos;s urgent, call{" "}
              <a href="tel:+917602272402" className="font-semibold text-foreground">+91 76022 72402</a>.
            </p>
            <Button type="submit" disabled={isPending} className="min-w-[180px]">
              {isPending ? "Sending…" : "Submit onboarding"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
