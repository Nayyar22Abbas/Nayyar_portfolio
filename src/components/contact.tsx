// app/contact/page.tsx

"use client";

import { useState } from "react";
import { Column, Input, Button, Textarea, Heading, useToast, Flex, Text } from "@once-ui-system/core";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const { addToast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      addToast({ message: "Please fill in all fields.", variant: "danger" });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        addToast({ message: "Message sent successfully!", variant: "success" });
        setForm({ name: "", email: "", message: "" });
      } else {
        addToast({ message: data.error || "Failed to send message", variant: "danger" });
      }
    } catch (error) {
      addToast({ message: "An unexpected error occurred", variant: "danger" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Column maxWidth={32} padding="l" gap="m" horizontal="center" align="center">
      <Heading variant="display-strong-xs">Contact Me</Heading>
      <Text onBackground="neutral-medium">Have a question or want to work together? Send me a message.</Text>
      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <Flex direction="column" gap="m">
          <Input
            name="name"
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <Input
            name="email"
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <Textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            rows={6}
            required
          />
          <Button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </Flex>
      </form>
    </Column>
  );
}
