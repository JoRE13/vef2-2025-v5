import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `News`.
 */
export type NewsProps = SliceComponentProps<Content.NewsSlice>;

/**
 * Component for "News" Slices.
 */
const News: FC<NewsProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for news (variation: {slice.variation}) Slices
    </section>
  );
};

export default News;
