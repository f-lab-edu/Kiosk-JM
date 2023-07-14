import { Link } from "lucide-react";
import { Button } from "./button";

export default function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}
