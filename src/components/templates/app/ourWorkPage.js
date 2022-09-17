import OurWork from "../../layout/our-work/OurWork";
import Work from "../../layout/our-work/ourWorkSection/Work";

function OurWorkPage({ ourWorkPage }) {
  return (
    <>
      <OurWork page={ourWorkPage} />
      <Work page={ourWorkPage} />
    </>
  );
}

export default OurWorkPage;
