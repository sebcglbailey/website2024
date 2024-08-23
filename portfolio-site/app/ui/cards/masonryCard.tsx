import ContentCard from "./contentCard";

export default function MasonryCard({
  data: { id, isBlank = false, href, title, content },
}: {
  data: {
    id?: string;
    isBlank?: boolean;
    href: string;
    title: string;
    content: React.ReactNode;
  };
}) {
  return (
    <ContentCard key={id} isBlank={isBlank} href={href}>
      <h2>{title}</h2>
      {content}
    </ContentCard>
  );
}
