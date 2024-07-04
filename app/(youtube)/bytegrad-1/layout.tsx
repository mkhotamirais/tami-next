import React from "react";
import Container from "@/components/youtube/bytegrad-1/container";
import Footer from "@/components/youtube/bytegrad-1/footer";
import Header from "@/components/youtube/bytegrad-1/header";

export default function Bytegrad1Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-zinc-100 text-zinc-900">
      <Container>
        <Header />
        {children}
        <Footer />
      </Container>
    </main>
  );
}
