import Image from "next/image";
import { Inter } from "next/font/google";
import Paragraph from "@/components/ui/paragraph";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-red-500">
      Hello world
      <Paragraph size={"sm"} />
    </main>
  );
}
