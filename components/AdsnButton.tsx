import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import React from "react";

interface AdsnButtonProps {
  text: string;
  url?: string;
}

const AdsnButton: React.FC<AdsnButtonProps> = ({ text, url = "#" }) => {
  return (
    <Button
      as={Link}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-green-button text-white text-center font-bold md:text-xl md:p-6"
      radius="full"
    >
      {text}
    </Button>
  );
};

export default AdsnButton;
