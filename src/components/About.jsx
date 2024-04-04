import Header from "./Header";
import Card from "./Card";

const About = ({ vision, strategy, policy }) => {
  return (
    <section id="about" className="sm:p-10 p-6  w-full h-auto bg-gray-100 md:mb-6 mb-3">
      <Header title={"About Mirak"} />
      <div className="grid gap-3 md:gap-6 grid-cols-[repeat(auto-fill,minmax(340px,1fr))] justify-center md:px-8">
        <Card
          title={"Vision and Misson"}
          img={vision}
          desc={`Vision: To continuously develop and be one of the best engineering firms in the country and in the continent, pioneer state of the art technological solutions and provide the best professional service value regardless of project size or profitability.`}
          optional={
            "Mission: Mirak Engineering is committed to the continuous improvement of its professional services; and endeavors to provide highly qualified professionals to apply their know-how towards the development and service of society with the highest levels of professional integrity and commitment."
          }
        />
        <Card
          title={"Strategy"}
          img={strategy}
          desc={
            "To provide superior engineering offerings and consultancy services that rely on innovation as a core differentiator. We take a holistic approach to the critical elements that customers require. The elements of our business strategy include:"
          }
          optional={
            "Innovation: - we rely on-going innovation in engineering planning and design, project implementation, project management and support services to ensure continuing engineering leadership, which our customers experience in the form of greater cost efficiencies."
          }
          descOpt={
            "Solutions-based selling model: - We use a solution-based selling model that emphasize on tailor-making solutions to address unique customer’s business requirements and needs."
          }
        />
        <Card
          title={"Quality Policy"}
          img={policy}
          desc={
            "Mirak is committed to consistently provide quality services and products that meet and exceed customer and regulatory requirements through continuous improvement. The quality of our products and service reflects directly on our success and is actively encouraged as a matter of pride and satisfaction for all the employees.  "
          }
          descOpt={
            "We are committed to realize customer satisfaction not compromising on the quality of the materials used and the work practices carried out, and always deploying technically skilled and competent personnel. All staff members comply with all applicable requirements and/or regulations pertaining to proper business process execution. Mirak Engineering shall continue to maintain high expertise in its operations by offering relevant training in respect to the company business and the work force on new development within the industry."
          }
            />
      </div>
    </section>
  );
};

export default About;
