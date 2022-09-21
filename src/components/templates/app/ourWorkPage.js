import OurWork from "../../layout/our-work/OurWork";
import WorkSection from "../../layout/our-work/ourWorkSection/WorkSection";

function OurWorkPage({ ourWorkPage }) {
  return (
    <>
      <OurWork page={ourWorkPage} />
      <WorkSection page={ourWorkPage} />
    </>
  );
}

export default OurWorkPage;
