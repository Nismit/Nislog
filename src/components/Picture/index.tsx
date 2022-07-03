import Image from "next/image";

type Props = {
  node: {
    type: "element";
    tagName: "img";
    properties: {
      src: string;
      alt: string;
    };
    children?: any;
    position: {
      start: {
        line: number;
        column: number;
        offset: number;
      };
      end: {
        line: number;
        column: number;
        offset: number;
      };
    };
  };
  src: string;
  alt: string;
};

const Picture = (props: any) => {
  const { src, alt } = props as Props;
  const isImg = alt.startsWith("!");

  return (
    <>
      {isImg ? (
        <Image src={src} alt={alt.substring(1)} width={718} height={449} />
      ) : (
        <figure>
          <Image src={src} alt={alt} width={718} height={449} />
          <figcaption>{alt}</figcaption>
        </figure>
      )}
    </>
  );
};

export default Picture;
