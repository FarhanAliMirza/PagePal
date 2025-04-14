import { MagicCard } from "../magicui/magic-card";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AnimatedShinyText } from "../magicui/animated-shiny-text";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Phone, Mail } from "lucide-react";

const BookCard = (props : any | undefined ) => {
  console.log(props);
  const { theme } = useTheme();
  const book = props.book;
  return (
    <Card className="p-0 max-w-sm w-full shadow-none border-none">
      <MagicCard
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        className="p-0"
      >
        <CardHeader className="border-b border-border p-4 [.border-b]:pb-4 bg-secondary/10">
          <CardTitle>{book.title}</CardTitle>
          <CardDescription>
            <div className="flex flex-col w-1/2 justify-start items-start gap-2">
              <div className="font-bold">by {book.author}</div>
              <div className="rounded-full border p-1 text-xs border-accent/30 bg-accent/10">
                <AnimatedShinyText className="">
                  {book.genre}
                </AnimatedShinyText>
              </div>
              <div className="font-light pt-1">
                in {book.city}
              </div>
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent className="">
        </CardContent>
        <CardFooter className="grid grid-cols-2 p-4 gap-3 border-t border-border [.border-t]:pt-4 bg-card-foreground/5">
          <Button className="" variant={"secondary"}><Phone/>Contact</Button>
          <Button className="" variant={"outline"}><Mail/>Email</Button>
        </CardFooter>
      </MagicCard>
    </Card>
  );
};

export default BookCard;
