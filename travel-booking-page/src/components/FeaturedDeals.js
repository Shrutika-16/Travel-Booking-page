
import './FeaturedDeals.css';

const deals = [
    {
      title: 'Maldives All-Inclusive',
      img: './images/maldives.jpg',
      description: 'Enjoy a luxury stay in Maldives with all-inclusive meals and beach views.',
    },
    {
      title: 'Japan Cherry Blossom Tour',
      img: './images/japan.jpg',
      description: 'Experience Japan\'s famous cherry blossoms with guided tours and activities.',
    },
    {
      title: 'Swiss Alps Adventure',
      img: './images/swiss.jpeg',
      description: 'Embark on an adventurous journey through the breathtaking Swiss Alps.',
    }
  ];
  
  const FeaturedDeals = () => {
    return (
      <section id="deals">
        <h2>Featured Deals</h2>
        <div className="deals-container">
          {deals.map((deal, index) => (
            <div key={index} className="deal-card">
              <img src={deal.img} alt={deal.title} />
              <h3>{deal.title}</h3>
              <p>{deal.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default FeaturedDeals;
  