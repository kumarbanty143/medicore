import { Button } from "@/components/ui/button";
import { SignUpButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Button> Hiii</Button>
      <h1>
        <SignUpButton>signup</SignUpButton>
      </h1>
    </div>
  );
}
