import { categoryTitle, serviceCategories } from '../data/serviceCatalog'

function PriceGroups() {
  return (
    <div className="price-groups">
      {serviceCategories.map(([category, items]) => {
        const listedItems = items.filter((item) => item.name)

        return (
          <section className="price-group" key={category}>
            <h2>{categoryTitle(category)}</h2>
            {listedItems.length === 0 ? (
              <p className="price-empty">Az árak hamarosan elérhetők.</p>
            ) : (
              <ul>
                {listedItems.map((item) => (
                  <li key={`${category}-${item.name}`}>
                    <div className="price-details">
                      <span className="price-name">{item.name}</span>
                      {item.duration && (
                        <span className="price-duration">{item.duration}</span>
                      )}
                      {item.info && (
                        <span className="price-duration">{item.info}</span>
                      )}
                    </div>
                    <span className="price-amount">{item.price}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        )
      })}
    </div>
  )
}

export default PriceGroups
