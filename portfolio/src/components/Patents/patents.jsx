import "./Patents.css";

function Patents() {

  const patents = [

    {
      title:
      "Automatic Gate System for Industrial Security"
    },

    {
      title:
      "Integrated Ropeway System for Smart Transportation"
    }

  ];

  return (

    <section
      id="patents"
      className="patent-section"
    >

      <h4>PATENTS</h4>

      <h2>
        Patent Applications
      </h2>

      <div className="patent-container">

        {patents.map((item,index) => (

          <div
            className="patent-card"
            key={index}
          >

            <h3>
              {item.title}
            </h3>

            <p>
              Patent Application Filed
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Patents;