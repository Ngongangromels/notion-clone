"use client"


import Link from "next/link"


import { Button } from "@/components/ui/button"
import Image from "next/image";

const Error = () => {
    return (
      <div className="h-full flex-col items-center justify-center space-y-6">
        <Image src="/error.png" height={300} width={300} alt="/Error.png" />
        <h2 className="text-xl font-medium">Sonthing went wrong!</h2>
        <Button asChild>
          <Link href="/documents">Go back</Link>
        </Button>
      </div>
    );
}
 
export default Error;