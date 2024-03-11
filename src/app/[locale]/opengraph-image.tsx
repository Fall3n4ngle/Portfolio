import { getScopedI18n } from "@/lib/i18n/server";
import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  const t = await getScopedI18n("hero");

  const interSemiBold = fetch(
    new URL("../../assets/fonts/Inter-SemiBold.ttf", import.meta.url),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{ fontFamily: "Inter" }}
        tw="flex w-full h-full items-center justify-center"
      >
        <div tw="max-w-[800px] mx-auto">
          <h3 tw="h3 mb-2">{t("subtitle")}</h3>
          <h1 tw="h1 mb-5">{t("title")}</h1>
          <p tw="lead">{t("info")}</p>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Inter",
          data: await interSemiBold,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
