import { useRouter } from "next/router";
import dynamic from "next/dynamic";
const Load = dynamic(() => import("./PDF.js"), { ssr: false });

function Id() {
  const router = useRouter();
  const { id } = router.query;
  return <Load id={id} />;
}

export default Id;
