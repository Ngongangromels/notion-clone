import { Button } from "@/components/ui/button"
import { Logo } from "./logo"

export const Footer = () => {
    return (
      <div className="flex items-center w-full p-6 dark:bg-[#1F1F1F]  bg-background z-50">
        <Logo />
        <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-X-2 text-muted-foreground">
          <Button className="cursor-pointer" variant="ghost" size="sm">
            Privacy Policy
          </Button>
          <Button className="cursor-pointer" variant="ghost" size="sm">
            Terms & Conditions
          </Button>
        </div>
      </div>
    );
}