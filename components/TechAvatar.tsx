import Image from "next/image";

type Props = {
  tech: string;
};

const TechAvatar = ({ tech }: Props) => {
  let source;
  let techName = tech.toLowerCase();

  switch (techName) {
    case "openai api":
      source =
        "/images/openaiapi.png";
      break;
    case "tiptap editor":
      source = "/images/tiptapeditor.png";
      break;
    case "neondb":
      source = "/images/neondb.png";
      break;
    case "drizzleorm":
      source = "/images/drizzleorm.png";
      break;
    case "clerk":
      source = "/images/clerk.png";
      break;
    case "shadcnui":
      source = "/images/shadcnui.png";
      break;
    case "nextjs":
      source = "/images/nextjs.svg";
      break;
    case "chakraui":
      source = "/images/chakraui.png";
      break;
    case "firebase/firestore":
      source = "/images/firebase.png";
      break;
    case "astro":
      source = "/images/astro.png";
      break;
    case "tailwindcss":
      source = "/images/tailwindcss.png";
      break;
    default:
      source = "/images/web-development.png";
      break;
  }

  return (
    <Image
      className="w-20 h-20 rounded-full p-1 border-2 border-slate-100"
      width={64}
      height={64}
      src={source}
      alt={tech}
    />
  );
};

export default TechAvatar;
