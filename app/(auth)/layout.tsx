// import { ThemeProvider } from "next-themes";
// import { Toaster } from "@/components/ui/toaster";

// export default function AuthLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <div className="flex-center min-h-screen w-full">
//       <ThemeProvider
//         attribute="class"
//         defaultTheme="light"
//         enableSystem
//         disableTransitionOnChange
//       >
//         {children}
//         <Toaster />
//       </ThemeProvider>
//     </div>
//   );
// }

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="flex-center min-h-screen w-full">{children}</div>;
}
