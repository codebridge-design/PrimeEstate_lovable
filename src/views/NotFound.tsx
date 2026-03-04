import Link from "next/link";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <div className="text-center">
        <h1 className="font-serif text-6xl font-bold text-primary md:text-8xl">
          404
        </h1>
        <h2 className="mt-4 font-serif text-2xl font-semibold md:text-3xl">
          Page Not Found
        </h2>
        <p className="mt-2 text-muted-foreground">
          The property you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Button asChild className="mt-8">
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
