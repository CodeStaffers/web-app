import OurWork from "../../layout/our-work/OurWork";
import WorkSection from "../../layout/our-work/ourWorkSection/WorkSection";

function OurWorkPage({ ourWorkPage, ourWorkTab }) {
  return (
    <>
      <OurWork page={ourWorkPage} />
      <WorkSection page={ourWorkPage} ourWorkTab={ourWorkTab} />
    </>
  );
}

export default OurWorkPage;
