import { useTranslation } from "react-i18next";

interface YouTubeEmbedProps {
  videoId?: string;
  title?: string;
}

const YouTubeEmbed = ({ videoId, title = "Video" }: YouTubeEmbedProps) => {
  const { t } = useTranslation();

  if (!videoId) {
    return (
      <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border border-border">
        <div className="text-center text-muted-foreground">
          <div className="text-4xl mb-2">▶️</div>
          <p className="text-sm">{t("video.placeholder")}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="aspect-video rounded-lg overflow-hidden">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default YouTubeEmbed;
