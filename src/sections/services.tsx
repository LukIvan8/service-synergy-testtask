import Card from "../components/card";
import "./services.scss";

const Services = () => {
  return (
    <>
      <div className="service-header">
        <div className="service-background"></div>
        <div className="divider"></div>
        <div className="service-content">
          <p className="title">What we do</p>
          <p className="secondary">
            Our focus is on providing exceptional value to our clients by
            <span> delivering high-quality legal services.</span> We believe in
            building strong, long-term relationships with our clientsbased on
            trust, integrity, and respect.
          </p>
          <p className="secondary">
            With our help, you can{" "}
            <span>
              navigate legal complexities with confidence and achieve the
              success you deserve.
            </span>
          </p>
        </div>
      </div>
      <div className="service-cards-container">
        <Card
          title="Legal Consultancy"
          text="Our legal consultancy services are designed to help businesses navigate complex legal issues and make informed decisions. Our team of legal experts will work closely with you to understand your unique needs and provide tailored solutions that meet your specific requirements."
          image="/chat.svg"
        />
        <Card
          title="Business Incorporation"
          text="Starting a new business can be an exciting but challenging experience. We offer business incorporation services that help streamline the process and ensure compliance with all legal requirements. From entity formation to regulatory compliance, we can help you get your business up and running in no time."
          image="/rocket.svg"
        />

        <Card
          title="Banks & Crypto Solutions"
          text="Whether you need assistance with opening a bank account, setting up a merchant account, or accessing cryptocurrency exchanges, we can help. Our team of experts has a deep understanding of the regulatory landscape and can help you navigate complex financial transactions with confidence."
          image="/cards.svg"
        />
        <Card
          title="AML & Compliance"
          text="With our help, you can rest assured that your business is compliant with AML and other regulatory requirements, and that you are well-equipped to manage any potential risks that may arise. Let us help you protect your business and achieve long-term success."
          image="/shield.svg"
        />
        <Card
          wide
          wideText={[
            "Whether you're looking to rent a new office space, set up a satellite office, or expand your team in a new market, we can help. ",
            "Our research services provide you with the insights and information you need to make informed decisions about your office space and talent needs. ",
          ]}
          title="HR & Office Rent"
          text="Whether you're looking to rent a new office space, set up a satellite office, or expand your team in a new market, we can help. Our research services provide you with the insights and information you need to make informed decisions about your office space and talent needs. "
          image="/person.svg"
        />
      </div>
    </>
  );
};

export default Services;
