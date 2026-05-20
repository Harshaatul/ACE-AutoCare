import { useEffect, useState } from "react";

const Testimonials = () => {

  const [index, setIndex] = useState(0);

  const reviews = [
    {
      name: "Amit Topare",
      text: "The thorough knowledge, experience, workmanship and customer-first attitude makes Ace Automotive Solutions the perfect caretaker of your vehicle."
    },
    {
      name: "Harshad Borse",
      text: "Recently serviced my Honda Amaze here. Excellent support, experienced mechanics and very satisfying overall service."
    },
    {
      name: "Abhishek Ghodchore",
      text: "Best and quick service. Honest and reliable suggestions. From body shop to insurance assistance, everything available under one roof."
    },
    {
      name: "Subhash Bhutkar",
      text: "Nice garage to service your vehicle. Experienced mechanics and painting facility available."
    },
    {
      name: "Subodhkumar Phadke",
      text: "Wonderful customer experience since Ace Automotive started. Helpful staff, caring owners and excellent service quality."
    }
  ];

  useEffect(() => {

    const interval = setInterval(() => {

      setIndex((prev) =>
        prev === reviews.length - 1 ? 0 : prev + 1
      );

    }, 4000);

    return () => clearInterval(interval);

  }, []);

  return (

    <section className="reviews-section">

      <div className="reviews-container">

        <h2>What Our Clients Say</h2>

        <p className="reviews-subtitle">
          Trusted by hundreds of happy customers for quality servicing,
          honest guidance and professional car care.
        </p>

        <div className="reviews-slider">

          <div
            className="reviews-track"
            style={{
              transform: `translateX(-${index * 100}%)`
            }}
          >

            {reviews.map((review, i) => (

              <div className="review-card" key={i}>

                <div className="review-user">

                  <h3>{review.name}</h3>

                  <span>★★★★★</span>

                </div>

                <p>{review.text}</p>

              </div>

            ))}

          </div>

          <button
            className="prev-btn"
            onClick={() =>
              setIndex(index === 0 ? reviews.length - 1 : index - 1)
            }
          >
            &#10094;
          </button>

          <button
            className="next-btn"
            onClick={() =>
              setIndex(index === reviews.length - 1 ? 0 : index + 1)
            }
          >
            &#10095;
          </button>

        </div>

      </div>

    </section>

  );

};

export default Testimonials;