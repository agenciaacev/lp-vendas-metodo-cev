import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Método CEV — Cleane Fontenele",
  description: "O método que transforma conteúdo em faturamento. Conteúdo, Estratégia e Vendas em um único framework operacional.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
