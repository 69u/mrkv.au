import Head from "@/components/meta/Head";

import { getBaseUrl } from "@/helpers/url";

import IndexContents from "@/contents/index";

function Index() {
  return (
    <>
      <Head
        title="Kyle Varley · ePortfolio · Home"
        description="An online portfolio featuring a showcase of my projects and some thoughts as an aspiring Full-Stack Developer who loves intuitive, clean and modern technology."
        ogImage={`${getBaseUrl()}/assets/images/og-image.png`}
        overrideTitle
      />
      <IndexContents />
    </>
  );
}

export default Index;
