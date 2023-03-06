// import GDSCNITANDHRA_WS2022_WEB_001 from "../../public/certificates/page_001.pdf";
// import GDSCNITANDHRA_WS2022_GGH_001 from "../../public/certificates/page_002.pdf";
// import GDSCNITANDHRA_WS2022_WEB_002 from "../../public/certificates/page_003.pdf";
// import GDSCNITANDHRA_WS2022_GGH_002 from "../../public/certificates/page_004.pdf";
// import GDSCNITANDHRA_WS2022_WEB_003 from "../../public/certificates/page_005.pdf";
// import GDSCNITANDHRA_WS2022_GGH_003 from "../../public/certificates/page_006.pdf";
// import GDSCNITANDHRA_WS2022_WEB_004 from "../../public/certificates/page_007.pdf";
// import GDSCNITANDHRA_WS2022_GGH_004 from "../../public/certificates/page_008.pdf";
// import GDSCNITANDHRA_WS2022_WEB_005 from "../../public/certificates/page_009.pdf";
// import GDSCNITANDHRA_WS2022_GGH_005 from "../../public/certificates/page_010.pdf";
// import GDSCNITANDHRA_WS2022_WEB_006 from "../../public/certificates/page_011.pdf";
// import GDSCNITANDHRA_WS2022_GGH_006 from "../../public/certificates/page_012.pdf";
// import GDSCNITANDHRA_WS2022_DSA_006 from "../../public/certificates/page_013.pdf";
// import GDSCNITANDHRA_WS2022_WEB_007 from "../../public/certificates/page_014.pdf";
// import GDSCNITANDHRA_WS2022_GGH_007 from "../../public/certificates/page_015.pdf";
// import GDSCNITANDHRA_WS2022_WEB_008 from "../../public/certificates/page_016.pdf";
// import GDSCNITANDHRA_WS2022_GGH_008 from "../../public/certificates/page_017.pdf";
// import GDSCNITANDHRA_WS2022_GGH_009 from "../../public/certificates/page_018.pdf";
// import GDSCNITANDHRA_WS2022_WEB_010 from "../../public/certificates/page_019.pdf";
// import GDSCNITANDHRA_WS2022_WEB_011 from "../../public/certificates/page_020.pdf";

const certificatePairs = {
  GDSCNITANDHRA_WS2022_WEB_001: "./page_001.pdf",
  GDSCNITANDHRA_WS2022_GGH_001: "./page_002.pdf",
  GDSCNITANDHRA_WS2022_WEB_002: "./page_003.pdf",
  GDSCNITANDHRA_WS2022_GGH_002: "./page_004.pdf",
  GDSCNITANDHRA_WS2022_WEB_003: "./page_00.5pdf",
  GDSCNITANDHRA_WS2022_GGH_003: "./page_006.pdf",
  GDSCNITANDHRA_WS2022_WEB_004: "./page_007.pdf",
  GDSCNITANDHRA_WS2022_GGH_004: "./page_008.pdf",
  GDSCNITANDHRA_WS2022_WEB_005: "./page_009.pdf",
  GDSCNITANDHRA_WS2022_GGH_005: "./page_010.pdf",
  GDSCNITANDHRA_WS2022_WEB_006: "./page_011.pdf",
  GDSCNITANDHRA_WS2022_GGH_006: "./page_012.pdf",
  GDSCNITANDHRA_WS2022_DSA_006: "./page_013.pdf",
  GDSCNITANDHRA_WS2022_WEB_007: "./page_014.pdf",
  GDSCNITANDHRA_WS2022_GGH_007: "./page_015.pdf",
  GDSCNITANDHRA_WS2022_WEB_008: "./page_016.pdf",
  GDSCNITANDHRA_WS2022_GGH_008: "./page_017.pdf",
  GDSCNITANDHRA_WS2022_GGH_009: "./page_018.pdf",
  GDSCNITANDHRA_WS2022_WEB_010: "./page_019.pdf",
  GDSCNITANDHRA_WS2022_WEB_011: "./page_020.pdf",
};

function PDF({ id }) {
  return (
    <iframe
      style={{
        height: "100%",
        width: "100%",
        position: "absolute",
        zIndex: "100",
      }}
      src={certificatePairs[id]}
      allow="autoplay"
    />
  );
}

export default PDF;
