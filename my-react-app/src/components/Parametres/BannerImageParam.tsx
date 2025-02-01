interface BannerImageParamProps {
  back: string;
  title: string;
}

export default function BannerImageParam({
  back,
  title,
}: BannerImageParamProps) {
  return (
    <div
      className="banner-image-param"
      style={{ backgroundImage: `url(${back})` }}
    >
      {/* color overlay */}
      <div className="overlay"></div>
      <h1>{title}</h1>
    </div>
  );
}
