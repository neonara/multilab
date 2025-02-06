interface BannerImageParamProps {
  back: string;
  title: string;
  backPosition?: string;
}

export default function BannerImageParam({
  back,
  title,
  backPosition = "",
}: BannerImageParamProps) {
  return (
    <div
      className="banner-image-param"
      style={{
        backgroundImage: `url(${back})`,
        backgroundPosition: backPosition,
      }}
    >
      {/* color overlay */}
      <div className="overlay"></div>
      <h1>{title}</h1>
    </div>
  );
}